import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero, Section, meta } from "@/components/site";
import { pillars } from "@/lib/content";
import { audiences, audienceIds, type AudienceId } from "@/lib/audiences";

export const Route = createFileRoute("/pro-koho")({
  validateSearch: (s: Record<string, unknown>): { skupina: AudienceId } => ({
    skupina: audienceIds.includes(s.skupina as AudienceId) ? (s.skupina as AudienceId) : "rodice",
  }),
  head: () => meta("Co mi Reforma 8PLUS2 přinese?", "Reforma 8PLUS2 z pohledu rodičů a žáků, ředitelů a starostů, zaměstnavatelů i celého Česka."),
  component: Page,
});

function Page() {
  const { skupina } = Route.useSearch();
  const a = audiences.find((x) => x.id === skupina)!;
  return (
    <>
      <PageHero kicker={`Pro koho · ${a.label}`} title={<>{a.title[0]}<br /><span className="text-mint">{a.title[1]}</span></>} lead={a.lead} />
      <div className="mx-auto flex max-w-7xl flex-wrap gap-3 px-6 md:px-16">
        {audiences.map((x) => (
          <Link key={x.id} to="/pro-koho" search={{ skupina: x.id }}
            className={`rounded-sm px-4 py-2 font-bold ${x.id === a.id ? "bg-mint text-navy" : "border border-foreground/40 hover:text-mint"}`}>
            {x.label}
          </Link>
        ))}
      </div>
      {pillars.map((p) => (
        <Section key={p.id} kicker={`Pilíř ${p.id}`} title={p.name}>
          <ol className="grid gap-10 md:grid-cols-2">
            {p.measures.map((m) => (
              <li key={m.n} className="border-t-2 border-mint pt-6">
                <p className="display text-5xl text-mint">{String(m.n).padStart(2, "0")}</p>
                <h3 className="mt-3 text-2xl font-extrabold">{m.t}</h3>
                <p className="mt-3 text-lg leading-relaxed">{a.measures[m.n]}</p>
                <Link to="/opatreni/$slug" params={{ slug: m.slug }} className="mt-4 inline-block font-bold hover:text-mint">
                  <span className="text-mint">→</span> Detail opatření
                </Link>
              </li>
            ))}
          </ol>
        </Section>
      ))}
    </>
  );
}
