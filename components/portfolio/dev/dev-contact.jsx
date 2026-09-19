import { PROFILE } from "@/lib/portfolio-data";

const CHANNELS = [
  { key: "email", label: PROFILE.email, href: `mailto:${PROFILE.email}` },
  { key: "linkedin", label: "in/monisha-chaurasia", href: PROFILE.linkedin, external: true },
  { key: "github", label: `@${PROFILE.handle}`, href: PROFILE.github, external: true },
  { key: "resume", label: PROFILE.resume.split("/").pop(), href: PROFILE.resume, download: true },
];

export default function DevContact() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="scroll-mt-32">
      <div className="overflow-hidden rounded-xl border border-pf-border bg-pf-card">
        <div className="flex items-center justify-between border-b border-pf-border px-4 py-3">
          <div className="flex gap-1.5" aria-hidden>
            <span className="size-2.5 rounded-full bg-pf-red" />
            <span className="size-2.5 rounded-full bg-[#F5B83D]" />
            <span className="size-2.5 rounded-full bg-pf-green" />
          </div>
          <span className="font-code text-xs text-pf-muted">~/monisha — contact</span>
        </div>

        <div className="relative overflow-hidden p-6 md:p-8">
          <div
            aria-hidden
            className="pf-halftone pointer-events-none absolute -bottom-16 -right-16 h-56 w-96 opacity-25 mask-[radial-gradient(ellipse_at_bottom_right,black,transparent_70%)]"
          />

          <p className="relative font-code text-[13px] text-pf-muted">
            <span aria-hidden className="text-pf-orange">$ </span>
            contact --open-to-work
          </p>
          <h2
            id="contact-title"
            className="relative mt-4 font-display text-[clamp(1.9rem,4vw,2.6rem)] leading-[1.05] tracking-[-0.02em]"
          >
            Let&apos;s build something{" "}
            <em className="italic text-pf-accent">useful.</em>
          </h2>
          <p className="relative mt-3 max-w-lg text-sm leading-relaxed text-pf-muted">
            Open to frontend roles in the Netherlands — full-time, freelance or
            just a chat.
          </p>

          <dl className="relative mt-7 grid gap-x-6 gap-y-2.5 font-code text-[13px] sm:grid-cols-[6rem_1fr]">
            {CHANNELS.map((c) => (
              <div key={c.key} className="contents">
                <dt className="text-pf-muted">
                  <span aria-hidden className="text-pf-green">✓ </span>
                  {c.key}
                </dt>
                <dd className="mb-2 min-w-0 sm:mb-0">
                  <a
                    href={c.href}
                    {...(c.external && { target: "_blank", rel: "noopener noreferrer" })}
                    {...(c.download && { download: true })}
                    className="break-all text-pf-text underline decoration-pf-border underline-offset-4 transition-colors hover:decoration-pf-accent"
                  >
                    {c.label}
                    {c.external && <span className="sr-only"> (opens in a new tab)</span>}
                  </a>
                </dd>
              </div>
            ))}
          </dl>

          <p className="relative mt-7 text-xs text-pf-muted">
            Tip: press{" "}
            <kbd className="rounded border border-pf-border px-1.5 py-0.5 font-code text-[10px]">
              /
            </kbd>{" "}
            to open the command palette and jump anywhere.
          </p>
        </div>
      </div>
    </section>
  );
}
