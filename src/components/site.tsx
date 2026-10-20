import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import logo from "@/assets/ods-logo.png.asset.json";
import { ChevronDown, UsersRound } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuRadioGroup, DropdownMenuRadioItem } from "@/components/ui/dropdown-menu";
import { useAudience } from "@/components/audience-provider";
import { audienceOptions, isAudience } from "@/lib/content";

const nav = [
  { to: "/opatreni", label: "10 opatření" },
  { to: "/data", label: "Data místo dojmů" },
  { to: "/odborna-opora", label: "Odborná opora" },
  { to: "/myty-a-fakta", label: "Mýty vs. fakta" },
] as const;

export function SiteHeader() {
  const { audience, setAudience } = useAudience();
  const selected = audienceOptions.find((option) => option.id === audience);
  return (
    <header className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-6 px-6 py-8 md:px-16">
      <Link to="/" className="shrink-0 text-lg font-bold leading-tight">
        Reforma<br />školství
      </Link>
      <nav aria-label="Hlavní navigace" className="order-3 flex w-full flex-wrap items-center gap-x-6 gap-y-4 text-sm font-semibold">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button aria-label={`Pohled na reformu: ${selected?.label}`} className="h-12 w-full justify-between gap-3 bg-mint px-4 font-extrabold text-navy shadow-none hover:bg-mint/90 sm:w-64">
              <UsersRound aria-hidden="true" />
              <span className="flex-1 text-left">{selected?.label}</span>
              <ChevronDown aria-hidden="true" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start" sideOffset={8} className="w-64 max-w-[calc(100vw-3rem)] border-mint/30 bg-navy p-2 text-foreground shadow-none">
            <DropdownMenuRadioGroup value={audience} onValueChange={(value) => { if (isAudience(value)) setAudience(value); }}>
              {audienceOptions.map((option) => (
                <DropdownMenuRadioItem key={option.id} value={option.id} className="min-h-11 cursor-pointer font-semibold focus:bg-mint focus:text-navy data-[state=checked]:text-mint data-[state=checked]:focus:text-navy">
                  {option.label}
                </DropdownMenuRadioItem>
              ))}
            </DropdownMenuRadioGroup>
          </DropdownMenuContent>
        </DropdownMenu>
        {nav.map((n) => (
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

export function NextLink({ to, children }: { to: (typeof nav)[number]["to"] | "/pro-koho"; children: ReactNode }) {
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
