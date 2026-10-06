import { cn } from "@/lib/utils";

export function DevSectionHeading({ id, icon: Icon, children, aside }) {
  return (
    <div className="flex flex-wrap items-baseline justify-between gap-3">
      <h2
        id={id}
        className="flex items-center gap-2 text-base font-medium text-pf-text"
      >
        {Icon && <Icon aria-hidden className="size-4 self-center text-pf-muted" />}
        {children}
      </h2>
      {aside}
    </div>
  );
}

/** A GitHub-style file view: path breadcrumb header over a bordered body. */
export function FileCard({ icon: Icon, path, meta, children, className }) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-xl border border-pf-border bg-pf-card",
        className,
      )}
    >
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-pf-border bg-pf-surface px-4 py-2.5">
        <p className="flex min-w-0 items-center gap-2 font-code text-xs text-pf-muted">
          {Icon && <Icon aria-hidden className="size-3.5 shrink-0" />}
          {path.map((segment, i) => (
            <span key={segment} className="flex items-center gap-2">
              {i > 0 && <span aria-hidden>/</span>}
              <span className={i === path.length - 1 ? "text-pf-text" : undefined}>
                {segment}
              </span>
            </span>
          ))}
        </p>
        {meta && <p className="font-code text-[11px] text-pf-muted">{meta}</p>}
      </div>
      {children}
    </div>
  );
}

export function TopicList({ items, label, className }) {
  return (
    <ul className={cn("flex flex-wrap gap-1.5", className)} aria-label={label}>
      {items.map((item) => (
        <li
          key={item}
          className="rounded-full bg-pf-accent/10 px-2.5 py-1 font-code text-[11px] leading-none text-pf-accent"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}
