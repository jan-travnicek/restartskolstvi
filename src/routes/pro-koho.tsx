import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section, meta } from "@/components/site";
import { audiences, benefits, useAudience } from "@/lib/audiences";

export const Route = createFileRoute("/pro-koho")({
  head: () => meta("Co mi Reforma 8PLUS2 přinese?", "Konkrétní dopady reformy školství pro rodiče a žáky, ředitele a starosty i zaměstnavatele."),
  component: Page,
});

function Page() {
  const { audience } = useAudience();
  const label = audiences.find((a) => a.id === audience)!.label;
  return (
    <>
      <PageHero kicker="Pro koho" title={<>Co reforma<br /><span className="text-mint">přinese mně?</span></>} />
      <Section title={label}>
        <ul className="grid gap-8 md:grid-cols-3">
          {benefits[audience].map((p) => (
            <li key={p} className="border-t-2 border-mint pt-6 text-xl font-semibold leading-snug">{p}</li>
          ))}
        </ul>
      </Section>
    </>
  );
}
