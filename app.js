(function () {
  "use strict";

  var ROUND_SECONDS = 120;
  var STORAGE_KEY = "norsk-alias-state-v1";
  var SWIPE_THRESHOLD = 56;

  var state = loadState();
  var round = null;
  var timerId = null;
  var selectedDifficulty = "easy";
  var selectedCategory = "all";
  var touchStart = null;

  var els = {};

  document.addEventListener("DOMContentLoaded", init);

  function init() {
    cacheElements();
    buildChoices();
    bindEvents();
    registerServiceWorker();
    renderSetup();
  }

  function cacheElements() {
    els.setupScreen = document.getElementById("setup-screen");
    els.playScreen = document.getElementById("play-screen");
    els.recapScreen = document.getElementById("recap-screen");
    els.roundForm = document.getElementById("round-form");
    els.difficultyOptions = document.getElementById("difficulty-options");
    els.categoryOptions = document.getElementById("category-options");
    els.activeTeamLabel = document.getElementById("active-team-label");
    els.resetGame = document.getElementById("reset-game");
    els.playTeam = document.getElementById("play-team");
    els.timer = document.getElementById("timer");
    els.wordCard = document.getElementById("word-card");
    els.currentWord = document.getElementById("current-word");
    els.currentCategory = document.getElementById("current-category");
    els.correctButton = document.getElementById("correct-button");
    els.skipButton = document.getElementById("skip-button");
    els.recapTeam = document.getElementById("recap-team");
    els.roundScore = document.getElementById("round-score");
    els.roundWordList = document.getElementById("round-word-list");
    els.nextRound = document.getElementById("next-round");
    els.teamScores = [
      document.getElementById("team-0-score"),
      document.getElementById("team-1-score")
    ];
    els.recapTeamScores = [
      document.getElementById("recap-team-0-score"),
      document.getElementById("recap-team-1-score")
    ];
  }

  function buildChoices() {
    Object.keys(window.ALIAS_DIFFICULTIES).forEach(function (difficulty) {
      els.difficultyOptions.appendChild(createChoice(
        "difficulty",
        difficulty,
        window.ALIAS_DIFFICULTIES[difficulty],
        difficulty === selectedDifficulty
      ));
    });

    Object.keys(window.ALIAS_CATEGORIES).forEach(function (category) {
      els.categoryOptions.appendChild(createChoice(
        "category",
        category,
        window.ALIAS_CATEGORIES[category],
        category === selectedCategory
      ));
    });
  }

  function createChoice(name, value, label, checked) {
    var wrapper = document.createElement("label");
    var input = document.createElement("input");
    var text = document.createElement("span");

    wrapper.className = "choice";
    input.type = "radio";
    input.name = name;
    input.value = value;
    input.checked = checked;
    text.textContent = label;

    wrapper.appendChild(input);
    wrapper.appendChild(text);
    return wrapper;
  }

  function bindEvents() {
    els.roundForm.addEventListener("submit", function (event) {
      event.preventDefault();
      var form = new FormData(els.roundForm);
      selectedDifficulty = form.get("difficulty") || "easy";
      selectedCategory = form.get("category") || "all";
      startRound();
    });

    els.correctButton.addEventListener("click", function () {
      markWord("correct");
    });

    els.skipButton.addEventListener("click", function () {
      markWord("skipped");
    });

    els.nextRound.addEventListener("click", function () {
      state.activeTeam = state.activeTeam === 0 ? 1 : 0;
      saveState();
      renderSetup();
    });

    els.resetGame.addEventListener("click", function () {
      state = initialState();
      saveState();
      renderSetup();
    });

    els.wordCard.addEventListener("pointerdown", onPointerDown);
    els.wordCard.addEventListener("pointermove", onPointerMove);
    els.wordCard.addEventListener("pointerup", onPointerUp);
    els.wordCard.addEventListener("pointercancel", clearSwipeState);

    document.addEventListener("keydown", function (event) {
      if (!round) {
        return;
      }
      if (event.key === "ArrowUp") {
        markWord("correct");
      }
      if (event.key === "ArrowDown") {
        markWord("skipped");
      }
    });
  }

  function startRound() {
    var pool = buildPool(selectedDifficulty, selectedCategory);
    round = {
      team: state.activeTeam,
      startedAt: Date.now(),
      endsAt: Date.now() + ROUND_SECONDS * 1000,
      pool: shuffle(pool),
      current: null,
      results: []
    };

    showScreen("play");
    renderPlayHeader();
    nextWord();
    tick();
    timerId = window.setInterval(tick, 250);
  }

  function buildPool(difficulty, category) {
    var allWords = window.ALIAS_WORDS[difficulty] || window.ALIAS_WORDS.easy || [];
    var filtered = category === "all"
      ? allWords.slice()
      : allWords.filter(function (item) {
        return item.category === category;
      });

    if (filtered.length === 0) {
      filtered = allWords.slice();
    }

    var fresh = filtered.filter(function (item) {
      return state.usedWords.indexOf(wordKey(item)) === -1;
    });

    return fresh.length > 0 ? fresh : filtered;
  }

  function markWord(result) {
    if (!round || !round.current) {
      return;
    }

    round.results.push({
      word: round.current.word,
      category: round.current.category,
      result: result
    });

    if (state.usedWords.indexOf(wordKey(round.current)) === -1) {
      state.usedWords.push(wordKey(round.current));
    }

    nextWord();
  }

  function nextWord() {
    if (!round) {
      return;
    }

    if (round.pool.length === 0) {
      round.pool = shuffle(buildPool(selectedDifficulty, selectedCategory));
    }

    round.current = round.pool.pop();
    els.currentWord.textContent = round.current.word;
    els.currentCategory.textContent = categoryLabel(round.current.category);
  }

  function tick() {
    if (!round) {
      return;
    }

    var remaining = Math.max(0, Math.ceil((round.endsAt - Date.now()) / 1000));
    els.timer.textContent = String(remaining);

    if (remaining <= 0) {
      endRound();
    }
  }

  function endRound() {
    if (!round) {
      return;
    }

    window.clearInterval(timerId);
    timerId = null;

    var score = round.results.filter(function (item) {
      return item.result === "correct";
    }).length;

    state.scores[round.team] += score;
    saveState();
    renderRecap(round, score);
    round = null;
  }

  function renderSetup() {
    showScreen("setup");
    els.activeTeamLabel.textContent = teamName(state.activeTeam);
    els.teamScores.forEach(function (scoreEl, index) {
      scoreEl.textContent = String(state.scores[index]);
    });
    document.querySelectorAll("[data-team-card]").forEach(function (card) {
      card.classList.toggle("active", Number(card.dataset.teamCard) === state.activeTeam);
    });
  }

  function renderPlayHeader() {
    els.playTeam.textContent = teamName(state.activeTeam);
    els.timer.textContent = String(ROUND_SECONDS);
  }

  function renderRecap(finishedRound, score) {
    showScreen("recap");
    els.recapTeam.textContent = teamName(finishedRound.team);
    els.roundScore.textContent = "+" + score;
    els.recapTeamScores.forEach(function (scoreEl, index) {
      scoreEl.textContent = String(state.scores[index]);
    });
    document.querySelectorAll("[data-recap-team-card]").forEach(function (card) {
      card.classList.toggle("active", Number(card.dataset.recapTeamCard) === finishedRound.team);
    });

    renderResultList(els.roundWordList, finishedRound.results);
  }

  function renderResultList(list, items) {
    list.textContent = "";
    if (items.length === 0) {
      var empty = document.createElement("li");
      empty.className = "empty-state";
      empty.textContent = "Ingen";
      list.appendChild(empty);
      return;
    }

    items.forEach(function (item) {
      var li = document.createElement("li");
      var word = document.createElement("span");
      var status = document.createElement("strong");

      li.className = item.result === "correct" ? "is-correct" : "is-skipped";
      word.textContent = item.word;
      status.textContent = item.result === "correct" ? "Gjettet" : "Pass";

      li.appendChild(word);
      li.appendChild(status);
      list.appendChild(li);
    });
  }

  function onPointerDown(event) {
    if (!round) {
      return;
    }
    touchStart = { x: event.clientX, y: event.clientY };
    els.wordCard.setPointerCapture(event.pointerId);
  }

  function onPointerMove(event) {
    if (!touchStart) {
      return;
    }
    var deltaY = event.clientY - touchStart.y;
    els.wordCard.classList.toggle("accepting", deltaY < -SWIPE_THRESHOLD);
    els.wordCard.classList.toggle("skipping", deltaY > SWIPE_THRESHOLD);
  }

  function onPointerUp(event) {
    if (!touchStart) {
      return;
    }

    var deltaY = event.clientY - touchStart.y;
    clearSwipeState();

    if (deltaY < -SWIPE_THRESHOLD) {
      markWord("correct");
    } else if (deltaY > SWIPE_THRESHOLD) {
      markWord("skipped");
    }
  }

  function clearSwipeState() {
    touchStart = null;
    els.wordCard.classList.remove("accepting", "skipping");
  }

  function showScreen(screen) {
    els.setupScreen.classList.toggle("screen-active", screen === "setup");
    els.playScreen.classList.toggle("screen-active", screen === "play");
    els.recapScreen.classList.toggle("screen-active", screen === "recap");
  }

  function teamName(index) {
    return index === 0 ? "Lag 1" : "Lag 2";
  }

  function categoryLabel(category) {
    return window.ALIAS_CATEGORIES[category] || window.ALIAS_CATEGORIES.general;
  }

  function wordKey(item) {
    return item.category + ":" + item.word.toLowerCase();
  }

  function shuffle(items) {
    var copy = items.slice();
    var current = copy.length;
    var randomIndex;
    var temporary;

    while (current !== 0) {
      randomIndex = Math.floor(Math.random() * current);
      current -= 1;
      temporary = copy[current];
      copy[current] = copy[randomIndex];
      copy[randomIndex] = temporary;
    }

    return copy;
  }

  function initialState() {
    return {
      activeTeam: 0,
      scores: [0, 0],
      usedWords: []
    };
  }

  function loadState() {
    try {
      var parsed = JSON.parse(window.localStorage.getItem(STORAGE_KEY));
      if (
        parsed &&
        Array.isArray(parsed.scores) &&
        parsed.scores.length === 2 &&
        typeof parsed.activeTeam === "number" &&
        Array.isArray(parsed.usedWords)
      ) {
        return parsed;
      }
    } catch (error) {
      return initialState();
    }
    return initialState();
  }

  function saveState() {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }

  function registerServiceWorker() {
    if ("serviceWorker" in navigator && window.isSecureContext) {
      navigator.serviceWorker.register("./service-worker.js").catch(function () {
        // Offline support is best-effort and should not block gameplay.
      });
    }
  }
})();
