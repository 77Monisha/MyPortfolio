"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

// Professional (the GitHub-style profile at /, also served at /p2) is the
// default; Developer (/p1) is the more detailed alternative. Each view is its
// own route, so the toggle is navigation rather than local state.
const VIEWS = [
  { href: "/", label: "Professional", paths: ["/", "/p2"] },
  { href: "/p1", label: "Developer", paths: ["/p1"] },
];

export function ViewToggle({ className, fullWidth = false }) {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Portfolio view"
      className={cn(
        "inline-flex rounded-full border border-pf-border bg-pf-bg p-1",
        fullWidth && "flex w-full",
        className,
      )}
    >
      <ul className={cn("flex", fullWidth && "w-full")}>
        {VIEWS.map((view) => {
          const active = view.paths.includes(pathname);
          return (
            <li key={view.href} className={cn(fullWidth && "flex-1")}>
              <Link
                href={view.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "block rounded-full px-4 py-1.5 text-xs font-medium transition-colors duration-200",
                  fullWidth && "py-2.5 text-center text-sm",
                  active
                    ? "bg-pf-accent text-pf-bg"
                    : "text-pf-muted hover:text-pf-text",
                )}
              >
                {view.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
