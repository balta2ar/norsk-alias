# Norsk Alias

A tiny dependency-free browser version of Alias for two teams, built for Norwegian word packs.

## Run locally

Serve the directory with any static file server:

```sh
python3 -m http.server 8080
```

Then open `http://localhost:8080/`.

The app has no build step and no runtime dependencies. It is designed to be deployable as static files on GitHub Pages, Cloudflare Pages, Netlify, or any HTTPS static host.

## Gameplay

- Two fixed teams: `Lag 1` and `Lag 2`.
- Rounds alternate between teams.
- Each round lasts 120 seconds.
- Swipe up or press `Riktig` when the word is guessed.
- Swipe down or press `Pass` to skip.
- Correct words score 1 point. Skips have no penalty.
- Round results are shown after each round.

## Word data

Norwegian words live in `words.js`. Add more entries by difficulty and category without changing the app logic.

The bundled list is a curated Bokmål starter pack for party gameplay. It is intentionally not a raw import from a dictionary or corpus, because broad word lists need filtering, categorization, and license review before being shipped.
