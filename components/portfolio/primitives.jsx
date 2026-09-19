import { cn } from "@/lib/utils";

export function Eyebrow({ children, className }) {
  return (
    <p
      className={cn(
        "font-code text-[11px] uppercase tracking-[0.22em] text-pf-muted",
        className,
      )}
    >
      {children}
    </p>
  );
}

export function SectionTitle({ children, className, as: Tag = "h2", ...rest }) {
  return (
    <Tag
      {...rest}
      className={cn(
        "font-display text-[clamp(2rem,4vw,2.75rem)] leading-[1.05] tracking-[-0.02em] text-pf-text",
        className,
      )}
    >
      {children}
    </Tag>
  );
}

export function Tag({ children }) {
  return (
    <li className="rounded-md border border-pf-border bg-pf-bg/60 px-2 py-1 font-code text-[11px] leading-none text-pf-muted">
      {children}
    </li>
  );
}

export function TagList({ items, className, label, ...rest }) {
  return (
    <ul
      {...rest}
      className={cn("flex flex-wrap gap-1.5", className)}
      aria-label={label}
    >
      {items.map((item) => (
        <Tag key={item}>{item}</Tag>
      ))}
    </ul>
  );
}

const BUTTON_VARIANTS = {
  primary:
    "bg-pf-accent text-pf-bg border-pf-accent hover:bg-pf-text hover:border-pf-text",
  secondary:
    "border-pf-border bg-transparent text-pf-text hover:border-pf-muted hover:bg-white/[0.03]",
};

export function ButtonLink({
  href,
  children,
  variant = "secondary",
  size = "md",
  className,
  icon: Icon,
  external,
  ...rest
}) {
  return (
    <a
      href={href}
      {...(external && { target: "_blank", rel: "noopener noreferrer" })}
      className={cn(
        "group inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg border font-medium transition-colors duration-200",
        size === "sm" ? "px-3 py-1.5 text-xs" : "px-5 py-3 text-sm",
        BUTTON_VARIANTS[variant],
        className,
      )}
      {...rest}
    >
      {children}
      {Icon && (
        <Icon
          aria-hidden
          className="size-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
      )}
      {external && <span className="sr-only">(opens in a new tab)</span>}
    </a>
  );
}

export function NlFlag({ className }) {
  return (
    <svg
      viewBox="0 0 9 6"
      className={cn("inline-block h-3 w-4.5 rounded-[2px]", className)}
      role="img"
      aria-label="Netherlands flag"
    >
      <rect width="9" height="2" fill="#AE1C28" />
      <rect y="2" width="9" height="2" fill="#FFFFFF" />
      <rect y="4" width="9" height="2" fill="#21468B" />
    </svg>
  );
}

// Renders **bold** segments as emphasised text.
export function RichText({ text }) {
  return text.split(/(\*\*.*?\*\*)/g).map((part, i) =>
    part.startsWith("**") && part.endsWith("**") ? (
      <strong key={i} className="font-medium text-pf-text">
        {part.slice(2, -2)}
      </strong>
    ) : (
      part
    ),
  );
}
