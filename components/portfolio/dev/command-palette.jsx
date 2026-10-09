"use client";

import {
  createContext,
  useContext,
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
  useSyncExternalStore,
} from "react";
import { useRouter } from "next/navigation";
import {
  ArrowUpRight,
  Copy,
  CornerDownLeft,
  Download,
  LayoutTemplate,
  Search,
} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { PROFILE, PROJECTS, SIDE_PROJECTS } from "@/lib/portfolio-data";
import { cn } from "@/lib/utils";
import { DEV_SECTIONS } from "./sections";

const openExternal = (url) => window.open(url, "_blank", "noopener,noreferrer");

const COMMANDS = [
  ...DEV_SECTIONS.map((section) => ({
    id: `go-${section.id}`,
    group: "Jump to",
    label: section.label,
    icon: section.icon,
    run: () => {
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      document
        .getElementById(section.id)
        ?.scrollIntoView({ behavior: reduce ? "auto" : "smooth" });
      history.replaceState(null, "", `#${section.id}`);
    },
  })),
  ...[...PROJECTS, ...SIDE_PROJECTS].map((project) => ({
    id: `project-${project.id}`,
    group: "Projects",
    label: `Open ${project.name}`,
    keywords: `${project.tagline} ${project.tech.join(" ")} demo live`,
    icon: ArrowUpRight,
    external: true,
    run: () => openExternal(project.live),
  })),
  {
    id: "copy-email",
    group: "Actions",
    label: "Copy email address",
    keywords: "contact mail",
    icon: Copy,
    run: async ({ announce }) => {
      try {
        await navigator.clipboard.writeText(PROFILE.email);
        announce("Email copied to clipboard");
      } catch {
        window.location.href = `mailto:${PROFILE.email}`;
      }
    },
  },
  {
    id: "resume",
    group: "Actions",
    label: "Download resume",
    keywords: "cv pdf",
    icon: Download,
    run: () => {
      const a = document.createElement("a");
      a.href = PROFILE.resume;
      a.download = "";
      a.click();
    },
  },
  {
    id: "developer",
    group: "Actions",
    label: "Switch to Developer view",
    keywords: "detailed view toggle",
    icon: LayoutTemplate,
    run: ({ router }) => router.push("/p1"),
  },
  {
    id: "github",
    group: "Links",
    label: "GitHub profile",
    keywords: "code source repositories",
    icon: FaGithub,
    external: true,
    run: () => openExternal(PROFILE.github),
  },
  {
    id: "linkedin",
    group: "Links",
    label: "LinkedIn",
    keywords: "contact network",
    icon: FaLinkedin,
    external: true,
    run: () => openExternal(PROFILE.linkedin),
  },
];

function filterCommands(query) {
  const q = query.trim().toLowerCase();
  if (!q) return COMMANDS;
  return COMMANDS.filter((cmd) =>
    `${cmd.label} ${cmd.group} ${cmd.keywords ?? ""}`.toLowerCase().includes(q),
  );
}

// Platform never changes during a session, so there is nothing to subscribe to.
const subscribeNoop = () => () => {};
const isMac = () => /Mac|iPhone|iPad/.test(navigator.platform);

const PaletteContext = createContext(null);

