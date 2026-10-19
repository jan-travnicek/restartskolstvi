import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section, meta } from "@/components/site";

export const Route = createFileRoute("/aktuality")({
  head: () => meta("Aktuality a stínová vláda – Reforma 8PLUS2", "Články, tiskové zprávy, videa a pohled stínových ministrů ODS na reformu školství."),
  component: Page,
});

const ministers = [
  { n: "Jan Lipavský", a: "Národní bezpečnost a odolnost vůči dezinformacím" },
  { n: "Radim Ivan", a: "Rozvoj regionů a svazkové školy" },
  { n: "Jiří Havránek", a: "Trh práce a důchodový systém" },
  { n: "Pavel Drobil", a: "Průmysl a propojení s praxí" },
  { n: "Štěpán Slovák", a: "Duševní zdraví a revize inkluze" },
  { n: "Jan Skopeček", a: "Veřejné finance a konec PHmax" },
  { n: "Martin Kupka", a: "Moderní stát a vzdělávací účty" },
];

function Page() {
  return (
    <>
      <PageHero kicker="Aktuality" title={<>Pohled<br /><span className="text-mint">stínové vlády</span></>} />
      <Section kicker="Nejnovější">
        <p className="text-xl text-muted-foreground">Zatím zde nejsou žádné články. Brzy přidáme první výstupy.</p>
      </Section>
      <Section kicker="Reforma napříč resorty">
        <div className="grid gap-px bg-foreground/15 sm:grid-cols-2 lg:grid-cols-4">
          {ministers.map((m) => (
            <div key={m.n} className="bg-navy/50 p-8">
              <p className="text-xl font-extrabold">{m.n}</p>
              <p className="mt-2 text-muted-foreground">{m.a}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
