import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { meta } from "@/components/site";
import { useAudience } from "@/components/audience-provider";
import { EducationInfographic } from "@/components/education-infographic";
import { HeroSlideshow } from "@/components/hero-slideshow";
import { Parallax, Reveal } from "@/components/v2-motion";
import { economics } from "@/lib/content";
const schema = { url: "/media/schema-8plus2.jpg" };
const sideImg = { url: "/media/rz-hero-2.jpg" };
const kupkaImg = { url: "/media/martin-kupka.jpg" };
const signature = { url: "/media/podpis-rz-ink.png" };

export const Route = createFileRoute("/")({
  head: () => meta("Reforma 8PLUS2 – Restart školství", "Místo devítky dva roky na střední pro všechny děti. Plně vyčíslená modernizace českého školství."),
  component: Index,
});

const ministers = [
  { n: "Jan Lipavský", a: "Národní bezpečnost a odolnost vůči dezinformacím" },
  { n: "Radim Ivan", a: "Rozvoj regionů a svazkové školy" },
  { n: "Jiří Havránek", a: "Trh práce a důchodový systém" },
  { n: "Pavel Drobil", a: "Průmysl a propojení s praxí" },
  { n: "Štěpán Slovák", a: "Duševní zdraví a revize inkluze" },
  { n: "Jan Skopeček", a: "Veřejné finance a konec PHmax" },
  { n: "Martin Kupka", a: "Moderní stát a vzdělávací účty" },
];

const marquee = ["8 let základní školy", "2 roky na střední", "Malá maturita", "Konec PHmax", "Revize inkluze", "Velká maturita", "Cykly 3+3+2"];

const next = [
  { to: "/pro-koho", t: "Co reforma přinese vám", k: "Pro koho" },
  { to: "/data", t: "Studie CETA a PAQ Research", k: "Data" },
  { to: "/odborna-opora", t: "Od konceptu k legislativě", k: "Odborná opora" },
  { to: "/myty-a-fakta", t: "Mýty vs. fakta", k: "Argumenty" },
] as const;

function Kicker({ children, light = false }: { children: string; light?: boolean }) {
  return (
    <p className={`mb-5 flex items-center gap-3 text-sm font-extrabold uppercase tracking-[0.25em] ${light ? "text-royal" : "text-mint"}`}>
      <span className={`h-px w-10 ${light ? "bg-royal" : "bg-mint"}`} />
      {children}
    </p>
  );
}

