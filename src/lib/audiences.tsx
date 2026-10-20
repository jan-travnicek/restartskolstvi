import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type AudienceId = "rodice" | "reditele" | "zamestnavatele" | "cesko";

export const audiences: { id: AudienceId; label: string; short: string }[] = [
  { id: "rodice", label: "Rodiče a žáci", short: "rodiče a žáky" },
  { id: "reditele", label: "Ředitelé a starostové", short: "ředitele a starosty" },
  { id: "zamestnavatele", label: "Zaměstnavatelé", short: "zaměstnavatele" },
  { id: "cesko", label: "Česko", short: "celou zemi" },
];

export const DEFAULT_AUDIENCE: AudienceId = "rodice";

type Ctx = { audience: AudienceId; setAudience: (a: AudienceId) => void };
const AudienceContext = createContext<Ctx>({ audience: DEFAULT_AUDIENCE, setAudience: () => {} });
const KEY = "reforma-audience";

export function AudienceProvider({ children }: { children: ReactNode }) {
  const [audience, setAudienceState] = useState<AudienceId>(DEFAULT_AUDIENCE);
  useEffect(() => {
    const saved = window.localStorage.getItem(KEY) as AudienceId | null;
    if (saved && audiences.some((a) => a.id === saved)) setAudienceState(saved);
  }, []);
  const setAudience = (a: AudienceId) => {
    setAudienceState(a);
    window.localStorage.setItem(KEY, a);
  };
  return <AudienceContext.Provider value={{ audience, setAudience }}>{children}</AudienceContext.Provider>;
}

export const useAudience = () => useContext(AudienceContext);

type ByAudience<T> = Record<AudienceId, T>;

/** Úvodní blok „Úvodem“ */
export const intro: ByAudience<{ head: ReactNode; lead: string; body: string }> = {
  rodice: {
    head: <>Dětem nebereme dětství. Dáváme jim <span className="text-mint">smysluplný start do života</span></>,
    lead: "Místo deváté třídy, která je dnes jen čekárnou na přijímačky, dostane každé dítě dva roky všeobecného základu na střední škole – v dospělejším prostředí, s možností změnit směr bez ztráty roku.",
    body: "Konec přijímačkového stresu, jasné milníky v podobě Malé a Velké maturity a ochrana před tím, aby dítě vypadlo ze školy bez jakékoli kvalifikace. Reforma vrací škole řád, podporuje talent a pomáhá dětem včas najít, co je baví a čím se uživí.",
  },
  reditele: {
    head: <>Ředitel jako <span className="text-mint">pedagogický lídr</span>, ne správce kotelny</>,
    lead: "Rozvazujeme ruce zřizovatelům i ředitelům. Cykly 3+3+2 umožní obcím modelovat školskou síť podle lokální demografie a svazkové školy ušetří peníze za administrativu.",
    body: "Ředitelé získají rozhodovací pravomoci u inkluze, tvrdá data o výsledcích své školy a financování, které odměňuje kvalitu místo počtu odučených hodin. Budovy pro malé děti v obcích zůstávají, slučujeme jen ředitelství a byrokracii.",
  },
  zamestnavatele: {
    head: <>Školství konečně vyprodukuje lidi s <span className="text-mint">kvalifikací, kterou trh potřebuje</span></>,
    lead: "60–80 tisíc mladých lidí vstoupí každý rok na trh práce o rok dříve – a s ověřenou kvalifikací. Firmy se přímo zapojí do tvorby vzdělávacích modulů, mikrocertifikátů a povinných stáží.",
    body: "Končíme s dotováním oborů, které produkují nezaměstnané. Kariéroví poradci propojení s praxí, modulární kurikulum reagující na nástup AI a silný všeobecný základ i u učňů zvýší adaptabilitu absolventů i konkurenceschopnost české ekonomiky.",
  },
  cesko: {
    head: <>Mozky našich lidí jsou <span className="text-mint">jedinou strategickou surovinou</span></>,
    lead: "Česká republika definitivně vyčerpala svůj model růstu založený na levné práci a energiích. Naší jedinou skutečnou a strategickou surovinou pro éru umělé inteligence jsou mozky našich lidí. Přesto stát stále plýtvá lidským kapitálem i veřejnými prostředky v systému, který ustrnul v devadesátých letech.",
    body: "Předkládáme ucelenou architekturu 10 klíčových opatření rozdělených do tří strategických pilířů – konkrétní, daty podloženou mapu kroků, která zkrátí neefektivní pobyt mladých lidí ve vzdělávacím systému, propojí školy s reálnou ekonomikou a zastaví plýtvání veřejnými penězi.",
  },
};

