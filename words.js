(function () {
  var WORDS_BY_DIFFICULTY = {
    easy: {
      general: [
        // Kropp og helse
        "arm", "ben", "fot", "hånd", "finger", "øye", "øre", "nese", "munn", "tann",
        "hode", "hals", "rygg", "mage", "hjerte", "blod", "hud", "hår", "negl", "skulder",
        // Dyr
        "hund", "katt", "hest", "ku", "gris", "sau", "fugl", "fisk", "mus", "kanin",
        "bjørn", "rev", "ulv", "elg", "and", "høne", "frosk", "slange", "ape", "løve",
        "tiger", "elefant", "hval", "hai", "edderkopp", "maur", "bi", "sommerfugl", "flue", "mygg",
        // Hjem og hus
        "hus", "leilighet", "rom", "kjøkken", "stue", "soverom", "bad", "gang", "trapp", "dør",
        "vindu", "tak", "vegg", "gulv", "hage", "garasje", "kjeller", "loft", "balkong", "hytte",
        "stol", "bord", "seng", "sofa", "lampe", "speil", "teppe", "pute", "dyne", "skuff",
        "skap", "hylle", "kjøleskap", "ovn", "vask", "dusj", "badekar", "toalett", "kran", "stige",
        // Klær og tilbehør
        "sko", "støvel", "sokk", "bukse", "skjorte", "jakke", "frakk", "kjole", "genser", "lue",
        "hanske", "skjerf", "belte", "veske", "ryggsekk", "lomme", "knapp", "glidelås", "paraply", "solbrille",
        // Mat og drikke
        "mat", "drikke", "vann", "melk", "juice", "kaffe", "te", "øl", "vin", "brød",
        "smør", "ost", "egg", "suppe", "salat", "ris", "pasta", "pizza", "kake", "is",
        "frukt", "grønnsak", "eple", "banan", "appelsin", "tomat", "gulrot", "potet", "løk", "hvitløk",
        "kjøtt", "kylling", "fisk", "reke", "pølse", "bacon", "saus", "salt", "sukker", "pepper",
        "flaske", "glass", "kopp", "tallerken", "skje", "gaffel", "kniv", "gryte", "stekepanne", "brett",
        // Transport
        "bil", "buss", "tog", "fly", "båt", "sykkel", "trikk", "taxi", "traktor", "motorsykkel",
        "hjul", "motor", "ratt", "sete", "vindu", "dør", "nøkkel", "tank", "vei", "bro",
        // Natur og vær
        "sol", "måne", "stjerne", "sky", "regn", "snø", "is", "vind", "torden", "lyn",
        "fjell", "dal", "elv", "innsjø", "hav", "strand", "skog", "mark", "eng", "øy",
        "blomst", "tre", "gress", "jord", "stein", "sand", "leire", "mose", "bær", "sopp",
        // Tid og kalender
        "dag", "natt", "morgen", "kveld", "time", "minutt", "sekund", "uke", "måned", "år",
        "vår", "sommer", "høst", "vinter", "mandag", "tirsdag", "onsdag", "torsdag", "fredag", "lørdag",
        "søndag", "januar", "februar", "mars", "april", "mai", "juni", "juli", "august", "september",
        "oktober", "november", "desember", "ferie", "helg", "jul", "påske", "bursdag", "jubileum", "fødsel",
        // Skole og jobb
        "skole", "klasse", "elev", "lærer", "lekse", "prøve", "eksamen", "penn", "blyant", "viskelær",
        "bok", "notat", "tavle", "kritt", "ryggsekk", "kantine", "friminutt", "jobb", "kontor", "møte",
        // By og samfunn
        "by", "gate", "torg", "park", "butikk", "marked", "kiosk", "kino", "bibliotek", "kirke",
        "sykehus", "lege", "apotek", "brannstasjon", "politistasjon", "bank", "post", "stasjon", "flyplass", "havn",
        // Ting og gjenstander
        "ball", "leketøy", "dukke", "sykkel", "ball", "gave", "brev", "pakke", "pose", "eske",
        "nøkkel", "lås", "telefon", "TV", "radio", "kamera", "klokke", "batteri", "ledning", "stikkontakt",
        "hammer", "sag", "skrujern", "spiker", "skrue", "tau", "stige", "bøtte", "kost", "mopp",
        // Kropp og følelser (substantiver)
        "glede", "sorg", "frykt", "sinne", "kjærlighet", "vennskap", "håp", "drøm", "tanke", "mening",
        "stemme", "latter", "tåre", "smerte", "sult", "tørst", "trøtthet", "søvn", "kraft", "helse"
      ],
      music: [
        "sang", "melodi", "rytme", "beat", "vers", "refreng", "strofe", "tekst", "tone", "lyd",
        "gitar", "bass", "piano", "tangent", "tromme", "slagverk", "fløyte", "fiolin", "cello", "trompet",
        "tuba", "klarinett", "saksofon", "trekkspill", "munnspill", "harpe", "orgel", "synthesizer", "mikrofon", "høyttaler",
        "konsert", "scene", "publikum", "artist", "band", "kor", "solist", "musiker", "dirigent", "orkester",
        "plate", "album", "singel", "radio", "spotify", "øvelse", "studio", "opptak", "lyd", "volum",
        "dans", "diskotek", "festival", "billett", "backstage", "turné", "fan", "applaus", "autograf", "plakat"
      ],
      art: [
        "kunst", "bilde", "maleri", "tegning", "foto", "skisse", "figur", "skulptur", "statue", "plakat",
        "farge", "rød", "blå", "gul", "grønn", "svart", "hvit", "blyant", "pensel", "maling",
        "lerret", "papir", "ramme", "vegg", "utstilling", "museum", "galleri", "kunstner", "maler", "tegner",
        "form", "mønster", "linje", "sirkel", "firkant", "trekant", "leire", "lim", "saks", "limstift",
        "collage", "graffiti", "mosaikk", "tresnitt", "akvarell", "tusj", "kritt", "spraymaling", "lerret", "staffeli"
      ],
      books: [
        "bok", "side", "kapittel", "ord", "setning", "avsnitt", "tittel", "forfatter", "roman", "novelle",
        "eventyr", "dikt", "sang", "fortelling", "historie", "bibliotek", "bokhylle", "omslag", "bokmerke", "notat",
        "brev", "avis", "blad", "magasin", "ordbok", "leksikon", "tegneserie", "bildebok", "brev", "dagbok",
        "helt", "skurk", "karakter", "handling", "scene", "dialog", "slutt", "begynnelse", "midt", "genre"
      ],
      places: [
        "Oslo", "Bergen", "Trondheim", "Stavanger", "Tromsø", "Kristiansand", "Drammen", "Fredrikstad", "Sandnes", "Bodø",
        "Norge", "Sverige", "Danmark", "Finland", "Europa", "verden", "kontinent", "land", "by", "bygd",
        "fjell", "dal", "elv", "innsjø", "hav", "strand", "skog", "park", "øy", "halvøy",
        "gate", "torg", "plass", "bro", "tunnel", "vei", "sti", "stasjon", "flyplass", "havn",
        "butikk", "marked", "kafe", "restaurant", "kino", "teater", "museum", "kirke", "skole", "sykehus",
        "hotell", "camping", "hytte", "gård", "leilighet", "nabolag", "sentrum", "utkant", "grense", "nord"
      ],
      food: [
        "brød", "knekkebrød", "rundstykke", "bolle", "toast", "lefse", "vaffel", "pannekake", "croissant", "frokostblanding",
        "ost", "brunost", "smør", "margarin", "rømme", "fløte", "yoghurt", "melk", "egg", "omelett",
        "suppe", "grøt", "havregrøt", "risgrøt", "salat", "sandwich", "wrap", "taco", "pizza", "pasta",
        "ris", "poteter", "potetmos", "pommes frites", "nudler", "couscous", "linser", "bønner", "kikærter", "mais",
        "kjøtt", "kylling", "svin", "lam", "biff", "pølse", "spekepølse", "skinke", "bacon", "koteletter",
        "laks", "torsk", "sild", "makrell", "reke", "krabbe", "ål", "tunfisk", "ansjos", "sei",
        "eple", "pære", "banan", "appelsin", "sitron", "jordbær", "bringebær", "blåbær", "drue", "mango",
        "gulrot", "brokkoli", "blomkål", "spinat", "agurk", "tomat", "paprika", "løk", "hvitløk", "sopp",
        "is", "sjokolade", "godteri", "karamell", "kake", "kjeks", "vaffel", "muffins", "krem", "syltetøy",
        "kaffe", "te", "juice", "brus", "vann", "melk", "øl", "vin", "sider", "kakao"
      ],
      people: [
        "mor", "far", "sønn", "datter", "barn", "baby", "søster", "bror", "bestemor", "bestefar",
        "tante", "onkel", "fetter", "kusine", "nabo", "venn", "venninne", "kjæreste", "kone", "mann",
        "lærer", "rektor", "elev", "student", "lege", "sykepleier", "tannlege", "apotek", "veterinær", "jordmor",
        "kokk", "servitør", "baker", "slagter", "fisker", "bonde", "gartner", "snekker", "maler", "rørlegger",
        "elektriker", "mekaniker", "sjåfør", "pilot", "kaptein", "matros", "brannmann", "politi", "vekter", "soldat",
        "sjef", "leder", "kollega", "ansatt", "sjef", "direktør", "sekretær", "konsulent", "journalist", "fotograf",
        "sanger", "musiker", "skuespiller", "danser", "maler", "forfatter", "poet", "regissør", "programleder", "komiker",
        "idrettsutøver", "fotballspiller", "svømmer", "løper", "syklist", "bokser", "skiløper", "trener", "dommer", "fan"
      ]
    },
    medium: {
      general: [
        // Samfunn og offentlig liv
        "dugnad", "bunad", "russetid", "valgkamp", "kommune", "bompenger", "barnehage", "videregående", "folkehøyskole", "pensjon",
        "trygd", "skatt", "avgift", "budsjett", "rente", "gjeld", "lån", "sparing", "investering", "aksje",
        "forsikring", "kvittering", "kontrakt", "leiekontrakt", "abonnement", "faktura", "rabatt", "tilbud", "pris", "kost",
        "strømregning", "husleie", "depositum", "borettslag", "sameie", "søppelsortering", "kildesortering", "resirkulering", "kompost", "avfall",
        "kollektivtransport", "rushtid", "fartsgrense", "parkeringsplass", "bomstasjon", "fergekø", "togstreik", "forsinkelse", "forsikring", "nabovarsel",
        // Natur og miljø
        "klimaendring", "forurensning", "utslipp", "energi", "solenergi", "vindkraft", "vannkraft", "karbondioksid", "drivhuseffekt", "naturreservat",
        "biologisk mangfold", "dyrevern", "artsutryddelse", "gjenvinning", "bærekraft", "fotavtrykk", "regnskog", "isbre", "permafrost", "flom",
        "tørke", "skogbrann", "jordskjelv", "vulkanutbrudd", "tsunami", "orkan", "tyfon", "monsun", "ørken", "savanne",
        // Helse og kropp
        "sykdom", "allergi", "astma", "diabetes", "blodtrykk", "kolesterol", "kreft", "virus", "bakterie", "infeksjon",
        "feber", "hodepine", "kvalme", "svimmelhet", "forstuing", "brudd", "sår", "blåmerke", "operasjon", "behandling",
        "medisin", "pille", "vaksine", "dose", "resept", "diagnose", "symptom", "undersøkelse", "røntgen", "ultralyd",
        // Teknologi og kommunikasjon
        "mobil", "nettbrett", "laptop", "datamaskin", "internett", "nettverk", "wifi", "passord", "profil", "konto",
        "app", "program", "oppdatering", "virus", "hacker", "sikkerhet", "kryptering", "database", "server", "sky",
        "sosiale medier", "blogg", "podcast", "strømming", "abonnement", "algorytme", "kunstig intelligens", "robot", "drone", "chip",
        // Hjem og livsstil
        "interiør", "innredning", "renovering", "oppussing", "vedlikehold", "håndverker", "materiell", "verktøy", "tegning", "plan",
        "møbel", "garderobeskap", "kjøkkeninnredning", "benkeplate", "flise", "parkett", "laminat", "tapet", "maling", "sparkel",
        "varmepumpe", "solfanger", "isolasjon", "vinduspuss", "rørlegging", "kabling", "sikringsskap", "vannmåler", "strømmåler", "brannvarsler",
        // Kultur og fritid
        "hobbyrom", "verksted", "atelier", "treningssenter", "svømmehall", "idrettshall", "stadion", "tennisbane", "golfbane", "klatrevegg",
        "friluftsområde", "campingplass", "skisenter", "alpinbakke", "skitrekk", "gondol", "sykkelsti", "turløype", "kyststi", "rundtur",
        "litteraturfestival", "kunstmesse", "matsalg", "loppemarked", "antikvariat", "vinmonopol", "systembolaget", "kafé", "bakeri", "konditori",
        // Arbeidsliv
        "arbeidsgiver", "arbeidstaker", "fagforening", "streik", "permittering", "oppsigelse", "ansettelse", "prøvetid", "stillingsbeskrivelse", "CV",
        "intervju", "referanse", "lønn", "overtid", "ferie", "permisjon", "sykmelding", "ytelse", "pensjon", "sluttvederlag",
        // Reise
        "reisepass", "visum", "valuta", "veksling", "bagasje", "innsjekk", "boarding", "gate", "transitt", "forsinkelse",
        "koffert", "håndbagasje", "tollkontroll", "grensekontroll", "tidssone", "jetlag", "reiseforsikring", "bestilling", "kansellering", "refusjon",
        // Diverse substantiver
        "resultat", "løsning", "problem", "utfordring", "mulighet", "risiko", "konsekvens", "årsak", "effekt", "prosess",
        "sammenheng", "forhold", "situasjon", "omstendighet", "tilfelle", "eksempel", "bevis", "argument", "påstand", "konklusjon",
        "trend", "mote", "stil", "smak", "preferanse", "vane", "rutine", "tradisjon", "skikk", "seremoni"
      ],
      music: [
        "korps", "janitsjar", "joik", "folkemusikk", "allsang", "visesang", "barnesang", "julesang", "nasjonalsang", "hymne",
        "hardingfele", "Hardingfele", "langeleik", "seljefløyte", "bukkehorn", "lur", "trekkspill", "munnspill", "slagverk", "bassgitar",
        "keyboards", "synthesizer", "sampel", "loop", "beatbox", "effektpedal", "forsterker", "konsol", "miksepult", "lydtekniker",
        "lydprøve", "generalprøve", "premiere", "turné", "repertoar", "programmet", "oppvarmingsband", "headliner", "booking", "management",
        "noter", "noteark", "partitur", "takt", "toneart", "akkord", "arpeggio", "skala", "intervall", "transposisjon",
        "improvisasjon", "arrangement", "komposisjon", "produksjon", "mastering", "mixdown", "lydspor", "melodi", "harmoni", "dissonans",
        "opera", "operette", "musikal", "kammermusikk", "symfoni", "konsert", "serenade", "sonate", "ballade", "nocturne",
        "jazzklubb", "jazzfestival", "spillemann", "spellemannpris", "Spellemannprisen", "P3gull", "Urørt", "Bylarm", "russelåt", "danseband",
        "vinylplate", "kassett", "CD", "streaming", "platestudio", "plateselskap", "musikkvideo", "musikklærer", "musikkonservatorium", "musikkskole"
      ],
      art: [
        "Munch", "nasjonalromantikk", "akvarell", "gouache", "oljemaleri", "tempera", "freske", "pastell", "kull", "tusjtegning",
        "grafikk", "tresnitt", "linosnitt", "etsning", "litografi", "silketrykk", "serigraf", "monotypi", "fotografi", "videoverk",
        "keramikk", "porselen", "stentøy", "glasur", "dreiehjul", "brenne", "skulptur", "bronse", "marmor", "granitt",
        "tekstilkunst", "vev", "broderi", "batikk", "fargetting", "quilting", "filting", "knitting", "hekle", "makramé",
        "installasjon", "performance", "videoinstallasjon", "stedsspecifikt", "lyd kunst", "lyset", "romkunst", "konseptkunst", "prosesskunst", "fluxus",
        "kunstkritiker", "kunsthistorie", "kunstteori", "estetikk", "komposisjon", "perspektiv", "dybde", "farge", "kontrast", "harmoni",
        "portrett", "selvportrett", "landskap", "stilleben", "genremaleri", "historiemaleri", "religiøs", "allegorisk", "symbolisme", "realisme",
        "galleri", "utstilling", "vernissasje", "åpning", "kurering", "samling", "katalog", "kunstmesse", "auksjon", "kunsthandler",
        "atelier", "kunsthåndverk", "brukskunst", "design", "grafisk design", "illustrasjon", "animasjon", "glassblåsing", "smiing", "treskjæring"
      ],
      books: [
        "krimroman", "spenningsroman", "kjærlighetsroman", "scifi", "fantasybok", "skrekklitteratur", "historisk roman", "ungdomsbok", "barnebok", "bildepedagogisk",
        "biografi", "selvbiografi", "memoar", "dagbok", "reiseskildring", "essay", "pamflett", "manifest", "traktat", "håndbok",
        "novelle", "kortprosa", "flash fiction", "kåseri", "feuilleton", "anekdote", "parabel", "fabel", "legende", "myte",
        "lydbok", "ebok", "podcastserie", "tegneserie", "grafisk roman", "bildebok", "pekebok", "faktabok", "oppslagsbok", "leksikon",
        "forlag", "bokhandel", "bibliotek", "bokklubb", "bokfestival", "litteraturpris", "oversetter", "redaktør", "korrekturleser", "illustratør",
        "forteller", "hovedperson", "biperson", "antagonist", "protagonist", "narrator", "perspektiv", "synsvinkel", "stemme", "stil",
        "plot", "intrige", "spenningskurve", "vendepunkt", "klimaks", "oppløsning", "epilog", "prolog", "innledning", "avslutning",
        "metafor", "simile", "symbol", "allegori", "ironi", "sarkasme", "humor", "satire", "parodi", "pastisj",
        "Ibsen", "Hamsun", "Bjørnson", "anmeldelse", "bokomtale", "sitat", "fotnoter", "bibliografi", "register", "innholdsfortegnelse"
      ],
      places: [
        "hytte", "seter", "gård", "tun", "bygd", "tettsted", "forstad", "bydel", "sentrum", "utkant",
        "skjærgård", "fjord", "sund", "tange", "nes", "odde", "kyst", "fastland", "innland", "grense",
        "Nord-Norge", "Sørlandet", "Vestlandet", "Østlandet", "Midt-Norge", "Trøndelag", "Rogaland", "Telemark", "Agder", "Innlandet",
        "Lofoten", "Vesterålen", "Senja", "Geiranger", "Hardanger", "Rondane", "Dovre", "Gudbrandsdalen", "Valdres", "Numedal",
        "Kristiansand", "Ålesund", "Bodø", "Tromsø", "Fredrikstad", "Halden", "Sarpsborg", "Moss", "Hamar", "Lillehammer",
        "Gjøvik", "Kongsberg", "Notodden", "Skien", "Porsgrunn", "Arendal", "Mandal", "Farsund", "Flekkefjord", "Egersund",
        "rådhus", "kommunehus", "tinghus", "domstol", "fylkeshus", "stortinget", "regjeringen", "ambassade", "konsulat", "toll",
        "flyplass", "togstasjon", "bussterminal", "fergekai", "havn", "lufthavn", "militærbase", "fengsel", "politistasjon", "brannstasjon",
        "tursti", "fjelltopp", "utsiktspunkt", "rasteplass", "piknikplass", "badeplass", "campingplass", "skiløype", "sykkelsti", "ridesti"
      ],
      food: [
        "rømmegrøt", "rømmevaffel", "pinnekjøtt", "ribbe", "kjøttkake", "frikadelle", "fiskekake", "fiskepudding", "klippfisk", "tørrfisk",
        "skillingsbolle", "kanelbolle", "berlinerpølse", "leverpostei", "fenalår", "spekemat", "spekeskinke", "spekepølse", "morr", "morrpølse",
        "lapskaus", "brun lapskaus", "grønn lapskaus", "fiskesuppe", "betasuppe", "ertestuing", "mølje", "viltsuppe", "reinsdyrsuppe", "soppsuppe",
        "rekesmørbrød", "krabbesalat", "rekesalat", "lutefisk", "gravet laks", "røkt laks", "røkt makrell", "bokna fisk", "raspeball", "komle",
        "potetball", "klubb", "kumle", "blodpudding", "svart pudding", "fårikål", "lapskaus", "kjøttkaker", "kokt torsk", "rekekokk",
        "knekkebrød", "kavring", "hardbrød", "flatbrød", "lefse", "potetlefse", "valdresrømmegrøt", "telemarksbrød", "tunnbrød", "polarbrød",
        "kransekake", "bløtkake", "suksessterte", "sandkake", "sirupsnipper", "pepperkake", "fattigmann", "kleiner", "smultring", "drømmekake",
        "multekrem", "trollkrem", "tilslørte bondepiker", "rødgrøt", "riskrem", "sjokolademousse", "karamellpudding", "pannacotta", "tiramisu", "profiterole",
        "sveler", "pannekake", "eggerøre", "speillegg", "pochert egg", "benediktegg", "croque monsieur", "French toast", "waffel", "crepe",
        "makrell i tomat", "sardiner", "ansjos", "kaviar", "nøkkelost", "jarlsberg", "norvegia", "ridder", "brie", "camembert"
      ],
      people: [
        "ordfører", "varaordfører", "kommunestyremedlem", "fylkesordfører", "stortingsrepresentant", "statsminister", "statsråd", "statssekretær", "byråd", "byrådsleder",
        "journalist", "programleder", "nyhetsanker", "korrespondent", "kommentator", "redaktør", "sjefredaktør", "fotograf", "kameramann", "reporter",
        "sykepleier", "hjelpepleier", "ambulansearbeider", "radiograf", "ergoterapeut", "fysioterapeut", "psykolog", "psykiater", "kirurg", "anestesilege",
        "barnehagelærer", "spesialpedagog", "skolerådgiver", "inspektør", "rektor", "dekan", "professor", "dosent", "amanuensis", "stipendiat",
        "snekker", "tømmermann", "murer", "flislegger", "maler", "rørlegger", "elektriker", "sveiser", "smed", "mekaniker",
        "advokat", "dommer", "aktor", "forsvarer", "jurist", "notarius", "inkasso", "regnskapsfører", "revisor", "skatteadvokat",
        "forsker", "vitenskapsperson", "laboratorieassistent", "ingeniør", "arkitekt", "landskapsarkitekt", "byplanlegger", "geolog", "biolog", "kjemiker",
        "brannmann", "redningsmann", "dykkere", "fjellredningstjenesten", "ambulansesjåfør", "lensmann", "politibetjent", "etterforsker", "krimteknikere", "fangevokter",
        "trener", "landslagsspiller", "idrettsutøver", "friidrettsutøver", "svømmer", "skiløper", "snowboarder", "syklist", "roer", "padler"
      ]
    },
    hard: {
      general: [
        // Politikk og jus
        "allemannsretten", "Grunnloven", "statsbudsjett", "skatteoppgjør", "trygdeoppgjør", "folkeafstemning", "proporsjonal representasjon", "flertalligsvalg", "koalisjonsregjering", "mistillitsvotum",
        "sivilombudet", "riksrevisjonen", "likestillingsombudet", "diskrimineringsombudet", "klagenemnd", "forvaltningsklage", "rettssikkerhet", "rettsstat", "rettspraksis", "juridisk presedent",
        "konsesjon", "konsesjonsloven", "odelsrett", "tomtefeste", "servitutt", "tinglysning", "panterett", "utleggspant", "konkursbo", "gjeldsordning",
        "arbeidsgiveravgift", "moms", "formuesskatt", "kapitalinntekt", "skattefradrag", "skattemelding", "ligningsverdi", "primærbolig", "sekundærbolig", "fritidsbolig",
        // Økonomi og finans
        "obligasjon", "derivat", "opsjon", "futures", "hedgefond", "verdipapirfond", "indeksfond", "aksjeutbytte", "aksjekurs", "børsnotering",
        "likviditet", "soliditet", "egenkapital", "fremmedkapital", "balanse", "resultatregnskap", "kontantstrøm", "avskrivning", "goodwill", "immaterielle eiendeler",
        "konjunktur", "resesjon", "deflasjon", "stagflasjon", "handelsskjønn", "handelsbalanse", "betalingsbalanse", "valutareserve", "pengepolitikk", "finanspolitikk",
        // Vitenskap og teknologi
        "kvantemekanikk", "partikkelfysikk", "relativitetsteori", "termodynamikk", "elektromagnetisme", "gravitasjon", "kinetikk", "entropi", "halvleder", "superledere",
        "genomikk", "proteomikk", "metabolomikk", "CRISPR", "genredigering", "stamceller", "kloning", "bioteknologi", "farmakologi", "toksikologi",
        "algoritme", "maskinlæring", "nevrale nettverk", "dyp læring", "naturlig språkbehandling", "datasikkerhet", "kryptografi", "blokkjede", "kvantecomputing", "cybersikkerhet",
        // Filosofi og abstrakte begreper
        "epistemologi", "ontologi", "metafysikk", "etikk", "estetikk", "logikk", "fenomenologi", "hermeneutikk", "dialektikk", "pragmatisme",
        "rettferdighet", "likeverd", "autonomi", "verdighet", "integritet", "solidaritet", "subsidiaritet", "pluralisme", "toleranse", "ytringsfrihet",
        "determinisme", "fatalisme", "nihilisme", "eksistensialisme", "absurdisme", "utilitarisme", "deontologi", "dydsetikk", "kontraktualisme", "kommunitarisme",
        // Samfunnsvitenskap
        "demografi", "urbanisering", "migrasjon", "integrasjon", "assimilasjon", "segregasjon", "marginalisering", "stigmatisering", "diskriminering", "rasisme",
        "kjønnsidentitet", "seksualitet", "interseksjonalitet", "heteronormativitet", "patriarkat", "feminisme", "anti-feminisme", "kjønnsnøytralitet", "tospiret", "homofobi",
        "kapitalism", "sosialisme", "kommunism", "anarkisme", "fascisme", "totalitarisme", "autoritarisme", "liberalisme", "konservatisme", "populisme",
        // Medisin og psykologi
        "autoimmun", "nevrodegenerativ", "genetisk predisposisjon", "epigenetikk", "mikrobiomet", "homeostase", "patogenese", "etiologi", "patofysiologi", "klinisk utfall",
        "kognitiv atferdsterapi", "psykoanalyse", "gestaltterapi", "mindfulness", "EMDR", "eksponeringsterapi", "gruppeanalyse", "familieterapi", "parterapi", "nevrofeedback",
        "schizofreni", "bipolar lidelse", "borderline", "narsissisme", "psykopati", "sosiopati", "autismespektrum", "ADHD", "angstlidelse", "depresjon",
        // Rett og orden
        "rettsprosess", "tiltale", "bevisføring", "korseksaminasjon", "jury", "lagrette", "lagdommer", "høyesterett", "ankerett", "begjæring",
        "varetekt", "pågripelse", "ransaking", "beslag", "bruksknivloven", "nødverge", "nødrett", "tvang", "utlevering", "utvisning",
        // Natur og geografi
        "biogeografi", "litosfæren", "hydrosfæren", "kryosfæren", "atmosfæren", "noose", "sedimentasjon", "erosjon", "tektonisk", "vulkanologi",
        "havstrøm", "termoklin", "saltholdig", "havforsuring", "korallbleking", "biodiversitet", "trofisk kaskade", "nøkkelart", "parasittisme", "mutualisme",
        // Diverse fagbegrep
        "beredskapslager", "verneplikt", "sivilforsvar", "totalforsvaret", "heimevernet", "territorialfarvann", "grunnlinje", "kontinentalsokkel", "eksklusiv sone", "folkerettslig"
      ],
      music: [
        "Edvard Grieg", "Ole Bull", "Johan Svendsen", "Halfdan Kjerulf", "Arne Nordheim", "Fartein Valen", "Klaus Egge", "Geirr Tveitt", "Harald Sæverud", "David Monrad Johansen",
        "Kirsten Flagstad", "Sissel Kyrkjebø", "Ingrid Bjoner", "Åse Nordmo Løvberg", "Randi Stene", "Marianne Beate Kielland", "Henning Kraggerud", "Leif Ove Andsnes", "Einar Steen-Nøkleberg", "Terje Rypdal",
        "a cappella", "polyfoni", "kontrapunkt", "motett", "madrigal", "kanon", "fuga", "passacaglia", "chaconne", "ostinato",
        "symfoniorkester", "kammerorkester", "blåsekvintett", "strykekvartett", "pianotrioet", "sonatacyklus", "rondo", "tema med variasjoner", "tonesetting", "ledemotiv",
        "folketon", "slåttemusikk", "hardingfeleslått", "springdans", "halling", "gangar", "reinlender", "vals", "polka", "mazurka",
        "musikkteori", "harmonilære", "kontrapunktlære", "formlære", "instrumentasjon", "orkestrering", "dirigering", "partiturlæring", "gehørtrening", "solfège",
        "stemmeskifte", "stemmebånd", "resonansrom", "overtoner", "undertoner", "partialton", "klangfarge", "timbre", "vibrato", "portamento",
        "mastering", "mixing", "lydprosjektil", "stereoopptak", "surroundlyd", "dolby atmos", "MIDI", "synthesizer-programmering", "samplebank", "loopstasjonen",
        "impresjonisme", "ekspresjonisme", "minimalisme", "neoromantikk", "modernisme", "postmodernisme", "aleatorisk", "seriell teknikk", "spektralisme", "økoakustikk"
      ],
      art: [
        "Vigelandsparken", "Osebergskipet", "Nidarosdomen", "stavkirke", "rosemaling", "treskjæring", "nagledekor", "kløverblad", "rokokko", "barokk",
        "Edvard Munch", "Christian Krohg", "Erik Werenskiold", "Gerhard Munthe", "Harriet Backer", "Kitty Kielland", "Frits Thaulow", "Theodor Kittelsen", "Lars Hertervig", "Nikolai Astrup",
        "ekspresjonisme", "modernisme", "kubisme", "surrealisme", "dadaisme", "konstruktivisme", "abstrakt ekspresjonisme", "popkunst", "minimalisme", "konseptkunst",
        "postmodernisme", "dekonstruksjon", "appropriasjon", "nyfigurativisme", "nyekspresjonisme", "transavantgarde", "postkolonialisme", "identitetspolitikk", "feminismebevegelse", "queer teori",
        "ikonografi", "ikonologi", "stilistikk", "attribution", "proveniens", "restaurering", "konservering", "katalogisering", "formidling", "samlingspolitikk",
        "freskomaleri", "altertavle", "alterskapet", "polyptyk", "triptyk", "diptyk", "retabel", "predella", "lunett", "pendentiv",
        "litografi", "silketrykk", "akvatint", "mezzotint", "kalligrafi", "xylografi", "stereotypi", "heliogravyr", "fotogravyr", "offset",
        "kurator", "kunsthåndverk", "kunstbiennale", "documenta", "Veneziabiennalen", "Skulptur Projekte", "Manifesta", "Art Basel", "Frieze", "ARCO",
        "stedsspecifik", "public art", "relational aesthetics", "institutional critique", "post-internet art", "new media", "bio art", "nano art", "data visualization", "generativ kunst"
      ],
      books: [
        "Sult", "Markens grøde", "Kristin Lavransdatter", "Olav Duun", "Sigrid Undset", "Tarjei Vesaas", "Cora Sandel", "Johan Borgen", "Dag Solstad", "Jon Fosse",
        "Herbjørg Wassmo", "Knausgård", "Karl Ove Knausgård", "Vigdis Hjorth", "Hanne Ørstavik", "Roy Jacobsen", "Linn Ullmann", "Lars Saabye Christensen", "Jan Kjærstad", "Jostein Gaarder",
        "naivisme", "naturalisme", "realisme", "impresjonisme", "symbolisme", "nyromantikk", "modernisme", "postmodernisme", "etterkrigslitteratur", "nyrealisme",
        "metafor", "metonymi", "synekdoke", "allegori", "ironi", "parodi", "pastisj", "intertekstualitet", "allitterasjon", "asonans",
        "fortellerperspektiv", "upålitelig forteller", "allvitende forteller", "jeg-forteller", "tredjepersonsforteller", "innrammingsfortelling", "strøm-av-bevissthet", "fri indirekte stil", "dialektikk", "polyfoni",
        "undertekst", "metatekst", "hypertekst", "palimpsest", "intertekstuell", "ekfrasis", "apostrofe", "katalog", "anafora", "epifora",
        "allusjon", "ambiguitet", "ambivalens", "paradoks", "oxymoron", "hyperbel", "litotes", "eufemisme", "dyslemfoni", "apofasi",
        "litteraturkritikk", "litteraturteori", "kanonisering", "resepsjon", "hermeneutikk", "dekonstruksjon", "nykritikk", "formalism", "strukturalism", "poststrukturalism",
        "bokmål", "nynorsk", "riksmål", "landsmål", "dialekt", "sosiolekt", "idiolekt", "register", "kode", "diskurs"
      ],
      places: [
        "Jotunheimen", "Hardangervidda", "Finnmarksvidda", "Femunden", "Setesdal", "Numedal", "Hallingdal", "Romsdalen", "Sunndalen", "Surnadalen",
        "Preikestolen", "Trollstigen", "Trolltunga", "Kjeragbolten", "Sognefjellet", "Besseggen", "Galdhøpiggen", "Glittertind", "Snøhetta", "Gaustatoppen",
        "Svalbard", "Jan Mayen", "Bjørnøya", "Hopen", "Kong Karls Land", "Nordaustlandet", "Spitsbergen", "Barentsburg", "Longyearbyen", "Ny-Ålesund",
        "Nordkapp", "Knivskjelodden", "Nordkinn", "Verdens Ende", "Saltstraumen", "Moskstraumen", "Trollfjorden", "Nærøyfjorden", "Geirangerfjorden", "Sognefjorden",
        "Atlanterhavsveien", "Helgelandskysten", "Lofotmur", "Vesterålen", "Senja", "Andøya", "Hinnøya", "Sunnmørsalpene", "Romsdalsalpene", "Jotunheimen",
        "Telemarkskanalen", "Eidsvollanleggene", "Rjukan", "Røros", "Kautokeino", "Karasjok", "Kirkenes", "Hammerfest", "Vardø", "Vadsø",
        "Bryggen i Bergen", "Aker Brygge", "Karl Johans gate", "Vigelandsparken", "Holmenkollen", "Bygdøy", "Grünerløkka", "Frogner", "Majorstuen", "Tøyen",
        "Lillehammer", "Hamar", "Gjøvik", "Kongsvinger", "Elverum", "Rena", "Åmot", "Trysil", "Femundsmarka", "Forollhogna"
      ],
      food: [
        "lutefisk", "rakfisk", "surströmming", "gomme", "pultost", "gamalost", "mysost", "nøkkelost", "jarlsberg", "snofrisk",
        "møsbrømlefse", "Vestlandslefse", "Telemarkslefse", "Sørlandslefse", "Nordlandslefse", "flatbrød", "tunnbrød", "polarbrød", "kavring", "hardbrød",
        "fårikål", "lapskaus brun", "lapskaus grønn", "raspeball", "komle", "potetball", "klubb", "kumle", "raspball", "lapskaus",
        "boknafisk", "klippfisk", "tørrfisk", "stokfisk", "saltfisk", "gravet laks", "røkt laks", "spekelaks", "surkål", "sauerkraut",
        "elgkarbonade", "reinsdyrstek", "hjortestek", "viltragu", "bjørnekjøtt", "isfuglstek", "ryper", "skogsfugl", "storfehiort", "elgsaus",
        "akevitt", "linie aquavit", "Linie Aquavit", "karsk", "hjembrent", "hjembrygget øl", "Haakon IX", "Ringnes", "Mack", "Aass",
        "moltesyltetøy", "tyttebærsyltetøy", "rognebærsyltetøy", "slåpetornsyltetøy", "ripsgelé", "solbærgelé", "jordbærsyltetøy", "blåbærsyltetøy", "bringebærsyltetøy", "multesyltetøy",
        "sodd", "krotekjøtt", "pinnekjøtt fra Vestlandet", "ribbe fra Østlandet", "julepølse", "julemedisterkaker", "risengrynsgrøt", "riskrem", "multekrem", "karamellpudding",
        "kransekake", "Kvæfjordkake", "suksessterte", "bløtkake", "krydderkake", "Oskar II kake", "Freia sjokolade", "Kvikklunsj", "Stratos", "Dairylea"
      ],
      people: [
        "polfarer", "statsforvalter", "sametingspresident", "riksantikvar", "riksmekler", "riksadvokat", "sivilingeniør", "sivilarkitekt", "sivilagronom", "statsautorisert revisor",
        "høyesterettsdommer", "lagdommer", "tingrettsdommer", "jordskifterettsdommer", "namsfogd", "statsadvokat", "politiadvokat", "påtaleansvarlig", "bistandsadvokat", "forsvareradvokat",
        "nobelprisvinner", "fredsmegler", "særdomstol", "spesialkurs", "doktorgrad", "postdoktor", "forskningsleder", "laboratorieleder", "instituttleder", "prorektor",
        "meteorolog", "oseanograf", "glasiolog", "seismolog", "vulkanolog", "geofysiker", "geokjemiker", "paleontolog", "arkeolog", "antropolog",
        "fagforeningsleder", "LO-leder", "NHO-leder", "arbeidstilsynet", "verneombud", "tillitsvalgt", "plasstillitsvalgt", "konsernstyre", "børsstyret", "kapitalforvalter",
        "kulturminister", "justisminister", "finansminister", "helseminister", "utdanningsminister", "klimaminister", "næringsminister", "utenriksminister", "forsvarsminister", "oilminister",
        "kommentator", "debattant", "opinionsforsker", "meningsmåler", "valgforsker", "partistrateg", "spindoktor", "talsperson", "kommunikasjonsrådgiver", "politisk rådgiver",
        "fjellfører", "redningsmann", "helikopterpilot", "redningsdykker", "fjellredning", "alpinpatrulje", "skitrekkvakt", "lavinehund", "søk-og-redning", "kystredning",
        "språkviter", "dialektolog", "leksikograf", "oversetter", "tolk", "terminolog", "skribent", "tekstforfatter", "korrektør", "kopiredaktør"
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
