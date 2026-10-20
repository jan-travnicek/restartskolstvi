export type EducationPath = "all" | "work" | "study" | "gymnasium";
export const educationStages = [
  { id: "preschool", title: "Mateřská škola", short: "MŠ", start: 3, end: 6, col: 1, span: 3, row: 6, rows: 1, kind: "early", qualification: "Předškolní vzdělávání", description: "Mateřská škola nebo dětská skupina. V šesti letech následuje vstup do základní školy.", focus: "Příprava na vstup do ZŠ", outcome: "Vstup do ZŠ · 6 let", paths: ["work", "study", "gymnasium"] },
  { id: "primary", title: "1. stupeň ZŠ", short: "3 roky", start: 6, end: 9, col: 4, span: 3, row: 6, rows: 1, kind: "basic", qualification: "1.–3. třída", description: "Adaptační období a základní kompetence k učení. První tříletý cyklus uzavírá ověřovací uzel v devíti letech.", focus: "Adaptace a základní kompetence k učení", outcome: "Uzlový bod č. 1 · 9 let", paths: ["work", "study", "gymnasium"] },
  { id: "middle", title: "2. stupeň ZŠ", short: "3 roky", start: 9, end: 12, col: 7, span: 3, row: 5, rows: 2, kind: "basic", qualification: "4.–6. třída", description: "Druhý tříletý cyklus se zaměřuje na obsah učiva a schopnost spolupráce. Ve dvanácti letech následuje druhý ověřovací uzel.", focus: "Obsah učiva a schopnost spolupráce", outcome: "Uzlový bod č. 2 · 12 let", paths: ["work", "study", "gymnasium"] },
  { id: "final", title: "3. stupeň ZŠ", short: "2 roky", start: 12, end: 14, col: 10, span: 2, row: 4, rows: 3, kind: "basic", qualification: "7.–8. třída", description: "Osobnostní rozvoj a postupná volba vzdělávacího směru. Jednotné výstupní testy uzavírají základní školu a tvoří třetí uzlový bod ve čtrnácti letech.", focus: "Osobnostní rozvoj a volba směru", outcome: "Uzlový bod č. 3 · 14 let", paths: ["work", "study"] },
  { id: "secondary", title: "Nižší SŠ", short: "+2", start: 14, end: 16, col: 12, span: 2, row: 4, rows: 3, kind: "secondary", qualification: "EQF 2 · ISCED 244", description: "Dva povinné roky střední školy přinášejí společný odborný základ příbuzných oborů a dílčí kvalifikace. Malá maturita ověřuje společný profil absolventa a funkční gramotnosti.", focus: "Společný odborný základ a dílčí kvalifikace", outcome: "Malá maturita · 16 let", paths: ["work", "study"] },
  { id: "vocational", title: "Nižší SŠ", short: "+3", start: 14, end: 17, col: 12, span: 3, row: 3, rows: 1, kind: "vocational", qualification: "EQF 3 · ISCED 353", description: "Tříletá středoškolská větev ve schématu zahrnuje společný základ a pokračuje užší specializací a odbornou kvalifikací. V sedmnácti letech ji uzavírá malá maturita s výučním listem.", focus: "Užší specializace a odborná kvalifikace", outcome: "Malá maturita s výučním listem · 17 let", paths: ["work"] },
  { id: "upper", title: "Vyšší SŠ", short: "+4", start: 14, end: 18, col: 12, span: 4, row: 2, rows: 1, kind: "upper", qualification: "EQF 4 · ISCED 344", description: "Čtyřletá středoškolská větev propojuje společný základ s užší specializací, odbornou kvalifikací a přípravou na vysokou školu. Velká maturita v osmnácti letech otevírá cestu k terciárnímu vzdělávání.", focus: "Specializace, kvalifikace a příprava na VŠ", outcome: "Velká maturita · 18 let", paths: ["study"] },
  { id: "gymnasium", title: "Víceletá gymnázia", short: "12 → 18", start: 12, end: 18, col: 10, span: 6, row: 1, rows: 1, kind: "upper", qualification: "Cesta k velké maturitě", description: "Samostatná cesta víceletých gymnázií je ve schématu zakreslena od dvanácti do osmnácti let. Směřuje k velké maturitě a navazujícímu studiu.", focus: "Příprava k dalšímu studiu", outcome: "Velká maturita · 18 let", paths: ["gymnasium"] },
] as const;

export const educationMilestones = [
  { age: 9, stage: "primary", label: "Uzel 1", detail: "Ověření prvního cyklu" },
  { age: 12, stage: "middle", label: "Uzel 2", detail: "Ověření druhého cyklu" },
  { age: 14, stage: "final", label: "Uzel 3", detail: "Jednotné výstupní testy a přechod na SŠ" },
  { age: 16, stage: "secondary", label: "Uzel 4", detail: "Malá maturita · evaluace povinného vzdělávání" },
] as const;

export function isOnEducationPath(stage: typeof educationStages[number], path: EducationPath) {
  return path === "all" || stage.paths.some((value) => value === path);
}