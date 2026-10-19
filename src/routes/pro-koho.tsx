import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section, meta } from "@/components/site";

export const Route = createFileRoute("/pro-koho")({
  head: () => meta("Co mi Reforma 8PLUS2 přinese?", "Konkrétní dopady reformy školství pro rodiče a žáky, ředitele a starosty i zaměstnavatele."),
  component: Page,
});

const groups = [
  {
    who: "Rodiče a žáci",
    points: [
      "Konec přijímačkového traumatu – jedna výstupní zkouška v 8. třídě.",
      "Dva roky všeobecného základu na SŠ: čas na dozrání a možnost změnit školu bez ztráty roku.",
      "Pro většinu plynulá cesta k Velké maturitě, pro slabší záchranná síť Malé maturity a sociální výtah.",
    ],
  },
  {
    who: "Ředitelé a starostové",
    points: [
      "Ředitel jako pedagogický lídr s rozhodovací pravomocí u inkluze, ne údržbář kotelny.",
      "Svazkové školy ušetří obcím náklady na administrativu.",
      "Moduly 3+3+2 umožní reagovat na demografii – např. spojení MŠ s 1. stupněm a chytrá školní doprava pro starší žáky.",
    ],
  },
  {
    who: "Zaměstnavatelé",
    points: [
      "Přímý vstup firem do tvorby vzdělávacích modulů a mikrocertifikátů.",
      "Konec dotování oborů, které produkují nezaměstnané.",
      "Desítky tisíc kvalifikovaných lidí na trhu práce o rok dříve.",
    ],
  },
];

function Page() {
  return (
    <>
      <PageHero kicker="Pro koho" title={<>Co reforma<br /><span className="text-mint">přinese mně?</span></>} />
      {groups.map((g) => (
        <Section key={g.who} title={g.who}>
          <ul className="grid gap-8 md:grid-cols-3">
            {g.points.map((p) => (
              <li key={p} className="border-t-2 border-mint pt-6 text-xl font-semibold leading-snug">{p}</li>
            ))}
          </ul>
        </Section>
      ))}
    </>
  );
}
