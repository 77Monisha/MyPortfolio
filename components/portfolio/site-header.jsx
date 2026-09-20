"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { NAV_LINKS, PROFILE } from "@/lib/portfolio-data";
import { ButtonLink } from "./primitives";
import { ViewToggle } from "./view-mode";

export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-pf-border bg-pf-bg/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 md:px-8">
        <a
          href="#top"
          className="font-code text-[13px] font-medium tracking-[0.08em] text-pf-text"
        >
          {PROFILE.wordmark}
        </a>

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-8 text-[13px] text-pf-muted">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="transition-colors hover:text-pf-text"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <ViewToggle />
          <ButtonLink
            href={PROFILE.resume}
            variant="primary"
            size="sm"
            icon={ArrowUpRight}
            external
          >
            Resume
          </ButtonLink>
        </div>

        <button
          type="button"
          className="-mr-2 rounded-md p-2 text-pf-text lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open && (
        <nav
          id="mobile-menu"
          aria-label="Mobile"
          className="border-t border-pf-border bg-pf-bg px-4 pb-6 pt-2 lg:hidden"
        >
          <ul className="flex flex-col">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block border-b border-pf-border py-3 text-sm text-pf-text"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <ButtonLink
            href={PROFILE.resume}
            variant="primary"
            icon={ArrowUpRight}
            external
            className="mt-5 w-full"
          >
            Resume
          </ButtonLink>
        </nav>
      )}

    </header>
  );
}
