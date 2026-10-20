import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section, meta } from "@/components/site";
import { useAudience } from "@/components/audience-provider";
import { audienceOptions } from "@/lib/content";

export const Route = createFileRoute("/verze-2/pro-koho")({
  head: () => meta("Verze 2 · Co mi Reforma 8PLUS2 přinese?", "Konkrétní dopady reformy školství pro rodiče a žáky, ředitele a starosty i zaměstnavatele."),
  component: Page,
});

function Page() {
  const { audience, copy } = useAudience();
  const selected = audienceOptions.find((option) => option.id === audience);
  return (
    <>
      <PageHero kicker={selected?.label ?? "Pro koho"} title={<>Co reforma<br /><span className="text-mint">přinese mně?</span></>} lead={copy.intro} />
        <Section title={selected?.label}>
          <ul className="grid gap-8 md:grid-cols-3">
            {copy.goals.map((p) => (
              <li key={p} className="border-t-2 border-mint pt-6 text-xl font-semibold leading-snug">{p}</li>
            ))}
          </ul>
        </Section>
        <Section kicker="Proč to potřebujeme?"><p className="max-w-3xl text-xl">{copy.why}</p></Section>
        <Section kicker="Co můžete udělat vy?"><p className="max-w-3xl text-xl">{copy.invitation}</p></Section>
    </>
  );
}