function Index() {
  const { copy, pillars } = useAudience();
  return (
    <div className="overflow-x-clip">
      {/* HERO – původní slideshow */}
      <HeroSlideshow />

      {/* MARQUEE */}
      <div className="overflow-hidden border-y border-navy/20 bg-mint py-5 text-navy">
        <div className="v2-marquee flex w-max gap-12 whitespace-nowrap font-display text-3xl uppercase md:text-4xl">
          {[...marquee, ...marquee].map((m, i) => (
            <span key={i} className="flex items-center gap-12">{m}<span aria-hidden="true">✦</span></span>
          ))}
        </div>
      </div>

      {/* STATS */}
      <section id="prehled" className="mx-auto max-w-7xl px-6 py-24 md:px-16 md:py-32">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {copy.stats.map((s, i) => (
            <Reveal key={s.v} delay={i * 120} className="group rounded-3xl border border-foreground/15 bg-navy/40 p-8 backdrop-blur transition-all duration-500 hover:-translate-y-2 hover:border-mint/60 hover:bg-navy/70">
              <p className="display text-5xl text-mint transition-transform duration-500 group-hover:scale-105 md:text-6xl">{s.v}</p>
              <p className="mt-5 leading-relaxed text-muted-foreground">{s.l}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* DIAGNOSIS */}
      <section className="relative mx-auto max-w-7xl px-6 pb-32 md:px-16">
        <Parallax speed={0.2} className="pointer-events-none absolute -top-10 right-0 select-none font-display text-[30vw] leading-none text-foreground/5 md:text-[20rem]">
          <span aria-hidden="true">9+0</span>
        </Parallax>
        <Reveal><Kicker>Proč to potřebujeme?</Kicker></Reveal>
        <Reveal delay={100}><h2 className="display mb-16 max-w-4xl text-6xl md:text-8xl">Proč model <span className="text-mint">9+0</span> selhává</h2></Reveal>
        <div className="grid gap-px overflow-hidden rounded-3xl bg-foreground/15 md:grid-cols-3">
          {copy.diagnosis.map((d, i) => (
            <Reveal key={d.t} delay={i * 150} className="bg-navy/70 p-10">
              <p className="display text-5xl text-mint/60">0{i + 1}</p>
              <p className="mt-6 text-2xl font-extrabold">{d.t}</p>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">{d.d}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* LIGHT HALF */}
      <div className="relative rounded-t-[3rem] bg-paper text-ink md:rounded-t-[5rem]">
        {/* INTRO */}
        <section className="mx-auto max-w-7xl px-6 py-28 md:px-16 md:py-36">
          <div className="grid gap-16 md:grid-cols-[5fr_7fr] md:items-center">
            <Reveal className="relative">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem]">
                <Parallax speed={-0.08} className="absolute inset-0 -top-[10%] -bottom-[10%]">
                  <img src={sideImg.url} alt="Renáta Zajíčková v parku s tabletem" loading="lazy" className="h-full w-full object-cover object-center" />
                </Parallax>
              </div>
              <div className="absolute -bottom-6 -right-4 rounded-2xl bg-mint px-6 py-4 text-navy shadow-xl md:-right-8">
                <p className="display text-3xl">3 roky</p>
                <p className="text-sm font-bold">konzultací s experty</p>
              </div>
            </Reveal>
            <div>
              <Reveal><Kicker light>O co jde?</Kicker></Reveal>
              <Reveal delay={100}><h2 className="display text-5xl md:text-7xl">Reforma <span className="text-royal">pro naši budoucnost</span></h2></Reveal>
              <Reveal delay={200}><p className="mt-8 text-xl leading-relaxed">{copy.intro}</p></Reveal>
              <Reveal delay={300}><p className="mt-6 text-lg leading-relaxed text-ink/65">{copy.why}</p></Reveal>
              <Reveal delay={400} className="mt-10 flex items-end gap-6">
                <img src={signature.url} alt="Podpis Renáty Zajíčkové" className="h-auto w-44 md:w-56" />
                <p className="font-bold">Mgr. Renáta Zajíčková<br /><span className="font-normal text-ink/60">Stínová ministryně školství za ODS</span></p>
              </Reveal>
            </div>
          </div>
        </section>

        {/* INTRO – MARTIN KUPKA */}
        <section className="mx-auto max-w-7xl px-6 pb-28 md:px-16 md:pb-36">
          <div className="grid gap-16 md:grid-cols-[7fr_5fr] md:items-center">
            <div className="md:order-1">
              <Reveal><Kicker light>Hlas ODS</Kicker></Reveal>
              <Reveal delay={100}><h2 className="display text-5xl md:text-7xl">Reforma, <span className="text-royal">ne dílčí změny</span></h2></Reveal>
              <Reveal delay={200}><p className="mt-8 text-xl leading-relaxed">„České školství nepotřebuje další dílčí změny, ale skutečnou reformu. Nabízíme konkrétní systém 8+2, který zvýší kvalitu vzdělávání a připraví děti lépe na jejich budoucí profesní život.</p></Reveal>
              <Reveal delay={300}><p className="mt-6 text-lg leading-relaxed text-ink/65">Osm let základní školy, dva povinné roky na střední, větší prostupnost a mnohem užší spojení škol s praxí jsou cestou ke vzdělávání pro 21. století.“</p></Reveal>
              <Reveal delay={400} className="mt-10 flex items-center gap-6">
                <span className="h-px w-12 bg-royal" />
                <p className="font-bold">Martin Kupka<br /><span className="font-normal text-ink/60">Předseda ODS</span></p>
              </Reveal>
            </div>
            <Reveal className="relative md:order-2">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem]">
                <Parallax speed={-0.08} className="absolute inset-0 -top-[10%] -bottom-[10%]">
                  <img src={kupkaImg.url} alt="Martin Kupka, předseda ODS" loading="lazy" style={{ objectPosition: "32% 22%" }} className="h-full w-full object-cover" />
                </Parallax>
              </div>
              <div className="absolute -bottom-6 -left-4 rounded-2xl bg-royal px-6 py-4 text-foreground shadow-xl md:-left-8">
                <p className="display text-3xl">8+2</p>
                <p className="text-sm font-bold">systém, ne dílčí změny</p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* PILLARS */}
        <section className="mx-auto max-w-7xl px-6 pb-28 md:px-16 md:pb-36">
          <Reveal><Kicker light>Architektura 8+2</Kicker></Reveal>
          <Reveal delay={100}><h2 className="display mb-16 text-6xl md:text-8xl">Tři pilíře, <span className="text-royal">10 opatření</span></h2></Reveal>
          <div className="grid gap-6 md:grid-cols-3">
            {pillars.map((p, i) => (
              <Reveal key={p.id} delay={i * 150} className="group flex flex-col rounded-[2rem] border border-ink/10 bg-card p-9 shadow-[0_20px_60px_-30px_var(--ink)] transition-all duration-500 hover:-translate-y-2 hover:border-royal/40">
                <div className="flex items-center justify-between">
                  <span className="display flex h-16 w-16 items-center justify-center rounded-2xl bg-royal text-3xl text-foreground transition-transform duration-500 group-hover:rotate-6">{p.id}</span>
                  <span className="text-sm font-bold text-ink/50">{p.measures.length} opatření</span>
                </div>
                <p className="mt-8 text-2xl font-extrabold">{p.name}</p>
                <p className="mt-3 font-semibold text-ink/70">{p.goal}</p>
                <ul className="mt-8 space-y-1 border-t border-ink/10 pt-6">
                  {p.measures.map((m) => (
                    <li key={m.n}>
                      <Link to="/opatreni/$slug" params={{ slug: m.slug }} className="group/l flex items-center justify-between gap-3 rounded-lg px-2 py-2 -mx-2 transition-colors hover:bg-royal/10 hover:text-royal">
                        <span><span className="font-bold text-royal">{m.n}.</span> {m.t}</span>
                        <ArrowUpRight className="h-4 w-4 shrink-0 opacity-0 transition-opacity group-hover/l:opacity-100" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-16 rounded-[2.5rem] bg-navy p-4 text-foreground md:p-10">
            <EducationInfographic src={schema.url} alt="Schéma Reformy 8PLUS2: modulární architektura regionálního vzdělávání od 3 do 18 let" />
          </Reveal>
        </section>

        {/* ECONOMICS */}
        <section className="bg-royal/5 py-28 md:py-36">
          <div className="mx-auto max-w-7xl px-6 md:px-16">
            <Reveal><Kicker light>Data místo dojmů</Kicker></Reveal>
            <Reveal delay={100}><h2 className="display mb-16 max-w-4xl text-5xl md:text-7xl">Reforma, která se <span className="text-royal">vyplatí</span></h2></Reveal>
            <div className="grid gap-x-12 gap-y-14 md:grid-cols-2">
              {economics.map((e, i) => (
                <Reveal key={e.t} delay={(i % 2) * 150} className="border-t-2 border-royal pt-6">
                  <p className="display text-5xl text-royal md:text-6xl">{e.v}</p>
                  <p className="mt-4 text-xl font-extrabold">{e.t}</p>
                  <p className="mt-2 max-w-md leading-relaxed text-ink/65">{e.d}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* NEWS */}
        <section className="mx-auto max-w-7xl px-6 py-28 md:px-16 md:py-36">
          <Reveal><Kicker light>Aktuality</Kicker></Reveal>
          <Reveal delay={100}><h2 className="display mb-16 text-5xl md:text-7xl">Pohled <span className="text-royal">stínové vlády</span></h2></Reveal>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {ministers.map((m, i) => (
              <Reveal key={m.n} delay={(i % 4) * 100} className="rounded-2xl border border-ink/10 bg-card p-7 transition-colors duration-300 hover:border-royal/40">
                <p className="flex h-11 w-11 items-center justify-center rounded-full bg-mint font-extrabold text-navy">{m.n.split(" ").map((w) => w[0]).join("")}</p>
                <p className="mt-5 text-lg font-extrabold">{m.n}</p>
                <p className="mt-1 text-ink/65">{m.a}</p>
              </Reveal>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="mx-auto max-w-7xl px-6 pb-28 md:px-16 md:pb-36">
          <div className="grid gap-12 rounded-[2.5rem] bg-ink p-10 text-foreground md:grid-cols-[1fr_1.2fr] md:p-16">
            <Reveal>
              <Kicker>Co můžete udělat vy?</Kicker>
              <p className="text-xl leading-relaxed text-foreground/80">{copy.invitation}</p>
            </Reveal>
            <div className="grid gap-3 sm:grid-cols-2">
              {next.map((n, i) => (
                <Reveal key={n.to} delay={i * 100}>
                  <Link to={n.to} className="group flex h-full flex-col justify-between gap-8 rounded-2xl border border-foreground/15 p-6 transition-all duration-300 hover:border-mint hover:bg-mint hover:text-navy">
                    <span className="text-xs font-bold uppercase tracking-widest opacity-60">{n.k}</span>
                    <span className="flex items-end justify-between gap-3 text-xl font-extrabold">{n.t}<ArrowUpRight className="h-6 w-6 shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" /></span>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
