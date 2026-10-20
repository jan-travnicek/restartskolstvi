export type Measure = {
  n: number;
  slug: string;
  t: string;
  sub: string;
  short: string;
  body: string[];
};
export type Pillar = { id: string; name: string; goal: string; intro: string; measures: Measure[] };

export const pillars: Pillar[] = [
  {
    id: "I",
    name: "Architektura a prostupnost",
    goal: "Odstranit slepé uličky v systému, zefektivnit vzdělávací dráhu a snížit věk vstupu na trh práce.",
    intro:
      "Tento pilíř řeší samotnou kostru systému. Odstraňujeme neefektivní prostoje, které dnes stojí stát miliardy korun a mladé lidi rok života, aniž by přinášely prokazatelnou přidanou hodnotu.",
    measures: [
      {
        n: 1,
        slug: "model-8-2",
        t: "Zavedení modelu 8+2",
        sub: "Racionalizace povinné docházky",
        short: "Osm let základní školy a povinné dva roky všeobecně-odborného základu na střední škole.",
        body: [
          "Zkracujeme základní vzdělávání z devíti na osm let a navazujeme povinným dvouletým cyklem všeobecně-odborného základu na středních školách. Dnešní devátá třída funguje ve většině případů pouze jako neefektivní a drahá čekárna na přijímací zkoušky. V těchto ročnících navíc stát zcela zbytečně váže zhruba 9 500 kvalifikovaných učitelů, jejichž kapacity a odbornost nám pak kriticky chybí v jiných částech vzdělávacího systému.",
          "Přesun do dvouletého cyklu nižší střední školy v žádném případě neznamená nutnost dřívější, nevratné volby budoucího povolání. Je tomu přesně naopak. Tento model dává žákům smysluplný prostor pro postupnou profilaci v dospělejším středoškolském prostředí. Nabízí mnohem flexibilnější možnost změny vzdělávací cesty v případě, že studentům původní směr nevyhovuje, aniž by propadli sítem systému.",
          "Tento strukturální krok je nevyhnutelný i tváří v tvář neúprosné demografii. Česká populace stárne a my si už ekonomicky nemůžeme dovolit uměle zdržovat celou mladou generaci o rok déle v nefunkčním systému. Výsledkem tohoto modelu je eliminace prostojů, zrychlený vstup lépe připravených absolventů na trh práce, uvolnění rukou tisícům pedagogů a konečně i sladění naší vzdělávací architektury se standardy vyspělých zemí OECD.",
        ],
      },
      {
        n: 2,
        slug: "cykly-3-3-2",
        t: "Vnitřní členění ZŠ na cykly 3+3+2",
        sub: "Řízení na základě dat",
        short: "Tři logické celky základní školy zakončené ověřovacími uzly.",
        body: [
          "Základní školu restrukturalizujeme do tří logických celků (1.–3. ročník, 4.–6. ročník, 7.–8. ročník). Každý z těchto cyklů bude zakončen ověřovacím uzlem. Nejde o byrokracii navíc, ale o zavedení standardního manažerského řízení na základě dat. Tento model nám umožní včas identifikovat problémy ve studiu, flexibilněji reagovat na vývojovou psychologii dětí a poskytnout ředitelům i státu tvrdá data o tom, jak školy reálně fungují.",
          "Tímto krokem zároveň bouráme rigiditu přežitého systému a konečně rozvazujeme ruce zřizovatelům. Starostové a obce si nově budou moci modelovat svou školskou infrastrukturu mnohem flexibilněji a výrazně efektivněji, přesně podle lokální demografie a prostorových možností. Menší bloky umožní například snazší organizační propojení předškolního vzdělávání s prvním cyklem, nebo naopak třetího cyklu se středními školami.",
          "Tento strukturální posun je naprosto zásadním předpokladem pro následnou efektivní optimalizaci sítě škol, která obcím i státu ušetří miliardy korun z provozu neefektivně alokovaných kapacit.",
        ],
      },
      {
        n: 3,
        slug: "jednotna-vystupni-zkouska",
        t: "Jednotná výstupní zkouška",
        sub: "Standardizace kvality",
        short: "Objektivní ověření kompetencí na konci 8. ročníku místo stresujících přijímaček.",
        body: [
          "Celoplošně zavádíme objektivní ověření kompetencí na konci 8. ročníku. Dnešní systém přijímacího řízení je stresující, nespravedlivý a generuje obrovské regionální nerovnosti.",
          "Jednotná výstupní zkouška nahradí tento chaos srozumitelným evaluačním nástrojem. Pro stát a zřizovatele to znamená zisk klíčových dat o přidané hodnotě jednotlivých škol.",
        ],
      },
      {
        n: 4,
        slug: "mala-a-velka-maturita",
        t: "Malá a Velká maturita",
        sub: "Certifikace kompetencí a profil absolventa",
        short: "Malá maturita jako vstupenka na trh práce, Velká maturita jako vstupenka k vysoké škole.",
        body: [
          "Zavádíme jasné milníky: „Malou maturitu“ jako povinné ověření funkčních gramotností po dvou letech střední školy, která slouží jako vstupenka na trh práce a potvrzení univerzálního profilu absolventa. „Velká maturita“ pak zůstává vstupenkou k terciárnímu vzdělávání.",
          "Tento systém je prevencí obrovských ekonomických ztrát, ke kterým dochází, když student opustí systém předčasně a bez jakékoliv certifikace. Tímto krokem zároveň prudce zvyšujeme prestiž učňovského školství, protože i řemeslník získá nezbytný všeobecný základ.",
        ],
      },
    ],
  },
  {
    id: "II",
    name: "Kvalita a podpora talentu",
    goal: "Vrátit do školství řád, podporu excelence a racionální péči o znevýhodněné.",
    intro:
      "Druhý pilíř se zaměřuje na kvalitu samotného obsahu a organizace výuky. Přesouváme pozornost od utopických ideologií zpět k praktické uplatnitelnosti, výkonu a rozvoji potenciálu.",
    measures: [
      {
        n: 5,
        slug: "revize-inkluze",
        t: "Revize inkluze",
        sub: "Od ideologie k racionální podpoře",
        short: "Průchozí třídy, specializované skupiny a silnější pravomoci ředitelů.",
        body: [
          "Zastavujeme současný plošný model inkluze, který neúměrně zatěžuje rozpočty a snižuje efektivitu výuky pro většinu dětí. Zachováváme princip podpory znevýhodněných, ale radikálně měníme formu.",
          "Posilujeme pravomoci ředitelů a zavádíme systém „průchozích tříd“ a specializovaných skupin. Inkluze musí být přínosem pro rozvoj jednotlivce, nikoliv brzdou kvality vzdělávacího procesu pro intaktní většinu. Do systému vracíme zdravý rozum a efektivitu.",
        ],
      },
      {
        n: 6,
        slug: "profesni-navigace",
        t: "Profesní navigace",
        sub: "Moderní kariérové poradenství propojené s praxí",
        short: "Kariéroví poradci, propojení škol s firmami a povinné stáže.",
        body: [
          "Končíme s modelem, kdy si studenti vybírají školy naslepo bez vazby na realitu ekonomiky. Institucionalizujeme pozici kariérového poradce a zavádíme tvrdé propojení škol s trhem práce, firmami a povinnými stážemi.",
          "Cílem tohoto opatření je radikální snížení nesouladu (tzv. mismatch) mezi tím, jaké absolventy produkují školy, a tím, koho reálně poptávají zaměstnavatelé. Jde o přímou investici do naší hospodářské konkurenceschopnosti.",
        ],
      },
      {
        n: 7,
        slug: "modularni-vyuka",
        t: "Modulární výuka a flexibilita kurikula",
        sub: "Připraveni na éru AI",
        short: "Vzdělávací obsah skládaný z modulů, včetně modulů od firem.",
        body: [
          "Náš vzdělávací systém je příliš rigidní na to, aby dokázal reagovat na disruptivní technologické změny, jako je nástup umělé inteligence. Rozvolňujeme proto pevné rámcové vzdělávací programy a zavádíme modulární výuku.",
          "Žáci i studenti si budou moci skládat svůj vzdělávací obsah z dílčích modulů (včetně těch od externích dodavatelů a firem). To přinese rychlou reakci na požadavky trhu, personalizaci výuky a schopnost neustále inovovat obsah bez nutnosti zdlouhavě měnit zákony.",
        ],
      },
    ],
  },
  {
    id: "III",
    name: "Efektivita, řízení a finance",
    goal: "Systém, kde peníze motivují ke kvalitě a odpovědnosti. Konec plýtvání.",
    intro:
      "Tento pilíř představuje manažerskou a finanční revoluci. Odmítáme dotovat neefektivitu a prázdná místa. Zavádíme principy hospodárnosti, profesionálního řízení a osobní odpovědnosti občana za svůj růst.",
    measures: [
      {
        n: 8,
        slug: "optimalizace-site-skol",
        t: "Optimalizace sítě škol a profesionální management",
        sub: "Svazkové školy",
        short: "Slučování ředitelství a oddělení pedagogického vedení od správy budov.",
        body: [
          "Česká republika má tisíce zřizovatelů, což generuje obrovskou neefektivitu a administrativní zátěž. Budeme motivovat zřizovatele ke slučování ředitelství do logických a efektivních celků (tzv. svazkové školy).",
          "Zásadně oddělujeme pedagogické vedení od provozního řízení – ředitel má vést lidi a garantovat kvalitu výuky, nikoliv spravovat kotelny a budovy. Úspory, které získáme ze sdílených provozních a administrativních služeb, budeme garantovaně investovat zpět do platů učitelů a inovací.",
        ],
      },
      {
        n: 9,
        slug: "vzdelavaci-ucty",
        t: "Individuální vzdělávací účty",
        sub: "Podpora celoživotního učení",
        short: "Virtuální vzdělávací účet pro každého občana – od školy až do důchodu.",
        body: [
          "Zavádíme virtuální vzdělávací účet pro každého občana, který integruje celoživotní vzdělávání od školy až do důchodu. Tento nástroj umožní dospělým financovat své rekvalifikace a upskilling.",
          "Peníze jdou přímo za klientem, což na trhu vytvoří silný tlak na kvalitu poskytovatelů vzdělávacích kurzů. Stát občanovi přispívá a motivuje ho, ale občan si svou kariéru a svůj rozvoj řídí primárně sám. Posilujeme tím individuální odpovědnost.",
        ],
      },
      {
        n: 10,
        slug: "zruseni-phmax",
        t: "Zrušení PHmax a normativ na žáka",
        sub: "Efektivní financování",
        short: "Peníze sledují studenta a jeho výkon, ne odučené hodiny.",
        body: [
          "Školství nemůže být bezednou dírou na veřejné peníze. Okamžitě opustíme systém financování „na odučenou hodinu“ (tzv. PHmax), který školy pouze motivuje k umělému dělení tříd a nabírání úvazků bez ohledu na počet žáků a kvalitu.",
          "Vracíme se k modernizovanému normativu „na žáka“, doplněnému o koeficienty kvality. Peníze musí striktně sledovat studenta a jeho výkon. Školy tak budou motivovány naplňovat své kapacity a přirozeně soutěžit o žáky svou přidanou hodnotou. Jde o nejvýraznější debyrokratizační a úsporný krok celého programu.",
        ],
      },
    ],
  },
];