/** Diagnóza – proč model 9+0 selhává */
export const diagnosis: ByAudience<{ t: string; d: string }[]> = {
  rodice: [
    { t: "Devítka jako čekárna", d: "Devátá třída se stala jen místem pro drilování testů Cermat. Děti tráví rok stresem z přijímaček místo smysluplného učení." },
    { t: "Volba naslepo", d: "Žáci si vybírají školu bez vazby na realitu. 40 % absolventů odborných škol pak nepracuje ve svém oboru." },
    { t: "Inkluze, která nefunguje", d: "80 % rodičů nesouhlasí s nastavením současné inkluze. Plošný model brzdí výuku většiny a znevýhodněným dětem reálně nepomáhá." },
  ],
  reditele: [
    { t: "Roztříštěná síť", d: "Tisíce zřizovatelů a ředitelství generují obrovskou administrativní zátěž. Ředitel místo pedagogiky řeší účetnictví a údržbu." },
    { t: "Financování za hodiny", d: "Model PHmax platí za odučené hodiny, ne za výsledky. Rozpočet se za dekádu zdvojnásobil, kvalita se nezlepšila." },
    { t: "Inkluze bez pravomocí", d: "65 % pedagogů nevěří v přínos současné inkluze. Ředitelé nemají nástroje, jak podporu dětí organizovat efektivně." },
  ],
  zamestnavatele: [
    { t: "Mismatch na trhu práce", d: "40 % absolventů odborných škol nepracuje ve svém oboru. Stát dotuje obory, které produkují nezaměstnané." },
    { t: "Ztracený lidský potenciál", d: "Přes 30 000 středoškoláků ročně předčasně opouští studium bez kvalifikace. Firmám chybějí lidé." },
    { t: "Rigidní obsah", d: "Pevné rámcové programy nedokážou reagovat na nástup AI a technologické změny. Úprava obsahu trvá roky." },
  ],
  cesko: [
    { t: "Ekonomická černá díra", d: "Rozpočet školství se za dekádu zdvojnásobil, ale kvůli financování „za odučené hodiny“ (PHmax) a neřízené inkluzi se kvalita výuky nezlepšila." },
    { t: "Ztracený lidský potenciál", d: "Až 10 % žáků nedokončí ZŠ, přes 30 000 středoškoláků ročně předčasně opouští studium a 40 % absolventů odborných škol nepracuje ve svém oboru." },
    { t: "Systém v klinické smrti", d: "65 % pedagogů nevěří v přínos současné inkluze a 80 % rodičů nesouhlasí s jejím nastavením. Devátá třída se stala jen místem pro drilování testů Cermat." },
  ],
};

/** Cíle pilířů podle cílové skupiny (klíč = id pilíře) */
export const pillarGoals: ByAudience<Record<string, string>> = {
  rodice: {
    I: "Žádné slepé uličky: dítě může změnit směr bez ztráty roku a vždy získá certifikát, se kterým obstojí.",
    II: "Škola, kde se dá v klidu učit – s podporou pro ty, kdo ji potřebují, i pro talenty.",
    III: "Peníze jdou za vaším dítětem a kvalitou výuky, ne za prázdnými místy.",
  },
  reditele: {
    I: "Flexibilní architektura, kterou si obec přizpůsobí demografii a prostorovým možnostem.",
    II: "Více pravomocí ředitelů, racionální inkluze a obsah, který lze inovovat bez změny zákona.",
    III: "Méně administrativy, profesionální management a financování, které motivuje ke kvalitě.",
  },
  zamestnavatele: {
    I: "Kvalifikovaní absolventi na trhu práce o rok dříve – s ověřeným všeobecným základem.",
    II: "Škola propojená s firmami: stáže, kariéroví poradci a moduly od zaměstnavatelů.",
    III: "Konec dotování oborů bez uplatnění, celoživotní vzdělávání pro rekvalifikace.",
  },
  cesko: {
    I: "Odstranit slepé uličky v systému, zefektivnit vzdělávací dráhu a snížit věk vstupu na trh práce.",
    II: "Vrátit do školství řád, podporu excelence a racionální péči o znevýhodněné.",
    III: "Systém, kde peníze motivují ke kvalitě a odpovědnosti. Konec plýtvání.",
  },
};

