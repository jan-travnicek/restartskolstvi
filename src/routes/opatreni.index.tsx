import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero, Section, meta } from "@/components/site";
import { pillars, timeline } from "@/lib/content";

export const Route = createFileRoute("/opatreni/")({
  head: () => meta("10 opatření Reformy 8PLUS2", "Tři pilíře a deset opatření reformy školství: model 8+2, cykly 3+3+2, Malá a Velká maturita, revize inkluze, konec PHmax a další."),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero kicker="Srdce reformy" title={<>Architektura <span className="text-mint">8+2</span></>} lead="Tři pilíře, deset opatření. Klíčová slova: modularita, prostupnost, flexibilita." />
      {pillars.map((p) => (
        <Section key={p.id} kicker={`Pilíř ${p.id}`} title={p.name}>
          <p className="-mt-6 mb-10 max-w-3xl text-xl font-bold">{p.goal}</p>
          <div className="grid gap-4 md:grid-cols-2">
            {p.measures.map((m) => (
              <Link key={m.n} to="/opatreni/$slug" params={{ slug: m.slug }} className="group flex gap-6 bg-navy/50 p-8 transition-colors hover:bg-navy/80">
                <span className="display text-5xl text-mint">{String(m.n).padStart(2, "0")}</span>
                <span className="flex-1">
                  <span className="block text-2xl font-extrabold">{m.t}</span>
                  <span className="mt-2 block text-muted-foreground">{m.short}</span>
                  <span className="mt-4 block font-bold text-mint">→ Detail opatření</span>
                </span>
              </Link>
            ))}
          </div>
        </Section>
      ))}
      <Section kicker="Cesta dítěte" title={<>Od <span className="text-mint">6</span> do <span className="text-mint">18</span> let</>}>
        <ol className="grid gap-8 md:grid-cols-5">
          {timeline.map((s) => (
            <li key={s.age} className="border-t-2 border-mint pt-6">
              <p className="display text-3xl text-mint">{s.age}</p>
              <p className="mt-2 text-xl font-extrabold">{s.t}</p>
              <p className="mt-2 text-muted-foreground">{s.d}</p>
            </li>
          ))}
        </ol>
      </Section>
    </>
  );
}