export const allMeasures = pillars.flatMap((p) => p.measures.map((m) => ({ ...m, pillar: p })));

export const timeline = [
  { age: "6–9 let", t: "1. cyklus ZŠ", d: "1.–3. ročník, zakončený ověřovacím uzlem." },
  { age: "9–12 let", t: "2. cyklus ZŠ", d: "4.–6. ročník, zakončený ověřovacím uzlem." },
  { age: "12–14 let", t: "3. cyklus ZŠ", d: "7.–8. ročník, jednotná výstupní zkouška." },
  { age: "14–16 let", t: "Povinné 2 roky SŠ", d: "Všeobecně-odborný základ, Malá maturita." },
  { age: "16–18+ let", t: "Velká maturita", d: "Vstupenka k terciárnímu vzdělávání." },
];

export const economics = [
  { v: "3–7,3 mld. Kč", t: "Efektivnější využití výdajů", d: "Zrušením neefektivní 9. třídy ušetří státní rozpočet ročně. Prostředky přesměrujeme do kvality a platů." },
  { v: "6,9–9,2 mld. Kč", t: "Dřívější vstup na trh práce", d: "60 až 80 tisíc mladých lidí ročně se zapojí do ekonomiky o rok dříve – na přímých odvodech a daních." },
  { v: "0,3–0,4 mld. Kč", t: "Nižší zátěž sociálního systému", d: "Záchytný rámec Malé maturity snižuje předčasné odchody ze vzdělávání a výdaje na dávky." },
  { v: "2,3–2,8 mil. Kč", t: "Dlouhodobý růst HDP", d: "O tolik více odvede do rozpočtu za život každý nový absolvent SŠ." },
];

