"use client";

import { useEffect, useId, useRef, useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import type { NavLink } from "@/data/types";
import { cn } from "@/lib/utils";

type ProjectsDropdownProps = {
  label: string;
  items: NavLink[];
  className?: string;
  active?: boolean;
};

/**
 * Keyboard-accessible projects dropdown for desktop navigation.
 * Supports Escape, ArrowUp/ArrowDown, Home/End, and click-outside.
 */
export function ProjectsDropdown({
  label,
  items,
  className,
  active = false,
}: ProjectsDropdownProps) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const itemRefs = useRef<Array<HTMLAnchorElement | null>>([]);
  const menuId = useId();

  useEffect(() => {
    if (!open) return;

    function handlePointerDown(event: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    }

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  function focusItem(index: number) {
    const clamped = (index + items.length) % items.length;
    itemRefs.current[clamped]?.focus();
  }

  function onMenuKeyDown(event: React.KeyboardEvent<HTMLDivElement>) {
    const currentIndex = itemRefs.current.findIndex(
      (el) => el === document.activeElement,
    );

    switch (event.key) {
      case "ArrowDown":
        event.preventDefault();
        focusItem(currentIndex < 0 ? 0 : currentIndex + 1);
        break;
      case "ArrowUp":
        event.preventDefault();
        focusItem(currentIndex < 0 ? items.length - 1 : currentIndex - 1);
        break;
      case "Home":
        event.preventDefault();
        focusItem(0);
        break;
      case "End":
        event.preventDefault();
        focusItem(items.length - 1);
        break;
      default:
        break;
    }
  }

  return (
    <div ref={containerRef} className={cn("relative", className)}>
      <button
        ref={buttonRef}
        type="button"
        className={cn(
          "inline-flex items-center gap-1 text-[0.95rem] font-medium tracking-wide transition-colors hover:text-brand-red",
          open || active ? "text-brand-red" : "text-ink",
        )}
        aria-expanded={open}
        aria-haspopup="menu"
        aria-controls={menuId}
        onClick={() => setOpen((value) => !value)}
        onKeyDown={(event) => {
          if (event.key === "ArrowDown" && !open) {
            event.preventDefault();
            setOpen(true);
            requestAnimationFrame(() => focusItem(0));
          }
        }}
      >
        {label}
        <ChevronDown
          className={cn(
            "size-3.5 transition-transform duration-200",
            open && "rotate-180",
          )}
          aria-hidden
        />
      </button>

      {open ? (
        <div
          id={menuId}
          role="menu"
          aria-label={label}
          className="absolute left-0 top-full z-50 mt-3 min-w-[12rem] border border-line bg-white py-2 shadow-sm"
          onKeyDown={onMenuKeyDown}
        >
          {items.map((item, index) => (
            <Link
              key={item.href}
              href={item.href}
              role="menuitem"
              ref={(el) => {
                itemRefs.current[index] = el;
              }}
              className="block px-4 py-2.5 text-sm text-ink transition-colors hover:bg-surface hover:text-brand-red"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      ) : null}
    </div>
  );
}
