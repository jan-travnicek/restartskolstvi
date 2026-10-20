import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section, meta } from "@/components/site";
import { experts, history, nextSteps } from "@/lib/content";
import { useAudience } from "@/components/audience-provider";

export const Route = createFileRoute("/odborna-opora")({
  head: () => meta("Od konceptu k legislativě – Reforma 8PLUS2", "Tři roky konzultací s experty, časová osa příprav, další kroky a odborníci, kteří reformu 8+2 konzultovali."),
  component: Page,
});

function Steps({ items }: { items: { y: string; d: string }[] }) {
  return (
    <ol className="grid gap-8 md:grid-cols-4">
      {items.map((s, k) => (
        <li key={k} className="border-t-2 border-mint pt-6">
          <p className="display text-5xl text-mint">{s.y}</p>
          <p className="mt-3 text-lg">{s.d}</p>
        </li>
      ))}
    </ol>
  );
}

function Page() {
  const { copy } = useAudience();
  return (
    <>
      <PageHero
        kicker="Realizace a odborná opora"
        title={<>Od konceptu<br /><span className="text-mint">k legislativě</span></>}
        lead={copy.expertLead}
      />
      <Section kicker="Historie projektu" title="Jak jsme se připravovali"><Steps items={history} /></Section>
      <Section kicker="Vládní fáze" title="Další kroky"><Steps items={nextSteps} /></Section>
      <Section kicker="Konzultovali a podporují" title="Odborníci">
        <div className="grid gap-12 md:grid-cols-3">
          {experts.map((g) => (
            <div key={g.g}>
              <p className="text-2xl font-extrabold text-mint">{g.g}</p>
              <ul className="mt-6 space-y-3">
                {g.people.map((p) => <li key={p} className="text-lg">{p}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