export const history = [
  { y: "2022", d: "První odborné konzultace a představení základního záměru reformy." },
  { y: "2023", d: "Veřejné konzultace v desítkách škol po celé ČR a odborné kulaté stoly v Poslanecké sněmovně i na univerzitách." },
  { y: "2024", d: "Zformování expertní pracovní skupiny a oficiální představení reformy na Pedagogické fakultě UK." },
  { y: "2025", d: "Série kulatých stolů pro finální veřejnou konzultaci a ekonomická analýza dopadů od CETA." },
];

export const nextSteps = [
  { y: "2026", d: "Užší spolupráce se zaměstnavateli a byznysem na definování potřeb trhu." },
  { y: "2026", d: "Detailní analýza vstupu absolventů na trh práce a demografická studie." },
  { y: "2026/27", d: "Komplexní dopadová studie (RIA)." },
  { y: "2026/27", d: "Příprava samotného legislativního návrhu." },
];

export const experts = [
  {
    g: "Akademická obec a univerzity",
    people: [
      "doc. RNDr. Antonín Jančařík, Ph.D. – děkan Pedagogické fakulty UK",
      "doc. RNDr. Pavel Mentlík, Ph.D. – děkan Pedagogické fakulty ZČU",
      "doc. RNDr. Helena Koldová, Ph.D. – děkanka Pedagogické fakulty JČU",
      "prof. PaedDr. Iva Stuchlíková, CSc. – Pedagogická fakulta JČU",
      "prof. PhDr. Filip Smolík, Ph.D., DSc. – Psychologický ústav AV ČR",
    ],
  },
  {
    g: "Analytici, zaměstnavatelé a instituce",
    people: [
      "Karel Gargulák a Jan Zeman – PAQ Research",
      "PhDr. Helena Úlovcová – Hospodářská komora",
      "Silvie Pýchová – Partnerství 2030+",
      "Miroslav Hřebecký – EDUin",
      "Martin Navrátil – Moravskoslezský pakt zaměstnanosti",
    ],
  },
  {
    g: "Exekutiva a praxe",
    people: [
      "Mgr. Jiří Nantl, LL.M. – náměstek ministra školství",
      "Ing. Miroslav Krejčí – ředitel CERMAT",
      "Ing. Radko Sáblík – ředitel SŠ a poradce ministra",
      "Jitka Kmentová a Lukáš Šlehofer – projekt ALT",
      "Desítky dalších ředitelů škol a zástupců zřizovatelů",
    ],
  },
];

export const audienceOptions = [
  { id: "parents", label: "Rodiče a žáci" },
  { id: "schools", label: "Ředitelé a starostové" },
  { id: "employers", label: "Zaměstnavatelé" },
  { id: "country", label: "Česko" },
] as const;
export type Audience = (typeof audienceOptions)[number]["id"];
export const defaultAudience: Audience = "parents";
export function isAudience(value: string): value is Audience {
  return audienceOptions.some((option) => option.id === value);
}

