import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import logo from "@/assets/ods-logo.png.asset.json";
import { audiences } from "@/lib/audiences";

const nav = [
  { to: "/opatreni", label: "10 opatření" },
  { to: "/pro-koho", label: "Co mi reforma přinese" },
  { to: "/data", label: "Data místo dojmů" },
  { to: "/odborna-opora", label: "Odborná opora" },
  { to: "/myty-a-fakta", label: "Mýty vs. fakta" },
  { to: "/aktuality", label: "Aktuality" },
] as const;

function AudienceMenu() {
  return (
    <div className="group relative">
      <Link to="/pro-koho" className="opacity-80 hover:opacity-100" activeProps={{ className: "text-mint opacity-100" }}>
        Pro koho <span aria-hidden>▾</span>
      </Link>
      <div className="invisible absolute left-0 top-full z-50 pt-3 opacity-0 transition group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
        <ul className="min-w-56 rounded-sm bg-navy py-2">
          {audiences.map((a) => (
            <li key={a.id}>
              <Link to="/pro-koho" search={{ skupina: a.id }} className="block px-4 py-2 hover:text-mint">
                {a.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export function SiteHeader() {
  return (
    <header className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-6 px-6 py-8 md:px-16">
      <Link to="/" className="text-lg font-bold leading-tight">
        Reforma<br />školství
      </Link>
      <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm font-semibold">
        {nav.map((n) =>
          n.to === "/pro-koho" ? (
            <AudienceMenu key={n.to} />
          ) : (
            <Link key={n.to} to={n.to} className="opacity-80 hover:opacity-100" activeProps={{ className: "text-mint opacity-100" }}>
              {n.label}
            </Link>
          ),
        )}
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
