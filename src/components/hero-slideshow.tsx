import { useCallback, useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import hero2 from "@/assets/rz-hero-2.jpg.asset.json";
import hero3 from "@/assets/rz-hero-3.jpg.asset.json";

const SLIDES = [
  { src: hero3.url, alt: "Renáta Zajíčková se žáky ve školní třídě" },
  { src: hero2.url, alt: "Renáta Zajíčková v parku s tabletem" },
];

const INTERVAL = 6000;

export function HeroSlideshow() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const go = useCallback((next: number) => {
    setIndex(((next % SLIDES.length) + SLIDES.length) % SLIDES.length);
  }, []);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (paused || reduce) return;
    timerRef.current = setInterval(() => setIndex((i) => (i + 1) % SLIDES.length), INTERVAL);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [paused]);

  return (
    <section
      className="relative flex min-h-[45svh] flex-col justify-end overflow-hidden md:min-h-[max(20rem,calc(100svh_-_29.5rem))]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-roledescription="carousel"
      aria-label="Fotografie předkladatelky návrhu Renáty Zajíčkové"
    >
      {SLIDES.map((s, i) => (
        <img
          key={s.src}
          src={s.src}
          alt={i === index ? s.alt : ""}
          aria-hidden={i !== index}
          loading={i === 0 ? "eager" : "lazy"}
          className={`absolute inset-0 h-full w-full object-cover object-[center_25%] transition-opacity duration-1000 ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {/* Překryv pro čitelnost v souladu s identitou webu */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy via-navy/60 to-navy/30" />

      <div className="relative mx-auto flex w-full max-w-7xl flex-col justify-between gap-10 px-6 pb-16 pt-28 md:flex-row md:items-end md:gap-12 md:px-16 md:pb-16">
        <div>
          <h1 className="text-[clamp(3rem,9vw,8rem)] leading-[0.92] text-mint">
            Reforma
            <br />
            8PLUS2
          </h1>
          <div className="mt-8 flex flex-wrap items-center gap-6">
            <Link
              to="/opatreni"
              className="inline-flex items-center gap-3 rounded bg-mint px-8 py-4 text-lg font-extrabold text-navy transition-transform hover:-translate-y-0.5"
            >
              Všech 10 opatření
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </Link>
            <Link to="/data" className="text-lg font-bold text-mint underline-offset-4 hover:underline">
              Data místo dojmů
            </Link>
          </div>
        </div>
        <p className="text-2xl font-extrabold leading-tight md:max-w-md md:text-right md:text-4xl">
          Místo devítky{"\u00a0"}
          <br />
          dva roky na střední{"\u00a0"}
          <br />
          <span className="text-mint">pro všechny děti</span>
        </p>
      </div>

      {/* Ovládání slideshow */}
      <div className="absolute bottom-6 right-6 flex items-center gap-3 md:right-16">
        <button
          type="button"
          onClick={() => go(index - 1)}
          aria-label="Předchozí fotografie"
          className="inline-flex h-10 w-10 items-center justify-center rounded bg-foreground/10 text-foreground transition-colors hover:bg-foreground/20"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M19 12H5M11 18l-6-6 6-6" />
          </svg>
        </button>
        <div className="flex items-center gap-2" role="tablist" aria-label="Výběr fotografie">
          {SLIDES.map((s, i) => (
            <button
              key={s.src}
              type="button"
              role="tab"
              aria-selected={i === index}
              aria-label={`Fotografie ${i + 1} z ${SLIDES.length}`}
              onClick={() => go(i)}
              className={`h-2 rounded-full transition-all ${i === index ? "w-8 bg-mint" : "w-2 bg-foreground/40 hover:bg-foreground/70"}`}
            />
          ))}
        </div>
        <button
          type="button"
          onClick={() => go(index + 1)}
          aria-label="Další fotografie"
          className="inline-flex h-10 w-10 items-center justify-center rounded bg-foreground/10 text-foreground transition-colors hover:bg-foreground/20"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </button>
      </div>
    </section>
  );
}
