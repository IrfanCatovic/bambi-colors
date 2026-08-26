"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { Project } from "@/data/types";
import { HERO_AUTOPLAY_MS } from "@/data/homepage";
import { cn } from "@/lib/utils";

type HeroSliderProps = {
  projects: Project[];
};

/**
 * Equal-weight project hero carousel.
 * Autoplay ~6s; pauses on interaction / hover / reduced motion.
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
      className="relative isolate min-h-[min(92vh,52rem)] overflow-hidden bg-ink text-white"
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
          <Image
            src={project.images.hero}
            alt={project.images.heroAlt}
            fill
            priority={i === 0}
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink/88 via-ink/55 to-ink/25" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-ink/30" />
        </div>
      ))}

      <div className="relative z-10 mx-auto flex min-h-[min(92vh,52rem)] w-full max-w-7xl flex-col justify-end px-5 pb-16 pt-28 sm:px-8 sm:pb-20 lg:px-10 lg:pb-24">
        <div className="max-w-2xl">
          <p className="mb-4 text-[0.7rem] font-medium uppercase tracking-[0.22em] text-brand-red-soft sm:text-xs">
            {active.heroLabel}
          </p>
          <h1 className="font-display text-4xl font-medium leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl">
            {active.heroHeading}
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">
            {active.heroDescription}
          </p>
          <Link
            href={active.href}
            className="mt-8 inline-flex items-center gap-2 border border-white/30 bg-white/5 px-5 py-3 text-sm font-medium tracking-wide text-white transition-colors duration-200 hover:border-white hover:bg-white hover:text-ink"
          >
            Pogledajte projekat
          </Link>
        </div>

        <div className="mt-12 flex flex-col gap-6 sm:mt-14 sm:flex-row sm:items-end sm:justify-between">
          <div
            className="flex items-center gap-2"
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
                className="group relative h-1 w-12 overflow-hidden bg-white/25 sm:w-16"
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

          <div className="flex items-center gap-2">
            <button
              type="button"
              className="inline-flex size-11 items-center justify-center border border-white/25 text-white transition-colors hover:border-white hover:bg-white hover:text-ink"
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
              className="inline-flex size-11 items-center justify-center border border-white/25 text-white transition-colors hover:border-white hover:bg-white hover:text-ink"
              aria-label="Sljedeći projekat"
              onClick={() => {
                setPaused(true);
                next();
              }}
            >
              <ChevronRight className="size-5" aria-hidden />
            </button>
            <p
              className="ml-3 text-xs tracking-[0.18em] text-white/55"
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
