(function () {
  var WORDS_BY_DIFFICULTY = {
    easy: {
      general: [
        "hund", "katt", "hest", "fugl", "fisk", "bil", "tog", "buss",
        "sykkel", "skole", "jobb", "hus", "hage", "dør", "vindu", "stol",
        "bord", "seng", "lampe", "telefon", "nøkkel", "veske", "sko", "jakke",
        "regn", "snø", "sol", "vind", "ball", "gave"
      ],
      music: [
        "sang", "kor", "band", "gitar", "piano", "tromme", "fløyte", "fiolin",
        "radio", "konsert", "danse", "rytme", "melodi", "plate", "artist",
        "mikrofon", "høyttaler", "refreng", "vers", "scene"
      ],
      art: [
        "kunst", "farge", "maleri", "tegning", "blyant", "pensel", "lerret",
        "plakat", "bilde", "ramme", "museum", "skisse", "form", "mønster",
        "foto", "figur", "leire", "papir", "lim", "saks"
      ],
      books: [
        "bok", "side", "kapittel", "forfatter", "lese", "eventyr", "roman",
        "dikt", "bibliotek", "bokhylle", "omslag", "tittel", "historie",
        "helt", "skurk", "brev", "avis", "blad", "ordbok", "notat"
      ],
      places: [
        "Oslo", "Bergen", "Trondheim", "Stavanger", "Tromsø", "Norge", "by",
        "gård", "fjell", "strand", "skog", "park", "butikk", "kafe", "kino",
        "kirke", "bro", "vei", "plass", "stasjon"
      ],
      food: [
        "brød", "ost", "melk", "egg", "smør", "eple", "banan", "potet",
        "gulrot", "fisk", "kjøtt", "suppe", "pizza", "taco", "kaffe", "te",
        "vaffel", "bolle", "is", "sjokolade", "brunost", "pølse", "ris", "pasta"
      ],
      people: [
        "mor", "far", "barn", "venn", "nabo", "lærer", "lege", "sjef",
        "elev", "politi", "kokk", "bonde", "sanger", "skuespiller", "pilot",
        "tannlege", "frisør", "servitør", "bror", "søster"
      ]
    },
    medium: {
      general: [
        "dugnad", "matpakke", "rushtid", "sparkesykkel", "bunad", "påskeferie",
        "hyttetur", "skitur", "lommelykt", "paraply", "barnehage", "videregående",
        "kommune", "valgkamp", "fergekø", "bompenger", "tidsfrist", "abonnement",
        "kvittering", "forsikring", "leiekontrakt", "kollektivtransport",
        "søppelsortering", "strømregning", "nabovarsel", "fartsgrense"
      ],
      music: [
        "korps", "joik", "Hardingfele", "trekkspill", "munnspill", "slagverk",
        "bassgitar", "musikkvideo", "lydprøve", "festspill", "folkemusikk",
        "opera", "jazzklubb", "allsang", "noter", "toneart", "dirigent",
        "orkester", "låtskriver", "musikkfestival", "danseband", "russelåt",
        "spellemannpris", "vinylplate"
      ],
      art: [
        "Munch", "skulptur", "nasjonalromantikk", "akvarell", "grafikk",
        "keramikk", "tresnitt", "utstilling", "galleri", "kunstner", "portrett",
        "landskap", "kollasj", "gatekunst", "installasjon", "kunstkritiker",
        "kunsthistorie", "komposisjon", "perspektiv", "motiv", "atelier",
        "vernissasje", "kunsthåndverk", "glassblåsing"
      ],
      books: [
        "krimroman", "bibliotek", "Ibsen", "Hamsun", "Bjørnson", "barnebok",
        "lydbok", "ebok", "novelle", "biografi", "bokklubb", "forlag",
        "bokhandel", "forteller", "hovedperson", "spenning", "bokmerke",
        "oversetter", "litteratur", "manus", "sitat", "anmeldelse",
        "sagn", "folkediktning"
      ],
      places: [
        "hytte", "skjærgård", "Nord-Norge", "Lofoten", "Geiranger",
        "Kristiansand", "Ålesund", "Bodø", "Drammen", "Fredrikstad",
        "Sørlandet", "Vestlandet", "Østlandet", "Finnmark", "Røros",
        "Hardanger", "Dovre", "Rondane", "bygd", "tettsted", "rådhus",
        "flyplass", "fergekai", "tursti"
      ],
      food: [
        "rømmegrøt", "pinnekjøtt", "skillingsbolle", "kjøttkake", "fiskekake",
        "lapskaus", "fiskesuppe", "rekesmørbrød", "knekkebrød", "leverpostei",
        "makrell i tomat", "spekemat", "fenalår", "multekrem", "riskrem",
        "kransekake", "sveler", "raspeball", "komle", "koldtbord", "matpakke",
        "pannekake", "bløtkake", "wienerbrød"
      ],
      people: [
        "ordfører", "programleder", "journalist", "fotograf", "sykepleier",
        "barnehagelærer", "snekker", "rørlegger", "elektriker", "advokat",
        "dommer", "forsker", "student", "pensjonist", "turist", "frivillig",
        "trener", "landslagsspiller", "influencer", "komiker", "rektor",
        "prest", "brannmann", "vekter"
      ]
    },
    hard: {
      general: [
        "allemannsretten", "fellesferie", "formueskatt", "Janteloven",
        "forbrukerrådet", "arbeidsgiveravgift", "folketrygden", "grunnlovsdag",
        "samfunnsdebatt", "høringsfrist", "sivilombudet", "statsbudsjett",
        "fylkeskommune", "skatteoppgjør", "trygdeoppgjør", "beredskapslager",
        "personnummer", "verneplikt", "konsesjon", "likestillingsombud",
        "klagefrist", "borettslag", "sameie", "husleietvist"
      ],
      music: [
        "Dovregubbens hall", "Peer Gynt-suite", "black metal", "Edvard Grieg",
        "Kirsten Flagstad", "Arne Nordheim", "Ole Bull", "Sissel Kyrkjebø",
        "a cappella", "polyfoni", "kontrapunkt", "symfoniorkester",
        "kammermusikk", "musikkteori", "folketone", "slåttemusikk",
        "hardingfeleslått", "improvisasjon", "arrangement", "mastering",
        "stemmeskifte", "overtoner"
      ],
      art: [
        "Vigelandsparken", "stavkirke", "rosemaling", "treskjæring",
        "Osebergskipet", "Nidarosdomen", "ekspresjonisme", "modernisme",
        "kubisme", "surrealisme", "litografi", "silketrykk", "freskomaleri",
        "altertavle", "brukskunst", "kunstbiennale", "konseptkunst",
        "kurator", "proveniens", "restaurering", "ikonografi", "barokk"
      ],
      books: [
        "Sult", "Markens grøde", "Kristin Lavransdatter", "Et dukkehjem",
        "Peer Gynt", "Sigrid Undset", "Tarjei Vesaas", "Cora Sandel",
        "Johan Borgen", "Dag Solstad", "Jon Fosse", "Herbjørg Wassmo",
        "Knausgård", "naivisme", "realisme", "etterkrigslitteratur",
        "metafor", "undertekst", "fortellerperspektiv", "allusjon",
        "litteraturkritikk", "bokmål", "nynorsk", "riksmål"
      ],
      places: [
        "Jotunheimen", "Svalbardtraktaten", "Preikestolen", "Trollstigen",
        "Hardangervidda", "Finnmarksvidda", "Saltstraumen", "Atlanterhavsveien",
        "Nordkapp", "Kautokeino", "Rjukan", "Verdens Ende", "Helgelandskysten",
        "Besseggen", "Lysefjorden", "Trollheimen", "Sunnmørsalpene",
        "Vesterålen", "Senja", "Femunden", "Setesdal", "Telemarkskanalen"
      ],
      food: [
        "lutefisk", "rakfisk", "fårikål", "nøkkelost", "Vestlandslefse",
        "gomme", "sodd", "møsbrømlefse", "boknafisk", "klippfisk",
        "tørrfisk", "surkål", "flatbrød", "røkelaks", "gravlaks",
        "elgkarbonade", "reinsdyrstek", "moltesyltetøy", "tyttebærsyltetøy",
        "geitost", "pultost", "akevitt", "karsk", "fårikålens dag"
      ],
      people: [
        "polfarer", "statsforvalter", "stortingsrepresentant", "riksantikvar",
        "riksmekler", "riksadvokat", "sivilingeniør", "statssekretær",
        "byrådsleder", "fylkesordfører", "sametingspresident", "nobelprisvinner",
        "språkviter", "arkeolog", "meteorolog", "ombudsmann", "fagforeningsleder",
        "høyesterettsdommer", "kommentator", "kulturminister", "fjellfører",
        "redningsmann", "bunadstilvirker", "eventyrsamler"
      ]
    }
  };

  window.ALIAS_CATEGORIES = {
    all: "Alle",
    general: "Blandet",
    music: "Musikk",
    art: "Kunst",
    books: "Bøker",
    places: "Steder",
    food: "Mat",
    people: "Folk"
  };

  window.ALIAS_DIFFICULTIES = {
    easy: "Lett",
    medium: "Middels",
    hard: "Vanskelig"
  };

  window.ALIAS_WORDS = flattenWords(WORDS_BY_DIFFICULTY);

  function flattenWords(source) {
    var result = {};

    Object.keys(source).forEach(function (difficulty) {
      result[difficulty] = [];

      Object.keys(source[difficulty]).forEach(function (category) {
        source[difficulty][category].forEach(function (word) {
          result[difficulty].push({
            word: word,
            category: category
          });
        });
      });
    });

    return result;
  }
})();