type AudienceCopy = {
  claim: [string, string, string];
  intro: string;
  why: string;
  invitation: string;
  diagnosis: { t: string; d: string }[];
  goals: [string, string, string];
  stats: { v: string; l: string }[];
  dataLead: string;
  expertLead: string;
  myths: [string, string, string];
};

export const audienceCopy: Record<Audience, AudienceCopy> = {
  parents: {
    claim: ["Místo devítky", "dva roky na střední", "pro všechny děti"],
    intro: "Reforma 8+2 je odpovědí na to, co si říkají učitelé, rodiče i děti už dlouho: školství potřebuje proměnu. Místo stresu z přijímaček, nejasných přechodů mezi stupni a nepružného systému nabízíme smysluplné rozdělení vzdělávání – 8 let základní školy a 2 roky nižší střední školy. Tyto roky děti připraví na život, povolání i další studium. Reforma přináší jasný rámec, stabilitu, moderní nástroje a šanci na úspěch každému žákovi.",
    why: "Dnes máme školství, které čím dál tím méně odpovídá tomu, jak se mění svět kolem nás. Děti tráví devátý ročník memorováním na přijímačky, výuka je často roztříštěná a školy i zřizovatelé se potýkají s přetížením a roztříštěností systému. Přitom máme skvělé učitele, odhodlané ředitele i chytré děti. Musíme jim dát lepší podmínky – reforma 8+2 je cesta, jak školství zjednodušit, zprůchodnit a otevřít novým příležitostem.",
    invitation: "Na této stránce naleznete všechna opatření přehledně vysvětlená. Přečtěte si je, dejte nám vědět, co si myslíte – a pokud s reformou souhlasíte, podpořte vizi sdílením ve veřejném prostoru. Jen společně dokážeme změnit školství tak, aby dávalo smysl dnešním dětem i budoucím generacím.",
    diagnosis: [
      { t: "Méně drilu, více vzdělávání", d: "Devátý ročník se často soustředí na přípravu k přijímačkám. Dva roky společného středoškolského základu mají dětem nabídnout smysluplnější přípravu na život i další studium." },
      { t: "Volba, která není slepou uličkou", d: "Děti potřebují čas zjistit, co jim jde. Reforma umožní dětem postupnou profilaci a možnost jednoduše a bež ztráty času upravit vzdělávací cestu, když původní směr nevyhovuje." },
      { t: "Pomoc dřív, než přijde neúspěch", d: "Ověření na konci cyklů má včas odhalit potíže. Malá maturita po dvou letech střední školy má zabránit odchodu ze vzdělávání bez potvrzených kompetencí." },
    ],
    goals: ["Srozumitelná cesta od základní školy k dalšímu studiu nebo povolání, bez slepých uliček.", "Rozvoj talentu i přiměřená pomoc dětem, které ji potřebují. Výuka propojená se životem.", "Více prostoru pro učitele a kvalitní výuku. Podpora vzdělávání nekončí odchodem ze školy."],
    stats: [{ v: "8 let", l: "základní školy bez deváté třídy jako čekárny na přijímačky – méně stresu a drilu" }, { v: "2 roky", l: "společného základu na střední, aby si dítě mohlo v klidu vyzkoušet, co mu jde" }, { v: "Malá maturita", l: "jasně potvrdí, co dítě umí, a otevře cestu k dalšímu studiu i povolání" }, { v: "+2,3 až 2,8 mil. Kč", l: "vydělá za život navíc absolvent SŠ oproti člověku se základním vzděláním" }],
    dataLead: "Kvalitní vzdělávání pomáhá dětem i celé společnosti. Podkladové analýzy vyčíslují přínosy dřívějšího vstupu do práce, dokončeného středoškolského základu a efektivnějšího využití peněz ve školství.",
    expertLead: "Za návrhem je více než tříletá diskuse s odborníky, řediteli a zřizovateli. Posuzovali také vývojové potřeby dětí, všeobecný základ a možnosti včasné podpory. Další kroky zahrnují dopadovou studii a přípravu zákona.",
    myths: ["Dětem nebereme rok vzdělávání. Povinná cesta se mění z devíti na deset let: osm let ZŠ a dva roky SŠ. Společný základ dává čas na dozrání a postupnou volbu směru.", "Podpora znevýhodněných zůstává. Návrh mění její formu: průchozí třídy a specializované skupiny mají pomoci jednotlivým dětem a zároveň zachovat kvalitní výuku pro ostatní.", "Návrh se soustředí na sdílení ředitelství, administrativy a provozu. Cykly 3+3+2 umožňují obcím přizpůsobit organizaci škol místním podmínkám; nejde o plošné rušení školních budov."],
  },
  schools: {
    claim: ["Méně administrativy", "více prostoru", "pro kvalitní výuku"],
    intro: "Reforma 8+2 dává ředitelům a zřizovatelům srozumitelnější rámec pro vedení škol. Osm let základní školy v cyklech 3+3+2 a dva povinné roky střední školy propojuje s řízením na základě dat, sdílenou správou a větší pružností výuky. Ředitel má vést pedagogy a rozvíjet kvalitu, ne trávit čas správou kotelny.",
    why: "Školy a obce dnes zatěžuje roztříštěnost řízení, administrativa i obtížné přizpůsobování kapacit demografii. Přitom máme skvělé učitele a odhodlané ředitele. Reforma má uvolnit jejich ruce: dát jim data pro rozhodování, flexibilnější organizaci škol a možnost sdílet provozní služby.",
    invitation: "Projděte všech 10 opatření z pohledu vedení školy a vaší obce. Zvažte možnosti cyklů 3+3+2, sdílené správy i financování a dejte nám vědět, co návrh znamená pro vaši praxi. Proměna školství potřebuje zkušenosti těch, kteří školy každý den vedou.",
    diagnosis: [
      { t: "Ředitel jako pedagogický lídr", d: "Správa budov a administrativa ubírají čas na vedení lidí. Návrh odděluje pedagogické vedení od provozního řízení a počítá se sdílenými službami." },
      { t: "Kapacity podle místních potřeb", d: "Cykly 3+3+2 umožní pružněji organizovat síť škol podle demografie a prostorových možností obcí." },
      { t: "Rozhodování opřené o data", d: "Ověřovací uzly a výstupní zkouška mají ukázat, kde žáci potřebují pomoc a jakou přidanou hodnotu škola přináší." },
    ],
    goals: ["Pružnější organizace škol v cyklech 3+3+2 a společná data pro řízení vzdělávací cesty.", "Silnější pravomoci ředitelů při podpoře žáků, kariérové poradenství a flexibilnější výuka.", "Sdílené provozní služby, profesionální management a financování motivující ke kvalitě."],
    stats: [{ v: "3+3+2", l: "cykly ZŠ, které umožní organizovat školy podle místní demografie a kapacit" }, { v: "9 500 učitelů", l: "z devátých tříd může posílit školy tam, kde kvalifikovaní pedagogové chybějí" }, { v: "Sdílené služby", l: "provozu a administrativy – ředitel se může věnovat vedení výuky a lidí" }, { v: "+9,3 až 16,2 mld. Kč", l: "ročně pro soustavu – prostor pro platy učitelů a inovace ve školách" }],
    dataLead: "Pro zřizovatele je důležitá hospodárnost i kvalita. Analýzy vyčíslují dopady změny vzdělávací dráhy; návrh počítá s využitím úspor ze sdílených služeb pro platy učitelů a inovace. Částky níže se vztahují k celé soustavě, ne k rozpočtu jednotlivé obce.",
    expertLead: "Návrh byl konzultován s řediteli škol, zřizovateli, akademiky a analytiky. Jejich zkušenosti jsou důležité pro členění 3+3+2, sdílenou správu i vedení výuky. Před legislativním návrhem následují demografická analýza a dopadová studie.",
    myths: ["Model 8+2 mění organizaci vzdělávací dráhy, nikoli pouhé škrtnutí ročníku. Na osmiletou ZŠ navazují dva povinné roky SŠ; celkem jde o deset let povinného vzdělávání.", "Návrh zachovává podporu znevýhodněných a posiluje rozhodovací pravomoci ředitelů. Průchozí třídy a specializované skupiny mají umožnit přiměřenou organizaci podpory i výuky.", "Svazkové školy znamenají sdílení ředitelství a provozních služeb. Obce mají díky cyklům 3+3+2 větší prostor organizovat infrastrukturu podle místní demografie, nikoli povinnost plošně zavírat budovy."],
  },
  employers: {
    claim: ["Školy propojené s praxí", "kvalifikovaní lidé", "pro měnící se ekonomiku"],
    intro: "Reforma 8+2 propojuje školy s reálnou ekonomikou. Osm let základní školy a dva povinné roky všeobecně-odborného základu mají připravit mladé lidi na práci i další studium. Kariéroví poradci, stáže a vzdělávací moduly od firem pomohou přiblížit získané dovednosti tomu, co zaměstnavatelé potřebují.",
    why: "Technologie a umělá inteligence mění práci rychleji, než se dokáže měnit pevné kurikulum. Studenti často vybírají obory bez kontaktu s praxí a část absolventů pak pracuje mimo svůj obor. Reforma staví na všeobecném základu, postupné profilaci a pravidelném propojení škol s firmami.",
    invitation: "Projděte všech 10 opatření a zvažte, jak se vaše zkušenosti mohou promítnout do kariérového poradenství, stáží a vzdělávacích modulů. Dejte nám vědět, jaké dovednosti chybějí ve vašem oboru. Smysluplná spolupráce škol a zaměstnavatelů začíná konkrétními potřebami praxe.",
    diagnosis: [
      { t: "Dovednosti a poptávka se míjejí", d: "Podklad upozorňuje na nesoulad oborů a potřeb zaměstnavatelů. Profesní navigace a stáže mají studentům umožnit informovanější volbu." },
      { t: "Výuka nestíhá technologie", d: "Modulární obsah má pružně reagovat na změny včetně AI. Na jeho tvorbě se mohou podílet i firmy." },
      { t: "Potenciál zůstává nevyužitý", d: "Dva povinné roky SŠ a Malá maturita mají omezit odchody bez certifikovaných kompetencí a připravit více mladých lidí na práci." },
    ],
    goals: ["Plynulejší přechod mladých lidí do práce s ověřeným všeobecně-odborným základem.", "Kariérové poradenství, povinné stáže a moduly, které reagují na potřeby praxe i nové technologie.", "Udržitelné financování škol a vzdělávací účty pro rekvalifikace a rozvoj dovedností během kariéry."],
    stats: [{ v: "60–80 tisíc", l: "kvalifikovaných mladých lidí ročně může vstoupit na trh práce o rok dříve" }, { v: "2 roky", l: "všeobecně-odborného základu pro všechny – lépe připravení noví zaměstnanci" }, { v: "Stáže a moduly", l: "od firem propojí výuku s praxí a umožní rychle reagovat na technologie a AI" }, { v: "Vzdělávací účty", l: "pro rekvalifikace a rozvoj dovedností zaměstnanců během celé kariéry" }],
    dataLead: "Dřívější vstup kvalifikovaných absolventů do práce a menší nesoulad dovedností s praxí jsou důležité i pro firmy. Analýzy vyčíslují přínosy pro veřejné rozpočty; nejde o příslib úspory jednotlivému zaměstnavateli.",
    expertLead: "Do konzultací vstoupili také zástupci zaměstnavatelů a institucí propojujících vzdělávání s praxí. Další kroky počítají s užší spoluprací s byznysem na definování potřeb trhu a s analýzou vstupu absolventů do práce.",
    myths: ["Nejde o rychlejší odchod bez přípravy. Dva povinné roky SŠ mají dát všem všeobecně-odborný základ a Malou maturitu; další studium zůstává otevřené.", "Podpora znevýhodněných se neruší. Návrh mění její organizaci tak, aby rozvíjela schopnosti jednotlivce a zároveň umožňovala kvalitní výuku a přípravu na další uplatnění.", "Optimalizace se zaměřuje na management a sdílené služby. Ušetřené prostředky mají směřovat do učitelů a inovací, které jsou důležité i pro kvalitu budoucích absolventů."],
  },
  country: {
    claim: ["Vzdělané Česko", "silnější ekonomika", "šance pro každého"],
    intro: "Mozky našich lidí jsou strategickou surovinou Česka. Reforma 8+2 mění vzdělávací dráhu na osm let základní školy a dva povinné roky všeobecně-odborného základu. Deset propojených opatření má rozvíjet lidský potenciál, zlepšit využití veřejných peněz a připravit zemi na ekonomiku měněnou technologiemi a AI.",
    why: "Česko potřebuje opustit model růstu založený na levné práci a lépe využít schopnosti svých lidí. Stárnutí populace, předčasné odchody ze vzdělávání i roztříštěná správa škol zatěžují budoucí prosperitu. Reforma propojuje změnu vzdělávací cesty s kvalitou výuky, řízením a udržitelným financováním.",
    invitation: "Projděte všech 10 opatření i ekonomické podklady a posuďte návrh jako celek. Dejte nám vědět, co si myslíte – a pokud s reformou souhlasíte, podpořte ji. Jen společně dokážeme změnit školství tak, aby dávalo smysl dnešním dětem i budoucím generacím.",
    diagnosis: [
      { t: "Lidský kapitál pro budoucnost", d: "Předčasné odchody a nevyužité dovednosti znamenají ztrátu pro jednotlivce i ekonomiku. Společný středoškolský základ má omezit tyto slepé uličky." },
      { t: "Veřejné peníze s výsledkem", d: "Návrh spojuje sdílenou správu škol a změnu financování s důrazem na kvalitu. Peníze mají sledovat žáka a jeho vzdělávání." },
      { t: "Odpověď na demografii a AI", d: "Stárnoucí populace potřebuje lépe připravené absolventy. Pružné moduly a celoživotní vzdělávání mají pomoci reagovat na měnící se práci." },
    ],
    goals: ["Vzdělávací dráha bez neefektivních prostojů a odchodů bez ověřených kompetencí.", "Rozvoj talentu, účelná podpora znevýhodněných a dovednosti pro měnící se ekonomiku.", "Hospodárná správa, odpovědnost za výsledky a podpora celoživotního vzdělávání."],
    stats: [{ v: "+9,3 až 16,2 mld. Kč", l: "ročně – odhadovaný okamžitý přínos pro veřejné rozpočty" }, { v: "60–80 tisíc", l: "mladých lidí ročně má vstoupit do ekonomiky o rok dříve s kvalifikací" }, { v: "9 500 učitelů", l: "lze uvolnit z devátých tříd tam, kde v soustavě chybějí" }, { v: "+2,3 až 2,8 mil. Kč", l: "navíc odvede za život nový absolvent SŠ oproti člověku se základním vzděláním" }],
    dataLead: "Reforma je strukturální investicí do lidského kapitálu a dlouhodobé prosperity. Podkladové analýzy CETA a PAQ Research vyčíslují přínosy efektivnější vzdělávací dráhy, dřívějšího vstupu do ekonomiky a vyššího dokončeného vzdělání.",
    expertLead: "Reforma se opírá o více než tříleté konzultace s akademiky, analytiky, zřizovateli, řediteli i zaměstnavateli. K přípravě zákona patří ještě demografická analýza, analýza trhu práce a komplexní dopadová studie; návrh není hotovým zákonem.",
    myths: ["Povinné vzdělávání se prodlužuje z devíti na deset let. Model 8+2 propojuje osmiletou ZŠ se dvěma roky SŠ, aby omezil neefektivní prostoje a odchody bez ověřeného základu.", "Princip podpory znevýhodněných zůstává zachován. Návrh mění formu podpory prostřednictvím průchozích tříd, specializovaných skupin a silnější role ředitelů.", "Jádrem optimalizace je slučování ředitelství a sdílení provozních služeb. Úspory mají být investovány zpět do platů učitelů a inovací; nejde o plošné rušení školních budov."],
  },
};

