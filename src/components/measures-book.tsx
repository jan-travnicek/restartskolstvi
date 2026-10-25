import { useCallback, useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import type { Pillar } from "@/lib/content";

type Flip = { from: number; dir: 1 | -1 } | null;

export function MeasuresBook({ pillars }: { pillars: Pillar[] }) {
  const items = pillars.flatMap((p) => p.measures.map((m) => ({ ...m, pillar: p })));
  const [i, setI] = useState(0);
  const [flip, setFlip] = useState<Flip>(null);
  const touch = useRef<number | null>(null);
  const total = items.length;

  const go = useCallback(
    (next: number) => {
      if (flip || next === i || next < 0 || next >= total) return;
      setFlip({ from: i, dir: next > i ? 1 : -1 });
      setI(next);
      window.setTimeout(() => setFlip(null), 800);
    },
    [flip, i, total],
  );

  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") go(i + 1);
      if (e.key === "ArrowLeft") go(i - 1);
    };
    el.addEventListener("keydown", onKey);
    return () => el.removeEventListener("keydown", onKey);
  }, [go, i]);

  const m = items[i]!;
  const old = flip ? items[flip.from] : null;

  const Page = ({ item, n }: { item: (typeof items)[number]; n: number }) => (
    <div className="grid h-full md:grid-cols-[0.9fr_1.1fr]">
      <div className="relative flex flex-col justify-between overflow-hidden bg-royal p-8 text-foreground md:p-12">
        <span className="text-xs font-bold uppercase tracking-[0.3em] text-mint">Pilíř {item.pillar.id} · {item.pillar.name}</span>
        <span className="display pointer-events-none select-none text-[11rem] leading-none text-foreground/95 md:text-[16rem]">
          {String(n).padStart(2, "0")}
        </span>
        <span className="text-sm font-semibold text-foreground/70">Opatření {n} / {total}</span>
        <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-sky/30 blur-3xl" />
      </div>
      <div className="flex flex-col bg-card p-8 text-ink md:p-12">
        <h3 className="display text-4xl leading-[0.95] md:text-6xl">{item.t}</h3>
        <p className="mt-4 text-lg font-bold text-royal">{item.sub}</p>
        <p className="mt-6 line-clamp-6 text-lg leading-relaxed text-ink/70">{item.short}</p>
        <Link
          to="/verze-2/opatreni/$slug"
          params={{ slug: item.slug }}
          className="group mt-auto inline-flex w-fit items-center gap-3 rounded-full bg-ink px-7 py-4 pt-4 font-bold text-card transition-all hover:gap-5 hover:bg-royal"
        >
          Otevřít detail <ArrowUpRight className="h-5 w-5 transition-transform group-hover:rotate-45" />
        </Link>
      </div>
    </div>
  );

  return (
    <div
      ref={ref}
      tabIndex={0}
      aria-roledescription="kniha opatření"
      className="outline-none"
      onTouchStart={(e) => (touch.current = e.touches[0]?.clientX ?? null)}
      onTouchEnd={(e) => {
        if (touch.current == null) return;
        const dx = (e.changedTouches[0]?.clientX ?? touch.current) - touch.current;
        if (Math.abs(dx) > 50) go(i + (dx < 0 ? 1 : -1));
        touch.current = null;
      }}
    >
      <div className="relative [perspective:2400px]">
        {/* stacked page edges */}
        <div className="absolute inset-x-4 -bottom-3 h-full rounded-[2rem] bg-ink/10" />
        <div className="absolute inset-x-8 -bottom-6 h-full rounded-[2rem] bg-ink/5" />
        <div className="relative min-h-[34rem] overflow-hidden rounded-[2rem] shadow-[0_40px_80px_-40px_var(--ink)]" aria-live="polite">
          <div key={`base-${i}`} className="absolute inset-0 animate-[book-in_0.8s_ease-out]">
            <Page item={m} n={m.n} />
          </div>
          {old && (
            <div
              key={`flip-${flip!.from}-${i}`}
              className="absolute inset-0 [backface-visibility:hidden] [transform-style:preserve-3d]"
              style={{
                transformOrigin: flip!.dir === 1 ? "left center" : "right center",
                animation: `${flip!.dir === 1 ? "book-flip-next" : "book-flip-prev"} 0.8s cubic-bezier(.6,.05,.3,1) forwards`,
              }}
            >
              <Page item={old} n={old.n} />
              <div className="pointer-events-none absolute inset-0 animate-[book-shade_0.8s_ease-in_forwards] bg-gradient-to-r from-ink/0 via-ink/0 to-ink/40" />
            </div>
          )}
        </div>
      </div>

      <div className="mt-12 flex flex-wrap items-center justify-between gap-6">
        <div className="flex gap-3">
          <button onClick={() => go(i - 1)} disabled={i === 0} aria-label="Předchozí opatření" className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-ink/20 transition-all hover:border-royal hover:bg-royal hover:text-foreground disabled:opacity-30 disabled:hover:bg-transparent">
            <ArrowLeft className="h-5 w-5" />
          </button>
          <button onClick={() => go(i + 1)} disabled={i === total - 1} aria-label="Další opatření" className="flex h-14 w-14 items-center justify-center rounded-full bg-royal text-foreground transition-all hover:scale-110 disabled:opacity-30 disabled:hover:scale-100">
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
        <div className="flex flex-wrap gap-2" role="tablist">
          {items.map((it, k) => (
            <button
              key={it.n}
              role="tab"
              aria-selected={k === i}
              aria-label={`Opatření ${it.n}: ${it.t}`}
              onClick={() => go(k)}
              className={`display h-11 min-w-11 rounded-full px-3 text-lg transition-all duration-300 ${k === i ? "bg-ink text-card scale-110" : "bg-ink/5 text-ink/50 hover:bg-royal/15 hover:text-royal"}`}
            >
              {String(it.n).padStart(2, "0")}
            </button>
          ))}
        </div>
      </div>
      <div className="mt-6 h-1 overflow-hidden rounded-full bg-ink/10">
        <div className="h-full bg-royal transition-all duration-700" style={{ width: `${((i + 1) / total) * 100}%` }} />
      </div>
    </div>
  );
}
