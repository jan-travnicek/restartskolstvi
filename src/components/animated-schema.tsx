import { useEffect, useState } from "react";
import { Maximize2, Pause, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SchemaViewer } from "@/components/schema-viewer";

const stages = [
  { id: "preschool", title: "Mateřská škola", age: "3–6 let", detail: "Schéma začíná mateřskou školou nebo dětskou skupinou. Na předškolní vzdělávání navazuje vstup do základní školy v šesti letech." },
  { id: "primary", title: "1. stupeň ZŠ", age: "6–9 let · 1.–3. třída", detail: "První tříletý cyklus je adaptačním obdobím a rozvíjí základní kompetence k učení. V devíti letech jej uzavírá první ověřovací uzel." },
  { id: "middle", title: "2. stupeň ZŠ", age: "9–12 let · 4.–6. třída", detail: "Druhý tříletý cyklus se zaměřuje na obsah učiva a schopnost spolupráce. Ve dvanácti letech následuje druhý ověřovací uzel." },
  { id: "final", title: "3. stupeň ZŠ", age: "12–14 let · 7.–8. třída", detail: "Poslední dva roky základní školy podporují osobnostní rozvoj a postupnou volbu vzdělávacího směru. Jednotné výstupní testy ve čtrnácti letech tvoří třetí uzlový bod a přechod na střední školu." },
  { id: "secondary", title: "+2 · Nižší střední škola", age: "14–16 let · Malá maturita", detail: "Dva povinné roky na střední škole přinášejí společný odborný základ příbuzných oborů a dílčí kvalifikace. Malá maturita v šestnácti letech ověřuje funkční gramotnost a společný profil absolventa." },
  { id: "vocational", title: "+3 · Odborná kvalifikace", age: "Do 17 let · Malá maturita s výučním listem", detail: "Tato větev ve schématu pokračuje užší specializací a odbornou kvalifikací. V sedmnácti letech ji uzavírá malá maturita s výučním listem." },
  { id: "upper", title: "+4 · Vyšší střední škola", age: "Do 18 let · Velká maturita", detail: "Vyšší středoškolská větev propojuje užší specializaci a odbornou kvalifikaci s přípravou na vysokou školu. Velká maturita v osmnácti letech otevírá cestu k terciárnímu vzdělávání." },
  { id: "gymnasium", title: "Víceletá gymnázia", age: "12–18 let", detail: "Schéma zachovává také samostatnou cestu víceletých gymnázií. Je zakreslena od dvanácti let a směřuje k velké maturitě a dalšímu studiu." },
];

export function AnimatedSchema({ src, alt, className = "" }: { src: string; alt: string; className?: string }) {
  const [selected, setSelected] = useState(4);
  const [active, setActive] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [reducedMotion, setReducedMotion] = useState(false);
  const stage = stages[selected];

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReducedMotion(query.matches);
    sync();
    query.addEventListener("change", sync);
    return () => query.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    if (!playing || reducedMotion) return;
    const timer = window.setInterval(() => setActive((value) => (value + 1) % stages.length), 2800);
    return () => window.clearInterval(timer);
  }, [playing, reducedMotion]);

  if (!stage) return null;

  return (
    <div className={`animated-schema ${className}`} role="region" aria-label="Interaktivní schéma reformy 8PLUS2">
      <div className="mb-4 flex items-center justify-between gap-3">
        <p className="text-lg font-extrabold text-mint">Vzdělávací cesta 8+2</p>
        <div className="flex shrink-0 items-center gap-2">
          <Button variant="ghost" size="icon" className="text-mint hover:bg-foreground/10 hover:text-mint" disabled={reducedMotion} onClick={() => setPlaying((value) => !value)} aria-label={playing ? "Pozastavit animaci" : "Spustit animaci"} title={reducedMotion ? "Animace vypnuté podle nastavení zařízení" : playing ? "Pozastavit animaci" : "Spustit animaci"}>
            {playing && !reducedMotion ? <Pause /> : <Play />}
          </Button>
          <SchemaViewer src={src} alt={alt} trigger={<Maximize2 className="h-5 w-5" />} className="h-9 w-9 shrink-0 text-mint hover:bg-foreground/10" />
        </div>
      </div>
      <div className="overflow-x-auto rounded bg-foreground">
        <div className="schema-canvas relative">
          <img src={src} alt={alt} className="block h-auto w-full" loading="lazy" />
          {stages.map((item, index) => (
            <Button key={item.id} variant="ghost" className={`schema-hotspot schema-${item.id}`} data-selected={selected === index} data-animated={playing && !reducedMotion && active === index} aria-label={`${item.title}, ${item.age}`} aria-pressed={selected === index} aria-controls="schema-stage-detail" title={item.title} onClick={() => { setSelected(index); setActive(index); setPlaying(false); }}>
              <span className="schema-marker">{index + 1}</span>
            </Button>
          ))}
        </div>
      </div>
      <div id="schema-stage-detail" className="grid gap-4 border-b border-foreground/20 py-6 md:grid-cols-[1fr_2fr]" aria-live="polite" aria-atomic="true">
        <div>
          <p className="text-sm font-semibold text-mint">{stage.age}</p>
          <h3 className="mt-2 text-2xl font-extrabold">{stage.title}</h3>
        </div>
        <p className="text-lg text-muted-foreground">{stage.detail}</p>
      </div>
    </div>
  );
}