export function CommandPaletteProvider({ children }) {
  const router = useRouter();
  const dialogRef = useRef(null);
  const listRef = useRef(null);
  const statusTimer = useRef(0);
  const listId = useId();
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const [status, setStatus] = useState("");
  const mac = useSyncExternalStore(subscribeNoop, isMac, () => true);

  const results = useMemo(() => filterCommands(query), [query]);
  const groups = useMemo(() => {
    const byGroup = new Map();
    results.forEach((cmd, index) => {
      if (!byGroup.has(cmd.group)) byGroup.set(cmd.group, []);
      byGroup.get(cmd.group).push({ cmd, index });
    });
    return [...byGroup];
  }, [results]);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (open && !dialog.open) dialog.showModal();
    if (!open && dialog.open) dialog.close();
  }, [open]);

  useEffect(() => {
    const onKey = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((v) => !v);
        return;
      }
      const t = e.target;
      const typing =
        t instanceof HTMLElement &&
        (t.isContentEditable || ["INPUT", "TEXTAREA", "SELECT"].includes(t.tagName));
      if (e.key === "/" && !typing) {
        e.preventDefault();
        setOpen(true);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    listRef.current
      ?.querySelector('[aria-selected="true"]')
      ?.scrollIntoView({ block: "nearest" });
  }, [activeIndex]);

  useEffect(() => () => clearTimeout(statusTimer.current), []);

  const announce = (message) => {
    setStatus(message);
    clearTimeout(statusTimer.current);
    statusTimer.current = setTimeout(() => setStatus(""), 2200);
  };

  // Fired for Escape, backdrop clicks and programmatic closes alike.
  const onClose = () => {
    setOpen(false);
    setQuery("");
    setActiveIndex(0);
  };

  const execute = (cmd) => {
    dialogRef.current.close();
    cmd.run({ router, announce });
  };

  const onInputKeyDown = (e) => {
    const count = results.length;
    if (e.key === "ArrowDown" || e.key === "ArrowUp") {
      e.preventDefault();
      if (!count) return;
      const step = e.key === "ArrowDown" ? 1 : -1;
      setActiveIndex((i) => (i + step + count) % count);
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (results[activeIndex]) execute(results[activeIndex]);
    }
  };

  const optionId = (index) => `${listId}-option-${index}`;

  return (
    <PaletteContext.Provider value={{ openPalette: () => setOpen(true), mac }}>
      {children}

      <dialog
        ref={dialogRef}
        aria-label="Command palette"
        onClose={onClose}
        onClick={(e) => e.target === e.currentTarget && dialogRef.current.close()}
        className="mx-auto mt-[12vh] w-[min(36rem,calc(100%-2rem))] overflow-hidden rounded-xl border border-pf-border bg-pf-card p-0 text-pf-text shadow-[0_40px_120px_-30px_rgb(0_0_0/0.9)] backdrop:bg-black/70"
      >
        <div className="flex items-center gap-3 border-b border-pf-border px-4">
          <Search aria-hidden className="size-4 shrink-0 text-pf-muted" />
          <input
            type="text"
            role="combobox"
            aria-expanded="true"
            aria-controls={listId}
            aria-autocomplete="list"
            aria-activedescendant={
              results[activeIndex] ? optionId(activeIndex) : undefined
            }
            aria-label="Search commands"
            placeholder="Type a command or search…"
            autoComplete="off"
            spellCheck={false}
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setActiveIndex(0);
            }}
            onKeyDown={onInputKeyDown}
            className="pf-palette-input h-12 min-w-0 flex-1 bg-transparent text-sm text-pf-text placeholder:text-pf-muted"
          />
          <kbd className="rounded border border-pf-border px-1.5 py-0.5 font-code text-[10px] text-pf-muted">
            esc
          </kbd>
        </div>

        <div
          ref={listRef}
          id={listId}
          role="listbox"
          aria-label="Commands"
          className="max-h-[min(60vh,24rem)] overflow-y-auto p-2"
        >
          {groups.map(([group, items]) => (
            <div key={group} role="group" aria-label={group}>
              <p
                aria-hidden
                className="px-2.5 pb-1.5 pt-3 font-code text-[10px] uppercase tracking-[0.18em] text-pf-muted"
              >
                {group}
              </p>
              {items.map(({ cmd, index }) => {
                const active = index === activeIndex;
                const Icon = cmd.icon;
                return (
                  <div
                    key={cmd.id}
                    id={optionId(index)}
                    role="option"
                    aria-selected={active}
                    onMouseMove={() => setActiveIndex(index)}
                    onClick={() => execute(cmd)}
                    className={cn(
                      "flex cursor-pointer items-center gap-3 rounded-md px-2.5 py-2 text-sm",
                      active ? "bg-pf-border/70 text-pf-text" : "text-pf-muted",
                    )}
                  >
                    <Icon aria-hidden className="size-4 shrink-0" />
                    <span className="flex-1 truncate">
                      {cmd.label}
                      {cmd.external && <span className="sr-only"> (opens in a new tab)</span>}
                    </span>
                    {active && (
                      <CornerDownLeft aria-hidden className="size-3.5 text-pf-muted" />
                    )}
                  </div>
                );
              })}
            </div>
          ))}
          {results.length === 0 && (
            <p className="px-3 py-10 text-center text-sm text-pf-muted">
              No results for “{query}”.
            </p>
          )}
        </div>
      </dialog>

      <p
        role="status"
        className={cn(
          "pointer-events-none fixed bottom-6 left-1/2 z-60 -translate-x-1/2 rounded-full border border-pf-border bg-pf-card px-4 py-2 font-code text-xs text-pf-text transition-opacity duration-200",
          status ? "opacity-100" : "opacity-0",
        )}
      >
        {status}
      </p>
    </PaletteContext.Provider>
  );
}

export function useCommandPalette() {
  const ctx = useContext(PaletteContext);
  if (!ctx)
    throw new Error("useCommandPalette must be used inside CommandPaletteProvider");
  return ctx;
}

export function CommandPaletteTrigger({ className }) {
  const { openPalette, mac } = useCommandPalette();
  return (
    <button
      type="button"
      onClick={openPalette}
      aria-haspopup="dialog"
      aria-keyshortcuts="Meta+K Control+K /"
      className={cn(
        "flex items-center gap-2 rounded-lg border border-pf-border bg-pf-bg px-2.5 py-1.5 text-xs text-pf-muted transition-colors hover:border-pf-muted hover:text-pf-text",
        className,
      )}
    >
      <Search aria-hidden className="size-3.5" />
      <span className="hidden md:inline">Search or jump to…</span>
      <span className="sr-only md:hidden">Open command palette</span>
      <kbd className="hidden rounded border border-pf-border px-1.5 font-code text-[10px] md:inline">
        {mac ? "⌘K" : "Ctrl K"}
      </kbd>
    </button>
  );
}
