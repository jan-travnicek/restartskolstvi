import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Restart školství – Reforma 8PLUS2" },
      { name: "description", content: "Místo devítky dva roky na střední pro všechny děti. Vize pro vzdělávání." },
      { property: "og:title", content: "Restart školství – Reforma 8PLUS2" },
      { property: "og:description", content: "Místo devítky dva roky na střední pro všechny děti." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const colors = [
  { name: "Královská modrá", hex: "#1F3FD9", cls: "bg-background" },
  { name: "Námořnická", hex: "#141E6B", cls: "bg-navy" },
  { name: "Nebeská", hex: "#4A90D9", cls: "bg-sky" },
  { name: "Mint", hex: "#1EE3C8", cls: "bg-mint" },
  { name: "Bílá", hex: "#FFFFFF", cls: "bg-foreground" },
];

function Index() {
  return (
    <main className="bg-poster min-h-screen text-foreground">
      <section className="mx-auto grid min-h-screen max-w-7xl content-between gap-16 px-8 py-12 md:px-16">
        <header className="flex items-start justify-between">
          <p className="text-lg font-bold leading-tight">Vize pro<br />vzdělávání</p>
          <span className="text-3xl font-extrabold">ODS</span>
        </header>
        <div className="grid items-end gap-12 md:grid-cols-2">
          <h1 className="text-[clamp(5rem,13vw,12rem)] text-mint">Reforma<br />8PLUS2</h1>
          <div className="space-y-10">
            <p className="text-4xl font-extrabold leading-[1.05] md:text-5xl">
              Místo devítky<br />dva roky na střední<br /><span className="text-mint">pro všechny děti</span>
            </p>
            <a href="#styl" className="inline-block text-2xl font-extrabold">
              <span className="text-mint">→</span> restart<span className="font-accent font-normal italic">skolstvi</span>.cz
            </a>
          </div>
        </div>
      </section>

      <section id="styl" className="mx-auto max-w-7xl space-y-20 px-8 py-24 md:px-16">
        <div>
          <p className="mb-6 font-semibold uppercase tracking-widest text-mint">Barvy</p>
          <div className="grid grid-cols-2 gap-6 md:grid-cols-5">
            {colors.map((c) => (
              <div key={c.hex}>
                <div className={`${c.cls} aspect-square rounded ring-1 ring-foreground/20`} />
                <p className="mt-3 font-bold">{c.name}</p>
                <p className="text-muted-foreground">{c.hex}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="space-y-8">
          <p className="font-semibold uppercase tracking-widest text-mint">Písmo</p>
          <h1 className="text-8xl">8+2= <span className="text-mint">restart</span> školství</h1>
          <p className="text-4xl font-extrabold">Podnadpis Archivo ExtraBold</p>
          <p className="max-w-2xl text-xl text-muted-foreground">
            Odstavcový text v písmu Archivo Regular. Krátké, srozumitelné věty, velkorysé mezery a zarovnání vlevo.
          </p>
          <div className="flex flex-wrap items-center gap-8 pt-4">
            <button className="rounded bg-primary px-8 py-4 text-lg font-extrabold text-primary-foreground">Přečíst návrh</button>
            <a href="#" className="text-lg font-bold"><span className="text-mint">→</span> Více o reformě</a>
          </div>
        </div>
      </section>
    </main>
  );
}
