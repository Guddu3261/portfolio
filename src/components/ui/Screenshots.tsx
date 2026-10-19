"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { createPortal } from "react-dom";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

export interface Shot {
  src: string;
  alt: string;
  caption?: string;
  width: number;
  height: number;
}

export default function Screenshots({ shots, phone = false }: { shots: Shot[]; phone?: boolean }) {
  const strip = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState<number | null>(null);

  const scrollBy = (dir: 1 | -1) => {
    const el = strip.current;
    if (el) el.scrollBy({ left: dir * el.clientWidth * 0.8, behavior: "smooth" });
  };

  const step = useCallback(
    (dir: 1 | -1) => setOpen((i) => (i === null ? i : (i + dir + shots.length) % shots.length)),
    [shots.length],
  );

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null);
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, step]);

  return (
    <>
      <div className="group/shots @container relative mb-6">
        <div
          ref={strip}
          className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {shots.map((s, i) => (
            <button
              key={s.src}
              onClick={() => setOpen(i)}
              aria-label={`Open screenshot: ${s.alt}`}
              className={`group/shot shrink-0 snap-start text-left ${phone ? "w-[46%] sm:w-[38%]" : "w-[88%] @2xl:w-[48%]"}`}
            >
              <div className={`overflow-hidden border border-zinc-700 bg-zinc-950 shadow-lg transition group-hover/shot:border-blue-400/60 ${phone ? "rounded-[1.4rem] p-1" : "rounded-xl"}`}>
                {!phone && (
                  <div className="flex items-center gap-1.5 border-b border-zinc-800 bg-zinc-900 px-3 py-2">
                    <span className="h-2 w-2 rounded-full bg-red-500/70" />
                    <span className="h-2 w-2 rounded-full bg-yellow-500/70" />
                    <span className="h-2 w-2 rounded-full bg-green-500/70" />
                  </div>
                )}
                <Image
                  src={s.src}
                  alt={s.alt}
                  width={s.width}
                  height={s.height}
                  sizes={phone ? "(min-width:1024px) 220px, 45vw" : "(min-width:1024px) 520px, 88vw"}
                  className={`h-auto w-full ${phone ? "rounded-[1.1rem]" : ""}`}
                />
              </div>
              {s.caption && <p className="mt-2 text-center font-mono text-xs text-zinc-500">{s.caption}</p>}
            </button>
          ))}
        </div>

        {shots.length > 2 && (
          <>
            <button onClick={() => scrollBy(-1)} aria-label="Previous screenshots" className="absolute left-1 top-1/2 hidden -translate-y-1/2 rounded-full border border-zinc-600 bg-zinc-900/90 p-1.5 text-zinc-200 opacity-0 transition hover:bg-zinc-800 group-hover/shots:opacity-100 sm:block">
              <ChevronLeft size={18} />
            </button>
            <button onClick={() => scrollBy(1)} aria-label="Next screenshots" className="absolute right-1 top-1/2 hidden -translate-y-1/2 rounded-full border border-zinc-600 bg-zinc-900/90 p-1.5 text-zinc-200 opacity-0 transition hover:bg-zinc-800 group-hover/shots:opacity-100 sm:block">
              <ChevronRight size={18} />
            </button>
          </>
        )}
      </div>

      {open !== null &&
        createPortal(
          <div role="dialog" aria-modal="true" className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm" onClick={() => setOpen(null)}>
            <button onClick={() => setOpen(null)} aria-label="Close" className="absolute right-4 top-4 rounded-full bg-zinc-900 p-2 text-white hover:bg-zinc-800">
              <X size={20} />
            </button>
            {shots.length > 1 && (
              <>
                <button onClick={(e) => { e.stopPropagation(); step(-1); }} aria-label="Previous" className="absolute left-3 rounded-full bg-zinc-900 p-2 text-white hover:bg-zinc-800 sm:left-8">
                  <ChevronLeft size={22} />
                </button>
                <button onClick={(e) => { e.stopPropagation(); step(1); }} aria-label="Next" className="absolute right-3 rounded-full bg-zinc-900 p-2 text-white hover:bg-zinc-800 sm:right-8">
                  <ChevronRight size={22} />
                </button>
              </>
            )}
            <figure className="max-h-full" onClick={(e) => e.stopPropagation()}>
              <Image
                src={shots[open].src}
                alt={shots[open].alt}
                width={shots[open].width}
                height={shots[open].height}
                sizes="90vw"
                className="max-h-[84vh] max-w-[94vw] w-auto rounded-2xl border border-zinc-700"
              />
              <figcaption className="mt-3 text-center text-sm text-zinc-400">
                {shots[open].caption ?? shots[open].alt} · {open + 1}/{shots.length}
              </figcaption>
            </figure>
          </div>,
          document.body,
        )}
    </>
  );
}