/** Krátký popis + „co to pro vás znamená“ ke každému opatření (klíč = slug) */
export const measureCopy: ByAudience<Record<string, { short: string; you: string }>> = {
  rodice: {
    "model-8-2": { short: "Místo deváté třídy dva roky na střední pro všechny děti.", you: "Vaše dítě nebude rok čekat na přijímačky. Na střední škole dostane dva roky všeobecného základu, čas dozrát a možnost změnit směr, pokud mu původní volba nesedne – bez ztráty roku." },
    "cykly-3-3-2": { short: "Tři přehledné etapy školy, které lépe odpovídají vývoji dítěte.", you: "Škola se dělí na etapy 1.–3., 4.–6. a 7.–8. ročník. Na konci každé se ověří, jak dítěti učení jde – případné problémy se odhalí včas, ne až před přijímačkami." },
    "jednotna-vystupni-zkouska": { short: "Konec přijímačkového traumatu – jedna férová zkouška v 8. třídě.", you: "Místo stresujících a nespravedlivých přijímaček jedna srozumitelná výstupní zkouška pro všechny. Stejná pravidla v celé republice, bez ohledu na to, kde bydlíte." },
    "mala-a-velka-maturita": { short: "Záchranná síť i jasná cesta: Malá maturita po dvou letech, Velká k vysoké škole.", you: "Žádné dítě neodejde ze školy s prázdnou. Malá maturita po dvou letech střední je pojistka a vstupenka na trh práce, Velká maturita otevírá cestu na vysokou školu." },
    "revize-inkluze": { short: "Klidnější třídy a skutečná pomoc dětem, které ji potřebují.", you: "Podpora znevýhodněných dětí zůstává, ale v účinnější podobě – průchozí třídy a specializované skupiny. Výuka se nebude brzdit a každé dítě dostane péči, která mu reálně pomůže." },
    "profesni-navigace": { short: "Kariérový poradce a stáže pomohou dítěti vybrat školu, která má budoucnost.", you: "Vaše dítě si nebude vybírat školu naslepo. Kariérový poradce a povinné stáže ve firmách mu ukážou, co ho baví a čím se reálně uživí." },
    "modularni-vyuka": { short: "Výuka šitá na míru – dítě si skládá obsah podle svých zájmů.", you: "Dítě si bude moci vybírat z modulů podle svého talentu a zájmů, včetně moderních témat jako umělá inteligence. Škola tak drží krok s dobou." },
    "optimalizace-site-skol": { short: "Škola pro malé děti zůstává v obci, ředitel se věnuje výuce.", you: "Budovy pro menší děti v obcích zůstávají. Slučují se jen ředitelství a administrativa, takže ředitel má víc času na kvalitu výuky vašeho dítěte." },
    "vzdelavaci-ucty": { short: "Vzdělávací účet, který dítě provází od školy až po dospělost.", you: "Každé dítě získá vzdělávací účet, kam se zapisují kurzy, certifikáty a dovednosti. Bude ho provázet celý život a pomůže mu i při pozdějších změnách práce." },
    "zruseni-phmax": { short: "Peníze půjdou za vaším dítětem, ne za odučenými hodinami.", you: "Financování bude sledovat žáka a kvalitu jeho vzdělávání. Školy budou motivovány dítě skutečně něco naučit, ne jen odučit hodiny." },
  },
  reditele: {
    "model-8-2": { short: "Uvolněné kapacity 9 500 učitelů tam, kde dnes chybějí.", you: "Zrušení deváté třídy uvolní zhruba 9 500 kvalifikovaných učitelů pro místa, kde dnes kriticky chybějí. Střední školy získají žáky dva roky dříve a prostor pro jejich profilaci." },
    "cykly-3-3-2": { short: "Moduly, které si obec přizpůsobí demografii a prostorům.", you: "Cykly 3+3+2 umožní například spojit MŠ s prvním cyklem nebo třetí cyklus se střední školou. Zřizovatel si modeluje síť podle lokálních potřeb a ředitel získá tvrdá data o výsledcích." },
    "jednotna-vystupni-zkouska": { short: "Objektivní data o přidané hodnotě vaší školy.", you: "Jednotná zkouška na konci 8. ročníku dá ředitelům i zřizovatelům srovnatelná data o přidané hodnotě školy – podklad pro řízení, ne další byrokracii." },
    "mala-a-velka-maturita": { short: "Jasné milníky a vyšší prestiž odborného školství.", you: "Malá maturita po dvou letech střední školy dává školám jasný cíl a prestiž učňovským oborům. Méně předčasných odchodů znamená stabilnější počty žáků." },
    "revize-inkluze": { short: "Rozhodovací pravomoc ředitele a průchozí třídy místo plošného modelu.", you: "Ředitel získá skutečné pravomoci při organizaci podpory. Průchozí třídy, specializované skupiny a mobilní krizové týmy nahradí neefektivní plošný model a uleví rozpočtu školy." },
    "profesni-navigace": { short: "Kariérový poradce jako systémová pozice na každé škole.", you: "Pozice kariérového poradce bude institucionalizována a škola získá rámec pro partnerství s firmami a povinné stáže žáků." },
    "modularni-vyuka": { short: "Volnost upravovat obsah bez čekání na změnu zákona.", you: "Rozvolnění rámcových programů dá škole možnost rychle inovovat obsah a nabízet moduly od externích partnerů – bez zdlouhavých legislativních změn." },
    "optimalizace-site-skol": { short: "Svazkové školy ušetří obcím peníze na administrativě.", you: "Slučování ředitelství do logických celků, sdílené účetnictví a oddělení pedagogického vedení od správy budov. Budovy v obcích zůstávají, ubude byrokracie." },
    "vzdelavaci-ucty": { short: "Škola jako místo celoživotního vzdělávání v regionu.", you: "Vzdělávací účty otevírají školám možnost nabízet kurzy i dospělým a stát se centrem vzdělávání v obci či regionu." },
    "zruseni-phmax": { short: "Konec PHmax: financování, které odměňuje kvalitu.", you: "Místo platby za odučené hodiny půjdou peníze za žákem a jeho výsledky. Ředitelé získají předvídatelný rozpočet a motivaci řídit kvalitu, ne vykazovat hodiny." },
  },
  zamestnavatele: {
    "model-8-2": { short: "60–80 tisíc kvalifikovaných lidí na trhu práce o rok dříve.", you: "Zkrácení neefektivní doby ve škole pošle každý rok desítky tisíc mladých lidí do práce o rok dříve – s ověřeným všeobecným i odborným základem. Silná odpověď na nedostatek pracovních sil." },
    "cykly-3-3-2": { short: "Včasná diagnostika talentů už na základní škole.", you: "Ověřovací uzly po každém cyklu odhalí silné i slabé stránky žáků dřív. Do odborného vzdělávání pak přicházejí lépe připravení lidé." },
    "jednotna-vystupni-zkouska": { short: "Srovnatelný standard kompetencí pro všechny absolventy ZŠ.", you: "Celostátní výstupní zkouška zaručí jednotnou úroveň základních dovedností – čitelný signál o tom, co absolvent umí." },
    "mala-a-velka-maturita": { short: "Malá maturita jako certifikát, kterému firmy rozumějí.", you: "Malá maturita potvrdí funkční gramotnosti každého absolventa a slouží jako vstupenka na trh práce. Řemeslníci získají i silný všeobecný základ, který zvyšuje jejich adaptabilitu." },
    "revize-inkluze": { short: "Efektivnější výuka, která neztrácí potenciál většiny ani talentů.", you: "Racionální podpora znevýhodněných a důraz na excelenci znamenají vyšší kvalitu výstupu pro celou populaci – tedy lepší budoucí zaměstnance." },
    "profesni-navigace": { short: "Přímé propojení škol s firmami a povinné stáže.", you: "Firmy se stanou partnerem škol: povinné stáže, kariéroví poradci propojení s praxí a cílené snížení nesouladu mezi absolventy a poptávkou trhu." },
    "modularni-vyuka": { short: "Firmy přímo vstupují do tvorby vzdělávacích modulů.", you: "Zaměstnavatelé budou moci nabízet vlastní moduly a mikrocertifikáty. Obsah výuky tak rychle reaguje na technologie a AI, bez čekání na změnu zákonů." },
    "optimalizace-site-skol": { short: "Profesionálně řízené školy jako spolehliví partneři.", you: "Silnější a profesionálně řízené školní celky jsou pro firmy stabilnějším partnerem pro dlouhodobou spolupráci." },
    "vzdelavaci-ucty": { short: "Celoživotní vzdělávací účet pro rekvalifikace zaměstnanců.", you: "Každý občan bude mít virtuální vzdělávací účet. Zaměstnavatelé jej mohou využít pro prohlubování kvalifikace a rekvalifikace svých lidí." },
    "zruseni-phmax": { short: "Konec dotování oborů, které produkují nezaměstnané.", you: "Peníze sledují studenta a jeho výkon. Obory bez uplatnění přestanou být uměle drženy a prostředky se přesunou tam, kde trh potřebuje lidi." },
  },
  cesko: {
    "model-8-2": { short: "Úspora 3 až 7,3 mld. Kč ročně a sladění se standardy OECD.", you: "Zrušení neefektivní deváté třídy ušetří veřejným rozpočtům 3 až 7,3 mld. Kč ročně a dřívější vstup absolventů na trh práce přinese dalších 6,9 až 9,2 mld. Kč na daních a odvodech." },
    "cykly-3-3-2": { short: "Řízení školství na základě dat místo dojmů.", you: "Ověřovací uzly dají státu tvrdá data o tom, jak školy reálně fungují, a otevřou cestu k optimalizaci sítě, která ušetří miliardy z neefektivně alokovaných kapacit." },
    "jednotna-vystupni-zkouska": { short: "Konec regionálních nerovností v přístupu ke vzdělání.", you: "Jednotná výstupní zkouška nahradí chaos přijímacího řízení a dá státu data o přidané hodnotě jednotlivých škol." },
    "mala-a-velka-maturita": { short: "Prevence ekonomických ztrát z předčasných odchodů bez kvalifikace.", you: "Záchytný rámec Malé maturity sníží předčasné odchody ze vzdělávání a ušetří 0,3 až 0,4 mld. Kč ročně na sociálních dávkách. Každý nový absolvent SŠ odvede za život o 2,3 až 2,8 mil. Kč více." },
    "revize-inkluze": { short: "Od ideologie k racionální podpoře, která nezatěžuje rozpočet.", you: "Zastavujeme plošný model, který neúměrně zatěžuje rozpočty a snižuje efektivitu výuky. Princip podpory znevýhodněných zachováváme, měníme jeho formu." },
    "profesni-navigace": { short: "Investice do hospodářské konkurenceschopnosti země.", you: "Snížení nesouladu mezi absolventy a potřebami trhu je přímou investicí do konkurenceschopnosti české ekonomiky." },
    "modularni-vyuka": { short: "Vzdělávání připravené na éru umělé inteligence.", you: "Modulární kurikulum umožní systému neustále inovovat obsah a reagovat na disruptivní technologické změny bez zdlouhavých změn zákonů." },
    "optimalizace-site-skol": { short: "Méně byrokracie u tisíců zřizovatelů.", you: "Motivace ke slučování ředitelství a profesionální management sníží administrativní zátěž a uvolní prostředky pro samotnou výuku." },
    "vzdelavaci-ucty": { short: "Osobní odpovědnost občana za svůj růst – od školy do důchodu.", you: "Virtuální vzdělávací účet podpoří celoživotní učení, rekvalifikace a odolnost pracovní síly vůči změnám trhu." },
    "zruseni-phmax": { short: "Konec plýtvání: peníze sledují studenta a jeho výkon.", you: "Financování podle odučených hodin nahradí model, kde peníze motivují ke kvalitě a odpovědnosti. Konec dotování prázdných míst." },
  },
};

