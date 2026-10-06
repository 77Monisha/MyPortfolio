"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { PROFILE } from "@/lib/portfolio-data";
import { cn } from "@/lib/utils";
import { ButtonLink } from "../primitives";
import { ViewToggle } from "../view-mode";
import { CommandPaletteTrigger } from "./command-palette";
import { DEV_SECTIONS } from "./sections";

// Highlights the tab for whichever section sits in the top band of the viewport.
function useActiveSection() {
  const [active, setActive] = useState(DEV_SECTIONS[0].id);

  useEffect(() => {
    const visible = new Set();
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) =>
          entry.isIntersecting
            ? visible.add(entry.target.id)
            : visible.delete(entry.target.id),
        );
        const atBottom =
          window.innerHeight + window.scrollY >=
          document.documentElement.scrollHeight - 4;
        const current = atBottom
          ? DEV_SECTIONS.at(-1)
          : DEV_SECTIONS.find((s) => visible.has(s.id));
        if (current) setActive(current.id);
      },
      { rootMargin: "-120px 0px -55% 0px" },
    );
    DEV_SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return active;
}

export default function DevHeader() {
  const active = useActiveSection();

  return (
    <header className="sticky top-0 z-50 border-b border-pf-border bg-pf-surface/90 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-6xl items-center gap-3 px-4 md:px-8">
        <a
          href="#overview"
          className="flex min-w-0 items-center gap-2.5 font-code text-[13px]"
        >
          <span
            aria-hidden
            className="grid size-7 shrink-0 place-items-center rounded-full border border-pf-border bg-pf-card font-display text-[11px] text-pf-accent"
          >
            MC
          </span>
          <span className="truncate text-pf-muted">
            {PROFILE.handle}
            <span aria-hidden className="px-1.5">/</span>
            <span className="text-pf-text">portfolio</span>
          </span>
        </a>

        <div className="ml-auto flex items-center gap-3">
          <CommandPaletteTrigger />
          <ViewToggle className="hidden sm:inline-flex" />
          <ButtonLink
            href={PROFILE.resume}
            variant="primary"
            size="sm"
            icon={ArrowUpRight}
            external
            className="hidden md:inline-flex"
          >
            Resume
          </ButtonLink>
        </div>
      </div>

      <nav aria-label="Sections" className="mx-auto max-w-6xl px-2 md:px-6">
        <ul className="-mb-px flex overflow-x-auto [scrollbar-width:none]">
          {DEV_SECTIONS.map(({ id, label, icon: Icon, count }) => {
            const current = active === id;
            return (
              <li key={id}>
                <a
                  href={`#${id}`}
                  aria-current={current ? "location" : undefined}
                  className={cn(
                    "flex items-center gap-2 whitespace-nowrap border-b-2 px-3 py-2.5 text-[13px] transition-colors",
                    current
                      ? "border-pf-orange text-pf-text"
                      : "border-transparent text-pf-muted hover:text-pf-text",
                  )}
                >
                  <Icon aria-hidden className="size-4" />
                  {label}
                  {count != null && (
                    <span className="rounded-full bg-pf-border px-1.5 py-px font-code text-[11px] text-pf-text">
                      {count}
                    </span>
                  )}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
