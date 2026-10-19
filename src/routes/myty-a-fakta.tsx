import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section, meta } from "@/components/site";

export const Route = createFileRoute("/myty-a-fakta")({
  head: () => meta("Mýty vs. fakta o Reformě 8PLUS2", "Odpovědi na nejčastější mýty o reformě školství: délka vzdělávání, inkluze a vesnické školy."),
  component: Page,
});

const items = [
  { m: "8+2 zkracuje vzdělávání a bere dětem dětství.", f: "Povinné vzdělávání naopak prodlužujeme z 9 na 10 let (8+2), jen rušíme neefektivní čekárnu v 9. třídě." },
  { m: "Rušíte inkluzi a segregujete děti.", f: "Inkluzi nerušíme, ale racionalizujeme. Místo pasivních asistentů zavádíme průchozí třídy a mobilní krizové týmy po vzoru Finska nebo Estonska." },
  { m: "Optimalizace sítě znamená rušení vesnických škol.", f: "Fyzické budovy pro menší děti v obcích zůstávají, slučujeme pouze ředitelství a zbytečnou administrativu." },
];

function Page() {
  return (
    <>
      <PageHero kicker="Bez strašení" title={<>Mýty <span className="text-mint">vs.</span> fakta</>} />
      <Section>
        <div className="space-y-4">
          {items.map((i) => (
            <div key={i.m} className="grid gap-px bg-foreground/15 md:grid-cols-2">
              <div className="bg-navy/70 p-8">
                <p className="font-semibold uppercase tracking-widest text-muted-foreground">Mýtus</p>
                <p className="mt-3 text-2xl font-bold">„{i.m}“</p>
              </div>
              <div className="bg-navy/40 p-8">
                <p className="font-semibold uppercase tracking-widest text-mint">Fakt</p>
                <p className="mt-3 text-2xl font-extrabold">{i.f}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
