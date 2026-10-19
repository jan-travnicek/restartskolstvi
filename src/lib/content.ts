export type Measure = { n: number; t: string; d: string };
export type Pillar = { id: string; name: string; measures: Measure[] };

export const pillars: Pillar[] = [
  {
    id: "I",
    name: "Nová architektura a prostupnost",
    measures: [
      { n: 1, t: "Model 8+2", d: "Povinné vzdělávání prodlužujeme na 10 let: 8 let základní školy a povinné 2 roky na střední škole pro všechny děti." },
      { n: 2, t: "Vnitřní členění ZŠ 3+3+2", d: "Základní škola rozdělená do tří etap s ověřovacími uzly, které včas ukážou, kde dítě potřebuje podporu." },
      { n: 3, t: "Jednotná výstupní zkouška v 8. třídě", d: "Konec stresových přijímaček. Jedna výstupní zkouška na konci ZŠ místo drilování testů v 9. třídě." },
      { n: 4, t: "Malá a Velká maturita", d: "Univerzální profil absolventa: Velká maturita jako plynulá cesta pro většinu, Malá maturita jako záchranná síť a sociální výtah." },
    ],
  },
  {
    id: "II",
    name: "Kvalita, praxe a podpora talentu",
    measures: [
      { n: 5, t: "Racionální revize inkluze", d: "Průchozí třídy a mobilní krizové týmy po vzoru Finska místo pasivních asistentů." },
      { n: 6, t: "Profesionální kariérové poradenství", d: "Odborné poradenství, které pomůže dětem i rodičům zvolit cestu bez předčasného rozhodování o povolání." },
      { n: 7, t: "Modulární výuka s mikrocertifikáty", d: "Moduly tvořené ve spolupráci s firmami, které rychle reagují na technologický vývoj a AI." },
      { n: 8, t: "Individuální vzdělávací účty", d: "Celoživotní „Multisportka pro vzdělávání“ – peníze na další vzdělávání v rukou člověka." },
    ],
  },
  {
    id: "III",
    name: "Efektivní řízení a finance",
    measures: [
      { n: 9, t: "Zrušení PHmax", d: "Návrat k normativu: peníze následují dítě a jeho úspěch, ne odučené hodiny." },
      { n: 10, t: "Optimalizace sítě škol", d: "Svazkové školy, oddělení pedagogického vedení od správy budov a konec přežité spádovosti." },
    ],
  },
];

export const timeline = [
  { age: "6–9 let", t: "1. etapa ZŠ", d: "První tři roky, ověřovací uzel." },
  { age: "9–12 let", t: "2. etapa ZŠ", d: "Další tři roky, ověřovací uzel." },
  { age: "12–14 let", t: "3. etapa ZŠ", d: "Poslední dva roky, jednotná výstupní zkouška v 8. třídě." },
  { age: "14–16 let", t: "Povinné 2 roky SŠ", d: "Všeobecný základ, čas na dozrání, možnost změnit školu bez ztráty roku." },
  { age: "16–18 let", t: "Malá nebo Velká maturita", d: "Cesta podle schopností a zájmů dítěte." },
];
