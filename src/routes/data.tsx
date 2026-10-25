import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section, meta } from "@/components/site";
import { economics } from "@/lib/content";
import { useAudience } from "@/components/audience-provider";

export const Route = createFileRoute("/data")({
  head: () => meta("Data místo dojmů – Reforma 8PLUS2", "Studie CETA a výstupy PAQ Research ke stažení. Srovnání vize ODS a přístupu ANO."),
  component: Page,
});

const studies = [
  { name: "CETA", full: "Centrum ekonomických a tržních analýz", d: "Kompletní ekonomická analýza Reformy 8PLUS2." },
  { name: "PAQ Research", full: "Výstupy PAQ Research", d: "Data o stavu českého vzdělávání." },
];

const compare = [
  ["Model", "8+2 – povinné vzdělávání 10 let", "9+0 - škola bez základní profesní kvalifikace"],
  ["Peníze", "Investice s vyčíslenou návratností (ROI)", "Další desítky miliard v neefektivním systému"],
  ["Financování škol", "Normativ – peníze následují dítě", "PHmax – placení odučených hodin bez efektu"],
  ["Rozhodování", "Data, analýzy, jasné cíle", "Byrokracie, dojmy, klid na práci"],
];

function Page() {
  const { copy } = useAudience();
  return (
    <>
      <PageHero kicker="Pro média a odborníky" title={<>Data místo<br /><span className="text-mint">dojmů</span></>} />
      <Section kicker="Ekonomické dopady" title={<>Reforma 8+2 <span className="text-mint">se vyplatí</span></>}>
        <p className="-mt-6 mb-12 max-w-3xl text-xl">{copy.dataLead}</p>
        <div className="grid gap-px bg-foreground/15 sm:grid-cols-2 lg:grid-cols-4">
          {economics.map((e) => (
            <div key={e.t} className="bg-navy/60 p-8">
              <p className="display text-4xl text-mint">{e.v}</p>
              <p className="mt-4 text-xl font-extrabold">{e.t}</p>
              <p className="mt-2 text-muted-foreground">{e.d}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 grid gap-8 bg-navy/70 p-10 md:grid-cols-2">
          <div>
            <p className="font-semibold uppercase tracking-widest text-mint">Celková roční bilance</p>
            <p className="mt-4 text-xl">Konzervativní scénář přinese veřejným rozpočtům okamžitý pozitivní impuls. V optimistickém scénáři jde o sumu přesahující 16,2 mld. Kč každý rok.</p>
          </div>
          <div className="flex items-end gap-8">
            <div><p className="text-sm font-semibold uppercase text-muted-foreground">Konzervativně</p><p className="display text-6xl text-mint">+9,3 mld.</p></div>
            <div><p className="text-sm font-semibold uppercase text-muted-foreground">Optimisticky</p><p className="display text-6xl">+16,2 mld.</p></div>
          </div>
        </div>
      </Section>
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
                <th className="py-4 text-2xl font-extrabold text-muted-foreground">Systém z devadesátých let</th>
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
