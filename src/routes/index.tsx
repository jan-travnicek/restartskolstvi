import { createFileRoute, Link } from "@tanstack/react-router";
import { NextLink, Section, meta } from "@/components/site";
import { pillars } from "@/lib/content";
import schema from "@/assets/schema-8plus2.jpg.asset.json";

export const Route = createFileRoute("/")({
  head: () => meta("Reforma 8PLUS2 – Restart školství", "Místo devítky dva roky na střední pro všechny děti. Plně vyčíslená modernizace českého školství."),
  component: Index,
});

const stats = [
  { v: "+9,3 až 16,2 mld. Kč", l: "ročně – okamžitý přínos pro veřejné rozpočty" },
  { v: "60–80 tisíc", l: "mladých lidí vstoupí každý rok o rok dříve na trh práce s reálnou kvalifikací" },
  { v: "9 500 učitelů", l: "uvolníme z neefektivních 9. tříd tam, kde v systému kriticky chybějí" },
  { v: "+2,3 až 2,8 mil. Kč", l: "odvede státu za život každý nový absolvent SŠ oproti člověku se základním vzděláním" },
];

const diagnosis = [
  { t: "Ekonomická černá díra", d: "Rozpočet školství se za dekádu zdvojnásobil, ale kvůli financování „za odučené hodiny“ (PHmax) a neřízené inkluzi se kvalita výuky nezlepšila." },
  { t: "Ztracený lidský potenciál", d: "Až 10 % žáků nedokončí ZŠ, přes 30 000 středoškoláků ročně předčasně opouští studium a 40 % absolventů odborných škol nepracuje ve svém oboru." },
  { t: "Systém v klinické smrti", d: "65 % pedagogů nevěří v přínos současné inkluze a 80 % rodičů nesouhlasí s jejím nastavením. Devátá třída se stala jen místem pro drilování testů Cermat." },
];

function Index() {
  return (
    <>
      <section className="mx-auto grid max-w-7xl items-end gap-12 px-6 pb-16 pt-12 md:grid-cols-2 md:px-16">
        <h1 className="text-[clamp(5rem,13vw,12rem)] text-mint">Reforma<br />8PLUS2</h1>
        <div className="space-y-8">
          <p className="text-4xl font-extrabold leading-[1.05] md:text-5xl">
            Místo devítky<br />dva roky na střední<br /><span className="text-mint">pro všechny děti</span>
          </p>
          <p className="max-w-xl text-lg text-muted-foreground">
            Konec „drahé čekárny“ na základních školách a konec lití peněz do děravé nádrže. Vzdělávání není sociální dávka, ale strategická investice do ekonomiky a bezpečnosti státu.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20 md:px-16">
        <div className="grid gap-px bg-foreground/15 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.v} className="bg-navy/60 p-8">
              <p className="display text-4xl text-mint md:text-5xl">{s.v}</p>
              <p className="mt-4 text-muted-foreground">{s.l}</p>
            </div>
          ))}
        </div>
      </section>

      <Section kicker="Úvodem">
        <div className="grid gap-12 md:grid-cols-[1fr_2fr]">
          <p className="display text-5xl md:text-6xl">Mozky našich lidí jsou <span className="text-mint">jedinou strategickou surovinou</span></p>
          <div className="space-y-6 text-xl">
            <p>Česká republika definitivně vyčerpala svůj model růstu založený na levné práci a energiích. Naší jedinou skutečnou a strategickou surovinou pro éru umělé inteligence jsou mozky našich lidí. Přesto stát stále plýtvá lidským kapitálem i veřejnými prostředky v systému, který ustrnul v devadesátých letech.</p>
            <p className="text-muted-foreground">Předkládáme ucelenou architekturu 10 klíčových opatření rozdělených do tří strategických pilířů – konkrétní, daty podloženou mapu kroků, která zkrátí neefektivní pobyt mladých lidí ve vzdělávacím systému, propojí školy s reálnou ekonomikou a zastaví plýtvání veřejnými penězi.</p>
            <p className="font-bold">Mgr. Renáta Zajíčková<br /><span className="font-normal text-muted-foreground">Stínová ministryně školství za ODS</span></p>
          </div>
        </div>
      </Section>

      <Section kicker="Diagnóza" title={<>Proč model <span className="text-mint">9+0</span> selhává</>}>
        <div className="grid gap-12 md:grid-cols-3">
          {diagnosis.map((d) => (
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
        <SchemaViewer
          src={schema.url}
          alt="Schéma Reformy 8PLUS2: modulární architektura regionálního vzdělávání od 3 do 18 let"
          className="mt-16"
        />
        <div className="mt-12"><NextLink to="/opatreni">Všech 10 opatření podrobně</NextLink></div>
      </Section>

      <Section kicker="Pro koho">
        <div className="flex flex-col gap-4">
          <NextLink to="/pro-koho">Co reforma přinese rodičům, ředitelům a firmám</NextLink>
          <NextLink to="/data">Studie CETA a PAQ Research</NextLink>
          <NextLink to="/odborna-opora">Od konceptu k legislativě</NextLink>
          <NextLink to="/myty-a-fakta">Mýty vs. fakta</NextLink>
        </div>
      </Section>
    </>
  );
}
