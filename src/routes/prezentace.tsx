import { createFileRoute } from "@tanstack/react-router";
import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";
import { ChevronLeft, ChevronRight, Maximize } from "lucide-react";

export const Route = createFileRoute("/prezentace")({
  head: () => ({
    meta: [
      { title: "Prezentace — Reforma 8PLUS2" },
      { name: "description", content: "Revize inkluze a jednotná výstupní zkouška: prezentace dvou klíčových opatření reformy 8PLUS2." },
      { property: "og:title", content: "Prezentace — Reforma 8PLUS2" },
      { property: "og:description", content: "Revize inkluze, jednotná výstupní zkouška a komplexní balík 10 opatření reformy školství." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Presentation,
});

function Kicker({ children }: { children: ReactNode }) {
  return <p className="font-semibold uppercase tracking-[0.18em] text-accent" style={{ fontSize: 26 }}>{children}</p>;
}
function Title({ children }: { children: ReactNode }) {
  return <h2 className="font-display uppercase leading-[0.95] text-primary-foreground" style={{ fontSize: 120 }}>{children}</h2>;
}
function Point({ n, t, d }: { n: string; t: string; d: string }) {
  return (
    <div className="flex gap-8 border-t border-primary-foreground/25 pt-7">
      <span className="font-display text-accent" style={{ fontSize: 64, lineHeight: 1 }}>{n}</span>
      <div>
        <p className="font-bold text-primary-foreground" style={{ fontSize: 38 }}>{t}</p>
        <p className="mt-2 text-primary-foreground/80" style={{ fontSize: 30, lineHeight: 1.3 }}>{d}</p>
      </div>
    </div>
  );
}

const slides: { title: string; body: ReactNode }[] = [
  {
    title: "Úvod",
    body: (
      <div className="flex h-full flex-col justify-between p-[120px]">
        <div className="flex items-center justify-between">
          <img src="/media/8plus2-logo.svg" alt="8PLUS2" style={{ height: 90 }} />
          <img src="/media/ods-logo.png" alt="ODS" style={{ height: 110 }} />
        </div>
        <div>
          <Kicker>Reforma školství 8PLUS2</Kicker>
          <h1 className="mt-8 font-display uppercase leading-[0.92] text-primary-foreground" style={{ fontSize: 150 }}>
            Místo devítky<br />dva roky na střední<br /><span className="text-accent">pro všechny děti</span>
          </h1>
        </div>
        <p className="text-primary-foreground/80" style={{ fontSize: 32 }}>Revize inkluze · Jednotná výstupní zkouška · restartskolstvi.cz</p>
      </div>
    ),
  },
  {
    title: "Revize inkluze",
    body: (
      <div className="grid h-full grid-cols-[1fr_1.1fr] gap-[100px] p-[120px]">
        <div className="flex flex-col justify-center">
          <Kicker>Opatření 05</Kicker>
          <div className="mt-6"><Title>Revize<br />inkluze</Title></div>
          <p className="mt-10 text-primary-foreground/85" style={{ fontSize: 36, lineHeight: 1.3 }}>
            Zachováváme princip podpory znevýhodněných, ale radikálně měníme formu.
          </p>
        </div>
        <div className="flex flex-col justify-center gap-10">
          <Point n="01" t="Konec plošného modelu" d="Současná inkluze neúměrně zatěžuje rozpočty a snižuje efektivitu výuky pro většinu dětí." />
          <Point n="02" t="Průchozí třídy a skupiny" d="Specializované skupiny a silnější pravomoci ředitelů místo pasivních asistentů." />
          <Point n="03" t="Zdravý rozum a efektivita" d="Inkluze má rozvíjet jednotlivce, ne brzdit kvalitu výuky pro ostatní." />
        </div>
      </div>
    ),
  },
  {
    title: "Jednotná výstupní zkouška",
    body: (
      <div className="grid h-full grid-cols-[1fr_1.1fr] gap-[100px] p-[120px]">
        <div className="flex flex-col justify-center">
          <Kicker>Opatření 03</Kicker>
          <div className="mt-6"><Title>Jednotná<br />výstupní<br />zkouška</Title></div>
          <p className="mt-10 text-primary-foreground/85" style={{ fontSize: 36, lineHeight: 1.3 }}>
            Jedna zkouška na konci osmé třídy místo chaosu přijímaček.
          </p>
        </div>
        <div className="flex flex-col justify-center gap-10">
          <Point n="01" t="Méně stresu pro děti" d="Nahrazuje stresující přijímačky a srozumitelně ukáže, co dítě zvládá." />
          <Point n="02" t="Data o kvalitě škol" d="Stát i zřizovatelé získají srovnatelná data o přidané hodnotě jednotlivých škol." />
          <Point n="03" t="Méně regionálních nerovností" d="Objektivní a společný výchozí bod pro další studium na střední škole." />
        </div>
      </div>
    ),
  },
  {
    title: "Komplexní balík 10 opatření",
    body: (
      <div className="flex h-full flex-col justify-center p-[120px]">
        <Kicker>Víc než kratší základka</Kicker>
        <div className="mt-6"><Title>Komplexní balík<br /><span className="text-accent">10 opatření</span></Title></div>
        <p className="mt-10 max-w-[1300px] text-primary-foreground/85" style={{ fontSize: 36, lineHeight: 1.3 }}>
          Reforma 8PLUS2 neřeší jen délku základní školy. Nabízí řešení pro přijímačky, inkluzi, maturity, financování, administrativu i propojení škol s praxí.
        </p>
        <div className="mt-16 grid grid-cols-3 gap-10">
          {[
            ["8 + 2", "Struktura vzdělávání"],
            ["Kvalita", "Zkoušky, maturity, data"],
            ["Efektivita", "Financování a řízení škol"],
          ].map(([v, l]) => (
            <div key={v} className="rounded-2xl border border-primary-foreground/25 bg-primary-foreground/10 p-10">
              <p className="font-display uppercase text-accent" style={{ fontSize: 72, lineHeight: 1 }}>{v}</p>
              <p className="mt-4 text-primary-foreground" style={{ fontSize: 30 }}>{l}</p>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    title: "Závěr",
    body: (
      <div className="flex h-full flex-col items-center justify-center p-[120px] text-center">
        <img src="/media/8plus2-logo.svg" alt="8PLUS2" style={{ height: 110 }} />
        <h2 className="mt-14 font-display uppercase leading-[0.95] text-primary-foreground" style={{ fontSize: 130 }}>
          Skutečná reforma,<br /><span className="text-accent">ne dílčí změny</span>
        </h2>
        <p className="mt-12 text-primary-foreground/85" style={{ fontSize: 40 }}>Všech 10 opatření najdete na</p>
        <p className="mt-3 font-bold text-primary-foreground" style={{ fontSize: 56 }}>restartskolstvi.cz</p>
        <img src="/media/ods-logo.png" alt="ODS" className="mt-16" style={{ height: 90 }} />
      </div>
    ),
  },
];

function Presentation() {
  const [index, setIndex] = useState(0);
  const [scale, setScale] = useState(0);
  const touch = useRef<number | null>(null);
  const total = slides.length;
  const go = useCallback((d: number) => setIndex((i) => Math.min(total - 1, Math.max(0, i + d))), [total]);

  useEffect(() => {
    const fit = () => setScale(Math.min(window.innerWidth / 1920, window.innerHeight / 1080));
    fit();
    window.addEventListener("resize", fit);
    const key = (e: KeyboardEvent) => {
      if (["ArrowRight", "PageDown", " ", "Enter"].includes(e.key)) { e.preventDefault(); go(1); }
      else if (["ArrowLeft", "PageUp", "Backspace"].includes(e.key)) { e.preventDefault(); go(-1); }
      else if (e.key === "Home") setIndex(0);
      else if (e.key === "End") setIndex(total - 1);
      else if (e.key === "f" || e.key === "F5") { e.preventDefault(); document.documentElement.requestFullscreen?.(); }
    };
    window.addEventListener("keydown", key);
    return () => { window.removeEventListener("resize", fit); window.removeEventListener("keydown", key); };
  }, [go, total]);

  useEffect(() => { document.title = `${index + 1}/${total} — ${slides[index]!.title}`; }, [index, total]);

  return (
    <div
      className="bg-poster fixed inset-0 select-none overflow-hidden"
      onClick={(e) => go(e.clientX < window.innerWidth / 3 ? -1 : 1)}
      onTouchStart={(e) => { touch.current = e.touches[0]!.clientX; }}
      onTouchEnd={(e) => {
        if (touch.current === null) return;
        const dx = e.changedTouches[0]!.clientX - touch.current;
        touch.current = null;
        if (Math.abs(dx) > 40) go(dx < 0 ? 1 : -1);
      }}
    >
      <div
        className="absolute left-1/2 top-1/2"
        style={{ width: 1920, height: 1080, marginLeft: -960, marginTop: -540, transform: `scale(${scale})`, opacity: scale ? 1 : 0 }}
      >
        {slides.map((s, i) => (
          <section
            key={s.title}
            aria-hidden={i !== index}
            className="absolute inset-0 transition-all duration-500 ease-out"
            style={{ opacity: i === index ? 1 : 0, transform: `translateX(${(i - index) * 60}px)`, pointerEvents: i === index ? "auto" : "none" }}
          >
            {s.body}
          </section>
        ))}
      </div>

      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 items-center gap-3 rounded-full bg-primary/70 px-3 py-1.5 text-sm text-primary-foreground backdrop-blur" onClick={(e) => e.stopPropagation()}>
        <button aria-label="Předchozí snímek" onClick={() => go(-1)} disabled={index === 0} className="rounded-full p-1 disabled:opacity-30"><ChevronLeft className="h-5 w-5" /></button>
        <span className="tabular-nums">{index + 1} / {total}</span>
        <button aria-label="Další snímek" onClick={() => go(1)} disabled={index === total - 1} className="rounded-full p-1 disabled:opacity-30"><ChevronRight className="h-5 w-5" /></button>
        <button aria-label="Celá obrazovka" onClick={() => document.documentElement.requestFullscreen?.()} className="rounded-full p-1"><Maximize className="h-4 w-4" /></button>
      </div>
    </div>
  );
}
