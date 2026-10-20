import { useEffect, useRef, useState, type ReactNode, type ElementType } from "react";

/** Fades/slides children in once they enter the viewport. */
export function Reveal({ children, delay = 0, className = "", as: Tag = "div" }: { children: ReactNode; delay?: number; className?: string; as?: ElementType }) {
  const ref = useRef<HTMLElement>(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => { if (e?.isIntersecting) { setShown(true); io.disconnect(); } }, { threshold: 0.15 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <Tag ref={ref} data-shown={shown} style={{ transitionDelay: `${delay}ms` }} className={`v2-reveal ${className}`}>
      {children}
    </Tag>
  );
}

/** Translates the element by scroll offset × speed (parallax). */
export function Parallax({ children, speed = 0.3, className = "" }: { children: ReactNode; speed?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let frame = 0;
    const update = () => {
      frame = 0;
      const el = ref.current;
      if (!el) return;
      const rect = el.parentElement?.getBoundingClientRect();
      if (!rect) return;
      const offset = rect.top + rect.height / 2 - window.innerHeight / 2;
      el.style.transform = `translate3d(0, ${(-offset * speed).toFixed(1)}px, 0)`;
    };
    const onScroll = () => { if (!frame) frame = requestAnimationFrame(update); };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => { window.removeEventListener("scroll", onScroll); window.removeEventListener("resize", onScroll); cancelAnimationFrame(frame); };
  }, [speed]);
  return <div ref={ref} className={`will-change-transform ${className}`}>{children}</div>;
}