// Columns follow audienceOptions; the canonical numbers, names and slugs never change.
const measurePerspectives: Record<number, [string, string, string, string]> = {
  1: ["Osm let ZŠ a dva roky SŠ dávají vašemu dítěti společný základ a čas hledat vlastní směr, ne nutnost předčasně zvolit povolání.", "Model 8+2 mění návaznost škol a uvolňuje kapacity pedagogů z devátých tříd pro místa, kde jejich kvalifikace chybí.", "Dva roky všeobecně-odborného základu připraví budoucí pracovníky na praxi, aniž by je uzavřely do předčasné profesní volby.", "Model 8+2 má odstranit neefektivní prostoje, lépe využít učitele a umožnit dřívější vstup připravených absolventů do ekonomiky."],
  2: ["Cykly 3+3+2 mají lépe odpovídat vývoji vašeho dítěte a včas ukázat, kde potřebuje pomoc.", "Cykly 3+3+2 poskytují data pro vedení školy a obcím větší prostor organizovat kapacity podle místní demografie.", "Pravidelné ověřování v cyklech 3+3+2 má pomoci zajistit pevný základ dovedností, na kterém později staví odborná příprava.", "Členění 3+3+2 propojuje včasnou podporu žáků s daty o výsledcích škol a efektivnější organizací soustavy."],
  3: ["Jedna výstupní zkouška na konci osmé třídy má nahradit stresující přijímačky a srozumitelně ukázat, co vaše dítě zvládá.", "Jednotná výstupní zkouška poskytne ředitelům a zřizovatelům srovnatelná data o kompetencích žáků a přidané hodnotě školy.", "Ověření kompetencí na konci ZŠ vytváří společný výchozí bod pro středoškolskou přípravu budoucích zaměstnanců.", "Jednotná výstupní zkouška má omezit regionální nerovnosti a nabídnout státu objektivní data o kvalitě základního vzdělávání."],
  4: ["Malá maturita potvrzuje základ pro život a práci; Velká maturita otevírá cestu na vysokou školu. Dítě nemá odejít bez ověřených kompetencí.", "Dva jasné milníky umožní školám ověřit všeobecný základ a odlišit jej od přípravy k terciárnímu vzdělávání.", "Malá maturita má potvrdit funkční gramotnosti budoucích pracovníků včetně učňů. Velká maturita zůstává cestou k vysoké škole.", "Malá a Velká maturita mají omezit ztráty z odchodů bez certifikace a posílit všeobecný základ napříč obory."],
  5: ["Vaše dítě má dostat přiměřenou podporu podle svých potřeb. Průchozí třídy a specializované skupiny mají zachovat kvalitu výuky pro všechny.", "Ředitelé získají silnější pravomoci organizovat podporu prostřednictvím průchozích tříd a specializovaných skupin.", "Přiměřená podpora žáků má rozvíjet jejich schopnosti a uplatnitelnost, při zachování kvalitní výuky pro ostatní.", "Revize inkluze zachovává podporu znevýhodněných, ale mění její formu s důrazem na rozvoj jednotlivce a účelné využití prostředků."],
  6: ["Kariérový poradce a kontakt s praxí pomohou vašemu dítěti vybírat další cestu podle schopností i skutečných možností.", "Kariérové poradenství se stává součástí školy, propojenou s firmami a povinnými stážemi.", "Spolupráce s kariérovými poradci a povinné stáže propojí vaši praxi se školami a pomohou snížit nesoulad dovedností a poptávky.", "Profesní navigace má snížit nesoulad mezi absolventy škol a potřebami zaměstnavatelů, a tím posílit konkurenceschopnost Česka."],
  7: ["Vaše dítě si bude moci skládat vzdělávání z modulů podle svého rozvoje. Výuka má pružněji reagovat na svět i nové technologie.", "Modulární obsah dá školám prostor inovovat výuku bez čekání na zdlouhavé změny a zapojovat externí odborníky i firmy.", "Firmy mohou přispívat vzdělávacími moduly, které přinesou do výuky aktuální dovednosti a zkušenosti včetně využití AI.", "Flexibilnější kurikulum má zrychlit reakci vzdělávání na technologické změny a potřeby ekonomiky."],
  8: ["Sdílená administrativa má učitelům a ředitelům uvolnit čas na děti. Úspory mají směřovat do platů učitelů a inovací.", "Svazkové školy umožní sdílet provoz a administrativu. Pedagogické vedení se oddělí od správy budov a ředitel získá čas na kvalitu výuky.", "Profesionální vedení škol a sdílené služby mají podpořit kvalitu výuky, na které závisí příprava budoucích absolventů.", "Sdílený management a provozní služby mají omezit roztříštěnost správy škol a vrátit ušetřené prostředky do učitelů a inovací."],
  9: ["Vzdělávání nekončí odchodem ze školy. Vzdělávací účet má vám i vašemu dítěti v dospělosti pomáhat financovat rekvalifikace a nové dovednosti.", "Vzdělávací účty propojují školní přípravu s celoživotním učením a vytvářejí tlak na kvalitu poskytovatelů kurzů.", "Vzdělávací účty mají lidem usnadnit rekvalifikace a rozvoj dovedností během kariéry, když se mění technologie a pracovní potřeby.", "Účet pro každého občana propojí celoživotní vzdělávání se státní podporou a osobní odpovědností za vlastní rozvoj."],
  10: ["Peníze mají sledovat žáka a kvalitu jeho vzdělávání, ne jen počet odučených hodin. Školy mají motivovat výsledky, které dětem přinášejí.", "Modernizovaný normativ na žáka s koeficienty kvality nahradí PHmax a má motivovat školy k účelnému využití kapacit.", "Financování podle žáka a kvality má podporovat vzdělávací výsledky namísto samotného objemu odučených hodin.", "Zrušení PHmax a normativ na žáka s koeficienty kvality mají spojit hospodárnost veřejných výdajů s odpovědností škol za výsledky."],
};

