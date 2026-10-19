export const audienceIds = ["rodice", "reditele", "zamestnavatele", "cesko"] as const;
export type AudienceId = (typeof audienceIds)[number];

export type Audience = {
  id: AudienceId;
  label: string;
  title: [string, string];
  lead: string;
  /** Copy per measure number 1–10, written from this group's point of view. */
  measures: Record<number, string>;
};

export const audiences: Audience[] = [
  {
    id: "rodice",
    label: "Rodiče a žáci",
    title: ["Dětem nebereme dětství.", "Dáváme jim lepší start."],
    lead: "Reforma 8+2 nic nezkracuje na úkor dětí. Ruší drahou čekárnu deváté třídy a místo ní nabízí dva roky na střední, kde má každé dítě čas dozrát, vyzkoušet si směr a v případě potřeby ho bez ztráty roku změnit.",
    measures: {
      1: "Osm let základní školy a dva povinné roky na střední pro všechny. Vaše dítě nebude rok čekat na přijímačky, ale bude se učit v dospělejším prostředí – a volbu povolání může ještě změnit.",
      2: "Tři kratší cykly lépe odpovídají tomu, jak se děti vyvíjejí. Případné problémy se studiem odhalíme včas, ne až před koncem školy.",
      3: "Místo stresujících a nespravedlivých přijímaček jedna srozumitelná zkouška na konci 8. třídy. Stejná pravidla pro všechny, bez ohledu na to, kde bydlíte.",
      4: "Malá maturita po dvou letech střední je záchranná síť: každé dítě odejde s certifikátem a vstupenkou na trh práce. Kdo chce dál, pokračuje k Velké maturitě.",
      5: "Podpora pro děti, které ji potřebují, zůstává – ale ve formě, která nebrzdí výuku celé třídy. Průchozí třídy a specializované skupiny pomohou všem.",
      6: "Žádná volba školy naslepo. Kariérový poradce a stáže ve firmách pomohou vašemu dítěti najít obor, který ho baví a má budoucnost.",
      7: "Výuka poskládaná z modulů dovolí dítěti jít víc do hloubky v tom, co ho zajímá, a učit se věci, které budou potřeba i v éře umělé inteligence.",
      8: "Ředitel se bude věnovat kvalitě výuky a učitelům, ne kotelnám a účetnictví. Ušetřené peníze půjdou zpět do platů učitelů.",
      9: "Vzdělávací účet provází vaše dítě – i vás – celý život. Rekvalifikace nebo nový kurz už nebudou otázkou štěstí, ale vlastního rozhodnutí.",
      10: "Peníze půjdou za žákem. Školy budou o vaše dítě soutěžit kvalitou, ne počtem odučených hodin.",
    },
  },
  {
    id: "reditele",
    label: "Ředitelé a starostové",
    title: ["Méně byrokracie,", "více pedagogiky."],
    lead: "Reforma rozvazuje ruce zřizovatelům i ředitelům. Obce si poskládají síť škol podle lokální demografie, ředitelé dostanou rozhodovací pravomoci a přestanou být správci budov.",
    measures: {
      1: "Zrušení deváté třídy uvolní zhruba 9 500 kvalifikovaných učitelů, kteří dnes chybí jinde v systému. Kapacity budov i pedagogů lze využít efektivněji.",
      2: "Cykly 3+3+2 umožní modelovat školskou infrastrukturu podle demografie – například propojit MŠ s prvním cyklem nebo třetí cyklus se střední školou. Ověřovací uzly přinesou ředitelům tvrdá data.",
      3: "Jednotná výstupní zkouška dá zřizovatelům srovnatelná data o přidané hodnotě jejich škol – podklad pro řízení, ne pro dojmy.",
      4: "Jasné milníky Malé a Velké maturity zpřehlední, co škola má absolventovi garantovat. Méně předčasných odchodů znamená méně nákladů pro obce.",
      5: "Ředitel získá rozhodovací pravomoc u inkluze. Průchozí třídy a specializované skupiny vrací do škol zdravý rozum a předvídatelné náklady.",
      6: "Kariérový poradce jako institucionalizovaná pozice a partnerství s místními firmami posílí vazbu školy na region a jeho zaměstnavatele.",
      7: "Rozvolnění rigidních RVP dá škole prostor inovovat obsah a zapojit externí moduly bez čekání na změnu zákona.",
      8: "Svazkové školy ušetří obcím administrativu. Pedagogické vedení se oddělí od provozu a úspory ze sdílených služeb půjdou do platů a inovací.",
      9: "Škola se může stát poskytovatelem celoživotního vzdělávání pro dospělé v obci – peníze ze vzdělávacích účtů jdou za kvalitními kurzy.",
      10: "Konec PHmax: normativ na žáka s koeficienty kvality motivuje naplňovat kapacity a soutěžit přidanou hodnotou. Nejvýraznější debyrokratizační krok programu.",
    },
  },
  {
    id: "zamestnavatele",
    label: "Zaměstnavatelé",
    title: ["Absolventi, které", "trh skutečně potřebuje."],
    lead: "Školství konečně vyprodukuje lidi s kvalifikací, kterou trh poptává. Firmy dostanou přímý vliv na obsah výuky a desítky tisíc mladých lidí přijdou na trh práce o rok dříve.",
    measures: {
      1: "Model 8+2 přivede 60 až 80 tisíc mladých lidí ročně na trh práce o rok dříve – odpověď na chronický nedostatek pracovních sil a stárnutí populace.",
      2: "Ověřovací uzly v každém cyklu dávají systému data o kvalitě, takže slabá místa se řeší dřív, než se projeví u absolventů.",
      3: "Jednotná zkouška zajistí srovnatelnou úroveň základních kompetencí u všech, kdo vstupují na střední školu.",
      4: "Malá maturita certifikuje funkční gramotnosti každého absolventa – i řemeslník získá pevný všeobecný základ. Roste prestiž učňovského školství.",
      5: "Výuka zaměřená na výkon a rozvoj potenciálu místo ideologie znamená lépe připravené absolventy.",
      6: "Povinné stáže a propojení škol s firmami radikálně sníží nesoulad (mismatch) mezi tím, koho školy vychovávají, a koho hledáte.",
      7: "Firmy mohou přímo dodávat vzdělávací moduly a mikrocertifikáty. Obsah se mění rychle, jak to vyžadují technologie a nástup AI.",
      8: "Profesionální management škol a sdílené služby uvolní prostředky na inovace a moderní vybavení výuky.",
      9: "Vzdělávací účty usnadní rekvalifikace a upskilling vašich zaměstnanců – peníze jdou za kvalitním poskytovatelem.",
      10: "Konec dotování oborů, které produkují nezaměstnané. Financování odměňuje školy za výkon a uplatnitelnost absolventů.",
    },
  },
  {
    id: "cesko",
    label: "Česko",
    title: ["Reforma, která", "se vyplatí."],
    lead: "Česko vyčerpalo model levné práce. Naší strategickou surovinou jsou mozky lidí. Reforma 8+2 je investicí s rychlou návratností: přináší rozpočtu ročně +9,3 až +16,2 mld. Kč a zastavuje plýtvání veřejnými penězi.",
    measures: {
      1: "Zrušení neefektivní deváté třídy ušetří 3 až 7,3 mld. Kč ročně a dřívější vstup absolventů na trh práce přinese dalších 6,9 až 9,2 mld. Kč. Sladíme se se standardy zemí OECD.",
      2: "Stát získá tvrdá data o tom, jak školy reálně fungují – a základ pro optimalizaci sítě škol, která ušetří miliardy.",
      3: "Celoplošná zkouška odstraní regionální nerovnosti přijímacího řízení a dá státu data o přidané hodnotě škol.",
      4: "Záchytný rámec Malé maturity snižuje předčasné odchody ze vzdělávání a šetří 0,3 až 0,4 mld. Kč ročně na dávkách.",
      5: "Racionální podpora znevýhodněných místo plošného modelu, který neúměrně zatěžuje rozpočty a snižuje efektivitu výuky.",
      6: "Menší nesoulad vzdělávání s trhem práce je přímou investicí do hospodářské konkurenceschopnosti země.",
      7: "Flexibilní kurikulum připraví Česko na éru umělé inteligence bez zdlouhavých změn zákonů.",
      8: "Slučování tisíců roztříštěných ředitelství do svazkových škol odstraní obrovskou administrativní neefektivitu.",
      9: "Celoživotní učení posiluje individuální odpovědnost občanů a udržuje pracovní sílu konkurenceschopnou.",
      10: "Peníze sledují žáka a jeho výkon. Školství přestane být bezednou dírou na veřejné peníze. Každý nový absolvent SŠ odvede za život o 2,3 až 2,8 mil. Kč více.",
    },
  },
];
