import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section, meta } from "@/components/site";

export const Route = createFileRoute("/data")({
  head: () => meta("Data místo dojmů – Reforma 8PLUS2", "Studie CETA a výstupy PAQ Research ke stažení. Srovnání vize ODS a přístupu ANO."),
  component: Page,
});

const studies = [
  { name: "CETA", full: "Centrum ekonomických a tržních analýz", d: "Kompletní ekonomická analýza Reformy 8PLUS2." },
  { name: "PAQ Research", full: "Výstupy PAQ Research", d: "Data o stavu českého vzdělávání." },
];

const compare = [
  ["Model", "8+2 – povinné vzdělávání 10 let", "9+0, případně tupé škrty 8+0"],
  ["Peníze", "Investice s vyčíslenou návratností (ROI)", "Lití miliard do černé díry"],
  ["Financování škol", "Normativ – peníze následují dítě", "PHmax – placení odučených hodin"],
  ["Rozhodování", "Data a analýzy", "Byrokracie a „klid na práci“"],
];

function Page() {
  return (
    <>
      <PageHero kicker="Pro média a odborníky" title={<>Data místo<br /><span className="text-mint">dojmů</span></>} />
      <Section kicker="Ke stažení">
        <div className="grid gap-4 md:grid-cols-2">
          {studies.map((s) => (
            <div key={s.name} className="bg-navy/50 p-8">
              <p className="display text-5xl text-mint">{s.name}</p>
              <p className="mt-2 font-bold">{s.full}</p>
              <p className="mt-2 text-muted-foreground">{s.d}</p>
              <p className="mt-6 inline-block rounded bg-primary/20 px-4 py-2 font-bold text-mint">Soubor připravujeme</p>
            </div>
          ))}
        </div>
      </Section>
      <Section kicker="Srovnání" title={<>ODS <span className="text-mint">vs.</span> ANO</>}>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[640px] text-left text-lg">
            <thead>
              <tr className="border-b-2 border-mint">
                <th className="py-4 pr-6" />
                <th className="py-4 pr-6 text-2xl font-extrabold text-mint">Vize ODS</th>
                <th className="py-4 text-2xl font-extrabold text-muted-foreground">Přístup ANO</th>
              </tr>
            </thead>
            <tbody>
              {compare.map(([k, a, b]) => (
                <tr key={k} className="border-b border-foreground/15">
                  <td className="py-5 pr-6 font-semibold text-muted-foreground">{k}</td>
                  <td className="py-5 pr-6 font-bold">{a}</td>
                  <td className="py-5 text-muted-foreground">{b}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>
    </>
  );
}
