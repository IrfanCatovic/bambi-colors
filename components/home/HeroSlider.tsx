"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { Project } from "@/data/types";
import { HERO_AUTOPLAY_MS } from "@/data/homepage";
import { ProjectVisual } from "@/components/ui/ProjectVisual";
import { cn } from "@/lib/utils";

type HeroSliderProps = {
  projects: Project[];
};

/**
 * Equal-weight project hero carousel — premium opening statement.
 */
export function HeroSlider({ projects }: HeroSliderProps) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [progressKey, setProgressKey] = useState(0);
  const touchStartX = useRef<number | null>(null);

  const count = projects.length;
  const active = projects[index];

  const goTo = useCallback(
    (nextIndex: number) => {
      setIndex(((nextIndex % count) + count) % count);
      setProgressKey((key) => key + 1);
    },
    [count],
  );

  const next = useCallback(() => goTo(index + 1), [goTo, index]);
  const prev = useCallback(() => goTo(index - 1), [goTo, index]);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (paused || media.matches || count < 2) return;

    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % count);
      setProgressKey((key) => key + 1);
    }, HERO_AUTOPLAY_MS);

    return () => window.clearInterval(timer);
  }, [paused, count, progressKey]);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "ArrowRight") {
        event.preventDefault();
        setPaused(true);
        next();
      }
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        setPaused(true);
        prev();
      }
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [next, prev]);

  if (!active) return null;

  return (
    <section
      className="relative isolate min-h-[min(94vh,58rem)] overflow-hidden bg-ink text-white"
      aria-roledescription="carousel"
      aria-label="Aktuelni projekti"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => {
        setPaused(false);
        setProgressKey((key) => key + 1);
      }}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node)) {
          setPaused(false);
          setProgressKey((key) => key + 1);
        }
      }}
      onTouchStart={(event) => {
        touchStartX.current = event.changedTouches[0]?.clientX ?? null;
      }}
      onTouchEnd={(event) => {
        const start = touchStartX.current;
        const end = event.changedTouches[0]?.clientX;
        touchStartX.current = null;
        if (start == null || end == null) return;
        const delta = end - start;
        if (Math.abs(delta) < 48) return;
        setPaused(true);
        if (delta < 0) next();
        else prev();
      }}
    >
      {projects.map((project, i) => (
        <div
          key={project.id}
          className={cn(
            "absolute inset-0 transition-opacity duration-700 ease-out",
            i === index ? "opacity-100" : "pointer-events-none opacity-0",
          )}
          aria-hidden={i !== index}
        >
          <ProjectVisual
            src={project.images.hero}
            alt={project.images.heroAlt}
            title={project.sectionLabel}
            subtitle={project.sectionTitle}
            aspectClassName="h-full w-full"
            priority={i === 0}
            tone="hero"
            className="absolute inset-0"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink/90 via-ink/55 to-ink/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-ink/35" />
        </div>
      ))}

      <div className="relative z-10 mx-auto flex min-h-[min(94vh,58rem)] w-full max-w-[1320px] flex-col justify-end px-5 pb-16 pt-32 sm:px-8 sm:pb-20 lg:px-10 lg:pb-28">
        <div className="max-w-3xl">
          <p className="mb-5 text-xs font-medium uppercase tracking-[0.24em] text-brand-red-soft sm:text-[0.8rem]">
            {active.heroLabel}
          </p>
          <h1 className="font-display text-[2.65rem] font-medium leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl xl:text-[4.75rem]">
            {active.heroHeading}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/82 sm:text-xl">
            {active.heroDescription}
          </p>
          <Link
            href={active.href}
            className="mt-9 inline-flex border border-white/35 bg-white/5 px-6 py-3.5 text-[0.95rem] font-medium tracking-wide text-white transition-colors duration-200 hover:border-white hover:bg-white hover:text-ink"
          >
            Pogledajte projekat
          </Link>
        </div>

        <div className="mt-14 flex flex-col gap-7 sm:mt-16 sm:flex-row sm:items-end sm:justify-between">
          <div
            className="flex items-center gap-2.5"
            role="tablist"
            aria-label="Slajdovi projekata"
          >
            {projects.map((project, i) => (
              <button
                key={project.id}
                type="button"
                role="tab"
                aria-selected={i === index}
                aria-label={`${project.name}, slajd ${i + 1} od ${count}`}
                className="relative h-1.5 w-14 overflow-hidden bg-white/30 sm:w-20"
                onClick={() => {
                  setPaused(true);
                  goTo(i);
                }}
              >
                <span
                  key={i === index ? progressKey : `${project.id}-idle`}
                  className={cn(
                    "absolute inset-y-0 left-0 bg-brand-red",
                    i === index
                      ? paused
                        ? "w-full"
                        : "animate-hero-progress"
                      : i < index
                        ? "w-full"
                        : "w-0",
                  )}
                />
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              className="inline-flex size-12 items-center justify-center border border-white/35 text-white transition-colors hover:border-white hover:bg-white hover:text-ink"
              aria-label="Prethodni projekat"
              onClick={() => {
                setPaused(true);
                prev();
              }}
            >
              <ChevronLeft className="size-5" aria-hidden />
            </button>
            <button
              type="button"
              className="inline-flex size-12 items-center justify-center border border-white/35 text-white transition-colors hover:border-white hover:bg-white hover:text-ink"
              aria-label="Sledeći projekat"
              onClick={() => {
                setPaused(true);
                next();
              }}
            >
              <ChevronRight className="size-5" aria-hidden />
            </button>
            <p
              className="ml-2 text-sm tracking-[0.2em] text-white/60"
              aria-live="polite"
            >
              {String(index + 1).padStart(2, "0")} /{" "}
              {String(count).padStart(2, "0")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
