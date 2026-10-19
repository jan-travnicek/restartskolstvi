import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { meta } from "@/components/site";
import { allMeasures } from "@/lib/content";

export const Route = createFileRoute("/opatreni/$slug")({
  loader: ({ params }) => {
    const i = allMeasures.findIndex((m) => m.slug === params.slug);
    if (i < 0) throw notFound();
    return { i };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return { meta: [{ title: "Opatření nenalezeno" }, { name: "robots", content: "noindex" }] };
    const m = allMeasures[loaderData.i];
    return meta(`${m.n}. ${m.t} – Reforma 8PLUS2`, m.short);
  },
  component: Page,
});

function Page() {
  const { i } = Route.useLoaderData();
  const m = allMeasures[i]!;
  const prev = allMeasures[i - 1];
  const next = allMeasures[i + 1];
  return (
    <article className="mx-auto max-w-7xl px-6 pb-20 pt-12 md:px-16">
      <Link to="/opatreni" className="font-bold opacity-80 hover:opacity-100"><span className="text-mint">←</span> Všech 10 opatření</Link>
      <p className="mt-12 font-semibold uppercase tracking-widest text-mint">Pilíř {m.pillar.id} · {m.pillar.name}</p>
      <div className="mt-6 grid gap-10 md:grid-cols-[auto_1fr] md:items-end">
        <span className="display text-[clamp(8rem,18vw,16rem)] leading-[0.8] text-mint">{String(m.n).padStart(2, "0")}</span>
        <div>
          <h1 className="text-[clamp(3rem,7vw,6rem)]">{m.t}</h1>
          <p className="mt-4 text-2xl font-extrabold text-mint">{m.sub}</p>
        </div>
      </div>
      <div className="mt-16 max-w-3xl space-y-6 text-xl leading-relaxed">
        {m.body.map((p, k) => <p key={k} className={k === 0 ? "font-semibold" : "text-muted-foreground"}>{p}</p>)}
      </div>
      <nav className="mt-20 grid gap-4 border-t border-foreground/20 pt-10 md:grid-cols-2">
        {prev ? (
          <Link to="/opatreni/$slug" params={{ slug: prev.slug }} className="hover:text-mint">
            <span className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">Předchozí</span>
            <span className="mt-2 block text-2xl font-extrabold">← {prev.n}. {prev.t}</span>
          </Link>
        ) : <span />}
        {next && (
          <Link to="/opatreni/$slug" params={{ slug: next.slug }} className="hover:text-mint md:text-right">
            <span className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">Další</span>
            <span className="mt-2 block text-2xl font-extrabold">{next.n}. {next.t} →</span>
          </Link>
        )}
      </nav>
    </article>
  );
}
