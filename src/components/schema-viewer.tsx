import { useEffect, useRef, useState } from "react";

const MIN_SCALE = 1;
const MAX_SCALE = 6;
const RESET = { s: 1, x: 0, y: 0 };

type View = { s: number; x: number; y: number };

const btn =
  "inline-flex h-10 w-10 shrink-0 items-center justify-center rounded bg-foreground/10 text-foreground transition-colors hover:bg-foreground/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mint";

function clampScale(s: number) {
  return Math.min(MAX_SCALE, Math.max(MIN_SCALE, s));
}

export function SchemaViewer({ src, alt, className = "" }: { src: string; alt: string; className?: string }) {
  const [open, setOpen] = useState(false);
  const [view, setView] = useState<View>(RESET);
  const [dragging, setDragging] = useState(false);
  const stageRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const dragRef = useRef<{ px: number; py: number; ox: number; oy: number } | null>(null);

  const zoomBy = (factor: number, ax = 0, ay = 0) =>
    setView((cur) => {
      const s = clampScale(cur.s * factor);
      const k = s / cur.s;
      return { s, x: ax - (ax - cur.x) * k, y: ay - (ay - cur.y) * k };
    });

  const close = () => {
    setOpen(false);
    setView(RESET);
    setDragging(false);
    dragRef.current = null;
    triggerRef.current?.focus();
  };

  useEffect(() => {
    if (!open) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        close();
      } else if (e.key === "+" || e.key === "=") {
        zoomBy(1.4);
      } else if (e.key === "-" || e.key === "_") {
        zoomBy(1 / 1.4);
      } else if (e.key === "0") {
        setView(RESET);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const el = stageRef.current;
    if (!el) return;
    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      const r = el.getBoundingClientRect();
      zoomBy(Math.exp(-e.deltaY * 0.0015), e.clientX - (r.left + r.width / 2), e.clientY - (r.top + r.height / 2));
    };
    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, [open]);

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (view.s <= 1) return;
    e.currentTarget.setPointerCapture(e.pointerId);
    dragRef.current = { px: e.clientX, py: e.clientY, ox: view.x, oy: view.y };
    setDragging(true);
  };

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const d = dragRef.current;
    if (!d) return;
    setView((cur) => ({ ...cur, x: d.ox + (e.clientX - d.px), y: d.oy + (e.clientY - d.py) }));
  };

  const endDrag = () => {
    dragRef.current = null;
    setDragging(false);
  };

  const onDoubleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = stageRef.current;
    if (!el) return;
    if (view.s > 1) {
      setView(RESET);
      return;
    }
    const r = el.getBoundingClientRect();
    zoomBy(2.5, e.clientX - (r.left + r.width / 2), e.clientY - (r.top + r.height / 2));
  };

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Otevřít schéma reformy v pop-okně se zvětšením"
        className={`group relative block w-full cursor-zoom-in overflow-hidden rounded bg-foreground ${className}`}
      >
        <img src={src} alt={alt} className="h-auto w-full" loading="lazy" />
        <span className="pointer-events-none absolute bottom-4 right-4 inline-flex items-center gap-2 rounded bg-navy/85 px-4 py-2 text-sm font-bold text-mint opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
          <PlusIcon /> Zvětšit
        </span>
      </button>
      <p className="mt-3 text-sm text-muted-foreground">
        Kliknutím se schéma otevře v pop-okně, kde ho lze zvětšit kolečkem myši nebo tlačítky a posouvat tažením.
      </p>

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={alt}
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) close();
          }}
          className="fixed inset-0 z-[100] flex flex-col bg-navy/95 backdrop-blur-sm"
        >
          <div className="flex items-center justify-between gap-4 border-b border-foreground/10 px-4 py-3 md:px-8">
            <p className="truncate text-sm font-semibold uppercase tracking-widest text-mint">Schéma reformy 8PLUS2</p>
            <div className="flex items-center gap-2">
              <span className="mr-1 hidden text-sm font-bold tabular-nums sm:block">{Math.round(view.s * 100)} %</span>
              <button type="button" className={btn} onClick={() => zoomBy(1 / 1.4)} aria-label="Zmenšit">
                <MinusIcon />
              </button>
              <button type="button" className={btn} onClick={() => zoomBy(1.4)} aria-label="Zvětšit">
                <PlusIcon />
              </button>
              <button type="button" className={btn} onClick={() => setView(RESET)} aria-label="Původní velikost">
                <ResetIcon />
              </button>
              <button ref={closeRef} type="button" className={`${btn} bg-mint text-navy hover:bg-mint/80`} onClick={close} aria-label="Zavřít">
                <CloseIcon />
              </button>
            </div>
          </div>

          <div
            ref={stageRef}
            className="relative flex flex-1 items-center justify-center overflow-hidden p-4"
            style={{
              touchAction: "none",
              cursor: view.s > 1 ? (dragging ? "grabbing" : "grab") : "zoom-in",
            }}
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={endDrag}
            onPointerCancel={endDrag}
            onDoubleClick={onDoubleClick}
            onClick={(e) => {
              if (e.target === e.currentTarget && view.s <= 1) close();
            }}
          >
            <img
              src={src}
              alt={alt}
              draggable={false}
              className="max-h-full max-w-full select-none object-contain"
              style={{
                transform: `translate3d(${view.x}px, ${view.y}px, 0) scale(${view.s})`,
                transformOrigin: "center center",
                transition: dragging ? "none" : "transform 120ms ease-out",
              }}
            />
          </div>

          <p className="border-t border-foreground/10 px-4 py-3 text-sm text-muted-foreground md:px-8">
            Kolečkem myši přibližujete, tažením posouváte, dvojeklik přepíná velikost. Pop-okno zavřete tlačítkem zavřít nebo klávesou Esc.
          </p>
        </div>
      )}
    </>
  );
}

function PlusIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true">
      <path d="M12 5v14M5 12h14" />
    </svg>
  );
}

function MinusIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true">
      <path d="M5 12h14" />
    </svg>
  );
}

function ResetIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 12a9 9 0 1 0 3-6.7L3 8" />
      <path d="M3 3v5h5" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true">
      <path d="M6 6l12 12M18 6L6 18" />
    </svg>
  );
}