const measureExplanations: Record<number, [string, string]> = {
  1: ["Návrh nahrazuje devítiletou základní školu osmi lety a navazuje povinným dvouletým všeobecně-odborným cyklem na SŠ. Povinné vzdělávání tak trvá deset let, nikoli osm.", "Společný základ umožňuje postupnou profilaci a změnu vzdělávací cesty, když původní směr nevyhovuje. Nejde o nevratnou volbu povolání ve čtrnácti letech."],
  2: ["Základní škola se člení na 1.–3., 4.–6. a 7.–8. ročník. Na konci cyklů ověřovací uzly pomohou včas rozpoznat problémy a poskytnou data o výsledcích výuky.", "Menší bloky umožní pružnější organizaci podle místních kapacit: například propojení předškolního vzdělávání s prvním cyklem nebo třetího cyklu se středními školami."],
  3: ["Na konci osmého ročníku návrh zavádí celoplošné objektivní ověření kompetencí jako náhradu současného přijímacího řízení.", "Výsledky mají dát školám, zřizovatelům i státu srozumitelná data o přidané hodnotě vzdělávání a omezit regionální nerovnosti."],
  4: ["Malá maturita po dvou povinných letech SŠ ověřuje funkční gramotnosti a společný profil absolventa. Velká maturita zůstává vstupenkou k terciárnímu vzdělávání.", "Společný všeobecný základ zahrnuje i učňovské obory. Ověření kompetencí má bránit odchodům ze systému bez jakékoliv certifikace."],
  5: ["Návrh zachovává princip podpory znevýhodněných, mění však plošný model její organizace. Počítá s průchozími třídami, specializovanými skupinami a silnější rolí ředitelů.", "Cílem je spojit přínos pro jednotlivého žáka s kvalitním vzděláváním ostatních a s účelným využitím rozpočtu."],
  6: ["Návrh institucionalizuje pozici kariérového poradce a propojuje školy s firmami, trhem práce a povinnými stážemi.", "Studenti mají získat reálnou zkušenost pro volbu vzdělávacího směru. Opatření míří na nesoulad mezi kvalifikací absolventů a poptávkou zaměstnavatelů."],
  7: ["Návrh rozvolňuje pevné rámcové vzdělávací programy a umožňuje skládat obsah z dílčích modulů, včetně modulů od externích dodavatelů a firem.", "Výuka tak má pružněji reagovat na technologie včetně AI, přizpůsobovat se studentům a inovovat bez zdlouhavých změn zákonů."],
  8: ["Zřizovatelé mají být motivováni ke slučování ředitelství do svazkových škol a ke sdílení provozních a administrativních služeb. Pedagogické vedení se odděluje od provozního řízení.", "Úspory ze sdílených služeb mají být garantovaně investovány zpět do platů učitelů a inovací. Smyslem je kvalitnější vedení výuky a hospodárnější správa."],
  9: ["Virtuální vzdělávací účet pro každého občana má propojit vzdělávání od školy až do důchodu a umožnit dospělým financovat rekvalifikace a rozvoj dovedností.", "Stát přispívá, občan si řídí vlastní rozvoj. Peníze směřují za klientem a vytvářejí tlak na kvalitu vzdělávacích kurzů."],
  10: ["Návrh nahrazuje financování na odučenou hodinu, PHmax, modernizovaným normativem na žáka doplněným o koeficienty kvality.", "Školy mají být motivovány naplňovat kapacity a soutěžit přidanou hodnotou pro žáky, ne umělým dělením tříd a navyšováním hodin."],
};

export function getAudiencePillars(audience: Audience): Pillar[] {
  const column = audienceOptions.findIndex((option) => option.id === audience);
  return pillars.map((pillar, index) => ({
    ...pillar,
    goal: audienceCopy[audience].goals[index] ?? pillar.goal,
    measures: pillar.measures.map((measure) => {
      const short = measurePerspectives[measure.n]?.[column] ?? measure.short;
      const explanation = measureExplanations[measure.n];
      const body = explanation
        ? measure.body.length === 3
          ? [short, ...explanation]
          : [short, explanation.join(" ")]
        : measure.body;
      return { ...measure, short, body };
    }),
  }));
}
