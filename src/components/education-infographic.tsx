import { useId, useState } from "react";
import { ArrowRight, BookOpen, BriefcaseBusiness, Check, ChevronLeft, ChevronRight, GraduationCap, Maximize2, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SchemaViewer } from "@/components/schema-viewer";
import { educationMilestones, educationStages, isOnEducationPath, type EducationPath } from "@/lib/education-schema";

const paths = [
  { id: "all", label: "Celé schéma", icon: BookOpen },
  { id: "work", label: "Odborná kvalifikace", icon: BriefcaseBusiness },
  { id: "study", label: "Cesta k VŠ", icon: GraduationCap },
  { id: "gymnasium", label: "Gymnázium", icon: GraduationCap },
] as const;

export function EducationInfographic({ src, alt, className = "" }: { src: string; alt: string; className?: string }) {
  const [path, setPath] = useState<EducationPath>("all");
  const [selected, setSelected] = useState("secondary");
  const detailId = useId();
  const stage = educationStages.find((item) => item.id === selected) ?? educationStages[4];
  const visibleStages = educationStages.filter((item) => isOnEducationPath(item, path));
  const currentIndex = visibleStages.findIndex((item) => item.id === selected);
  const changeStage = (direction: number) => {
    const next = visibleStages[(Math.max(0, currentIndex) + direction + visibleStages.length) % visibleStages.length];
    if (next) setSelected(next.id);
  };
  const changePath = (value: EducationPath) => {
    setPath(value);
    const next = educationStages.find((item) => isOnEducationPath(item, value) && item.id === selected) ?? educationStages.find((item) => isOnEducationPath(item, value));
    if (next) setSelected(next.id);
  };

  return (
    <div className={`education-explorer ${className}`} role="region" aria-label="Vzdělávací mapa 8PLUS2">
      <div className="flex flex-wrap items-end justify-between gap-5 pb-6">
        <div><p className="text-sm font-semibold text-mint">OD 3 DO 18 LET A DÁL</p><h3 className="display mt-3 text-4xl md:text-5xl">Jedno schéma. <span className="text-mint">Více cest.</span></h3></div>
        <SchemaViewer src={src} alt={alt} trigger={<><Maximize2 /><span>Původní schéma</span></>} className="gap-2 px-3 py-2 text-sm text-mint hover:bg-foreground/10" />
      </div>
      <div className="flex flex-wrap gap-2 border-y border-foreground/20 py-4" role="group" aria-label="Vzdělávací cesty">
        {paths.map((item) => <Button key={item.id} variant="ghost" onClick={() => changePath(item.id)} aria-pressed={path === item.id} className={`h-10 gap-2 px-3 text-sm ${path === item.id ? "bg-mint text-navy hover:bg-mint/90 hover:text-navy" : "text-foreground hover:bg-foreground/10 hover:text-mint"}`}><item.icon />{item.label}</Button>)}
        <Button variant="ghost" size="icon" title="Obnovit celé schéma" aria-label="Obnovit celé schéma" className="ml-auto text-mint hover:bg-foreground/10 hover:text-mint" onClick={() => { setPath("all"); setSelected("secondary"); }}><RotateCcw /></Button>
      </div>

      <div className="education-scroll overflow-x-auto py-6" tabIndex={0} aria-label="Časová osa vzdělávání">
        <div className="education-map">
          <div className="education-landmarks">
            <div className="education-map-caption"><span className="display text-6xl text-mint">8+2</span><span className="mt-3 block text-sm text-muted-foreground">Modulární architektura<br />regionálního vzdělávání</span></div>
            {educationMilestones.map((item) => <Button variant="ghost" key={item.age} className={`education-landmark education-age-${item.age}`} aria-label={`${item.label}, ${item.age} let`} title={item.detail} onClick={() => setSelected(item.stage)}><Check /><span>{item.age} let<br /><strong>{item.label}</strong></span></Button>)}
          </div>
          <div className="education-grid">
            {educationStages.map((item) => <Button key={item.id} variant="ghost" className={`education-node education-node-${item.id} education-tone-${item.kind}`} data-selected={stage.id === item.id} data-dimmed={!isOnEducationPath(item, path)} aria-pressed={stage.id === item.id} aria-label={`${item.title} ${item.short}, ${item.start} až ${item.end} let`} aria-controls={detailId} onClick={() => setSelected(item.id)}>
              <span className="education-node-age">{item.start}<ArrowRight />{item.end} let</span>
              <span className="education-node-name">{item.title}</span>
              <span className="education-node-duration">{item.short}</span>
              <span className="education-node-qualification">{item.qualification}</span>
            </Button>)}
            <div className="education-foundation"><span>Společný základ 14–16 let</span><ArrowRight /></div>
            <div className="education-next"><GraduationCap /><span>Terciární<br />vzdělávání</span><ArrowRight /><BriefcaseBusiness /><span>Další profesní<br />vzdělávání</span><ArrowRight /></div>
          </div>
          <div className="education-age-axis"><span className="education-axis-title">Věk</span>{Array.from({ length: 16 }, (_, index) => <span key={index}>{index + 3}</span>)}</div>
          <div className="education-class-axis"><span className="education-axis-title">Třída</span>{Array.from({ length: 12 }, (_, index) => <span key={index}>{index + 1}</span>)}</div>
          <div className="education-compulsory"><span>8 let základní školy</span><span>+ 2 roky SŠ</span><strong>Povinné vzdělávání 8+2</strong></div>
          <div className="education-support"><span>Vzdělávací účty</span><span>Kariérové poradenství</span><span>Duální vzdělávání</span><span>Upskilling / Reskilling</span></div>
        </div>
      </div>

      <div id={detailId} className="education-detail grid gap-6 border-y border-foreground/20 py-7 md:grid-cols-[1fr_1.6fr]" aria-live="polite" aria-atomic="true">
        <div><p className="text-sm font-semibold text-mint">{stage.start}–{stage.end} LET · {stage.qualification}</p><h4 className="mt-3 text-3xl font-extrabold">{stage.title} <span className="text-mint">{stage.short}</span></h4><div className="mt-5 flex gap-2"><Button variant="ghost" size="icon" aria-label="Předchozí etapa" title="Předchozí etapa" onClick={() => changeStage(-1)} className="bg-foreground/10 text-mint hover:bg-foreground/20 hover:text-mint"><ChevronLeft /></Button><Button variant="ghost" size="icon" aria-label="Další etapa" title="Další etapa" onClick={() => changeStage(1)} className="bg-foreground/10 text-mint hover:bg-foreground/20 hover:text-mint"><ChevronRight /></Button><span className="self-center pl-2 text-sm text-muted-foreground">{Math.max(0, currentIndex) + 1} / {visibleStages.length}</span></div></div>
        <div><p className="text-lg leading-relaxed text-muted-foreground">{stage.description}</p><dl className="mt-5 grid gap-4 sm:grid-cols-2"><div><dt className="text-xs font-semibold text-mint">ZAMĚŘENÍ</dt><dd className="mt-2 font-semibold">{stage.focus}</dd></div><div><dt className="text-xs font-semibold text-mint">VÝSTUP / MILNÍK</dt><dd className="mt-2 flex items-start gap-2 font-semibold"><Check className="mt-0.5 h-5 w-5 shrink-0 text-mint" />{stage.outcome}</dd></div></dl></div>
      </div>
    </div>
  );
}