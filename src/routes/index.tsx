import { createFileRoute, Link } from "@tanstack/react-router";
import { NextLink, Section, meta } from "@/components/site";
import { useAudience } from "@/components/audience-provider";
import schema from "@/assets/schema-8plus2.jpg.asset.json";
import signature from "@/assets/podpis-rz.png.asset.json";
import { EducationInfographic } from "@/components/education-infographic";
import { AnimatedSchema } from "@/components/animated-schema";
import { HeroSlideshow } from "@/components/hero-slideshow";

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

function Index() {
  const { copy, pillars } = useAudience();
  return (
    <>
      <HeroSlideshow />

      <section className="mx-auto max-w-7xl px-6 pb-20 md:px-16">
        <div className="grid gap-px bg-foreground/15 sm:grid-cols-2 lg:grid-cols-4">
          {copy.stats.map((s) => (
            <div key={s.v} className="bg-navy/60 p-8">
              <p className="display text-4xl text-mint md:text-5xl">{s.v}</p>
              <p className="mt-4 text-muted-foreground">{s.l}</p>
            </div>
          ))}
        </div>
      </section>

      <Section kicker="O co jde?">
        <div className="grid gap-12 md:grid-cols-[1fr_2fr]">
          <p className="display text-5xl md:text-6xl">Reforma <span className="text-mint">pro naši budoucnost</span></p>
          <div className="space-y-6 text-xl">
            <p>{copy.intro}</p>
            <p className="text-muted-foreground">{copy.why}</p>
            <img src={signature.url} alt="Podpis Renáty Zajíčkové" className="h-auto w-56 md:w-64" />
            <p className="font-bold">Mgr. Renáta Zajíčková<br /><span className="font-normal text-muted-foreground">Stínová ministryně školství za ODS</span></p>
          </div>
        </div>
      </Section>

      <Section kicker="Proč to potřebujeme?" title={<>Proč model <span className="text-mint">9+0</span> selhává</>}>
        <div className="grid gap-12 md:grid-cols-3">
          {copy.diagnosis.map((d) => (
            <div key={d.t}>
              <p className="text-2xl font-extrabold">{d.t}</p>
              <p className="mt-4 text-lg text-muted-foreground">{d.d}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section kicker="Architektura 8+2" title={<>Tři pilíře, <span className="text-mint">10 opatření</span></>}>
        <div className="grid gap-12 md:grid-cols-3">
          {pillars.map((p) => (
            <div key={p.id}>
              <p className="display text-6xl text-mint">{p.id}</p>
              <p className="mt-2 text-2xl font-extrabold">{p.name}</p>
              <p className="mt-4 text-lg font-semibold">{p.goal}</p>
              <ul className="mt-4 space-y-1 text-muted-foreground">
                {p.measures.map((m) => (
                  <li key={m.n}>
                    <Link to="/opatreni/$slug" params={{ slug: m.slug }} className="hover:text-mint">{m.n}. {m.t}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <EducationInfographic
          src={schema.url}
          alt="Schéma Reformy 8PLUS2: modulární architektura regionálního vzdělávání od 3 do 18 let"
          className="mt-16"
        />
        <div className="mt-12"><NextLink to="/opatreni">Všech 10 opatření podrobně</NextLink></div>
        <div className="mt-12"><NextLink to="/opatreni">Všech 10 opatření podrobně</NextLink></div>
      </Section>

      <Section kicker="Aktuality" title={<>Pohled <span className="text-mint">stínové vlády</span></>}>
        <div className="flex flex-wrap gap-px bg-foreground/15">
          {ministers.map((m) => (
            <div key={m.n} className="min-w-[240px] flex-1 bg-navy/50 p-8">
              <p className="text-xl font-extrabold">{m.n}</p>
              <p className="mt-2 text-muted-foreground">{m.a}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section kicker="Co můžete udělat vy?">
        <p className="mb-10 max-w-3xl text-xl">{copy.invitation}</p>
        <div className="flex flex-col gap-4">
          <NextLink to="/pro-koho">Co reforma přinese vám</NextLink>
          <NextLink to="/data">Studie CETA a PAQ Research</NextLink>
          <NextLink to="/odborna-opora">Od konceptu k legislativě</NextLink>
          <NextLink to="/myty-a-fakta">Mýty vs. fakta</NextLink>
        </div>
      </Section>
    </>
  );
}
