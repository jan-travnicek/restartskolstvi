import { Link } from "@tanstack/react-router";
import { useEffect, useRef, useState, type ReactNode } from "react";
import logo from "@/assets/ods-logo.png.asset.json";
import { audiences, useAudience } from "@/lib/audiences";

const nav = [
  { to: "/opatreni", label: "10 opatření" },
  { to: "/pro-koho", label: "Co mi reforma přinese" },
  { to: "/data", label: "Data místo dojmů" },
  { to: "/odborna-opora", label: "Odborná opora" },
  { to: "/myty-a-fakta", label: "Mýty vs. fakta" },
  { to: "/aktuality", label: "Aktuality" },
] as const;

function AudienceSwitcher() {
  const { audience, setAudience } = useAudience();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const current = audiences.find((a) => a.id === audience)!;
  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent) => { if (!ref.current?.contains(e.target as Node)) setOpen(false); };
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => { document.removeEventListener("mousedown", onDown); document.removeEventListener("keydown", onKey); };
  }, [open]);
  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
        className="flex items-center gap-2 rounded-sm bg-mint px-3 py-1.5 text-navy transition-opacity hover:opacity-90"
      >
        <span className="text-xs font-semibold uppercase tracking-widest opacity-70">Pohled:</span>
        <span className="font-extrabold">{current.label}</span>
        <span aria-hidden className={`transition-transform ${open ? "rotate-180" : ""}`}>▾</span>
      </button>
      {open && (
        <ul role="listbox" className="absolute left-0 top-full z-50 mt-2 min-w-full overflow-hidden rounded-sm bg-navy py-1">
          {audiences.map((a) => (
            <li key={a.id}>
              <button
                type="button"
                role="option"
                aria-selected={a.id === audience}
                onClick={() => { setAudience(a.id); setOpen(false); }}
                className={`block w-full whitespace-nowrap px-4 py-2 text-left font-semibold hover:bg-foreground/10 ${a.id === audience ? "text-mint" : ""}`}
              >
                {a.id === audience ? "→ " : ""}{a.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export function SiteHeader() {
  return (
    <header className="relative z-40 mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-6 px-6 py-8 md:px-16">
      <Link to="/" className="text-lg font-bold leading-tight">
        Reforma<br />školství
      </Link>
      <nav className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm font-semibold">
        <AudienceSwitcher />
        {nav.filter((n) => n.to !== "/pro-koho").map((n) => (
          <Link key={n.to} to={n.to} className="opacity-80 hover:opacity-100" activeProps={{ className: "text-mint opacity-100" }}>
            {n.label}
          </Link>
        ))}
      </nav>
      <img src={logo.url} alt="ODS" className="h-14 w-auto" />
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="mx-auto max-w-7xl px-6 py-16 md:px-16">
      <p className="text-2xl font-extrabold">
        <span className="text-mint">→</span> restart<span className="font-accent font-normal italic">skolstvi</span>.cz
      </p>
      <p className="mt-3 text-sm text-muted-foreground">Reforma 8PLUS2 · Vize ODS pro vzdělávání</p>
    </footer>
  );
}

export function Section({ kicker, title, children, id }: { kicker?: string; title?: ReactNode; children: ReactNode; id?: string }) {
  return (
    <section id={id} className="mx-auto max-w-7xl px-6 py-20 md:px-16">
      {kicker && <p className="mb-4 font-semibold uppercase tracking-widest text-mint">{kicker}</p>}
      {title && <h2 className="display mb-12 text-6xl md:text-8xl">{title}</h2>}
      {children}
    </section>
  );
}

export function PageHero({ kicker, title, lead }: { kicker: string; title: ReactNode; lead?: ReactNode }) {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-8 pt-16 md:px-16">
      <p className="mb-6 font-semibold uppercase tracking-widest text-mint">{kicker}</p>
      <h1 className="text-[clamp(4rem,10vw,9rem)]">{title}</h1>
      {lead && <p className="mt-8 max-w-3xl text-2xl font-bold leading-snug">{lead}</p>}
    </section>
  );
}

export function NextLink({ to, children }: { to: (typeof nav)[number]["to"]; children: ReactNode }) {
  return (
    <Link to={to} className="inline-block text-2xl font-extrabold hover:text-mint">
      <span className="text-mint">→</span> {children}
    </Link>
  );
}

export function meta(title: string, description: string) {
  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  };
}
