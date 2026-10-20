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
  { y: "2022", d: "První odborné konzultace a představení základního záměru reformy. " },
  { y: "2023", d: "Veřejné konzultace v desítkách škol po celé ČR a odborné kulaté stoly v Poslanecké sněmovně i na univerzitách." },
  { y: "2024", d: "Finalizace konceptu a jednotlivých opatření s expertní pracovní skupinou. Oficiální představení reformy na Pedagogické fakultě UK." },
  { y: "2025", d: "Série kulatých stolů pro odbornou veřejnou konzultaci a ekonomická analýza dopadů od CETA." },
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