/** Přínosy pro stránku „Pro koho“ */
export const benefits: ByAudience<string[]> = {
  rodice: [
    "Konec přijímačkového traumatu – jedna výstupní zkouška v 8. třídě.",
    "Dva roky všeobecného základu na SŠ: čas na dozrání a možnost změnit školu bez ztráty roku.",
    "Pro většinu plynulá cesta k Velké maturitě, pro slabší záchranná síť Malé maturity a sociální výtah.",
  ],
  reditele: [
    "Ředitel jako pedagogický lídr s rozhodovací pravomocí u inkluze, ne údržbář kotelny.",
    "Svazkové školy ušetří obcím náklady na administrativu.",
    "Moduly 3+3+2 umožní reagovat na demografii – např. spojení MŠ s 1. stupněm a chytrá školní doprava pro starší žáky.",
  ],
  zamestnavatele: [
    "Přímý vstup firem do tvorby vzdělávacích modulů a mikrocertifikátů.",
    "Konec dotování oborů, které produkují nezaměstnané.",
    "Desítky tisíc kvalifikovaných lidí na trhu práce o rok dříve.",
  ],
  cesko: [
    "+9,3 až +16,2 mld. Kč ročně pro veřejné rozpočty už v konzervativním scénáři.",
    "Odpověď na stárnutí populace a chronický nedostatek pracovních sil.",
    "Vzdělávací systém sladěný se standardy vyspělých zemí OECD a připravený na éru AI.",
  ],
};
