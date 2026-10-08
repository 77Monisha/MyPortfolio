import { SquareTerminal } from "lucide-react";
import { ABOUT, PROFILE } from "@/lib/portfolio-data";
import { DevSectionHeading } from "./dev-primitives";

const CHANNELS = [
  { key: "email", label: PROFILE.email, href: `mailto:${PROFILE.email}` },
  { key: "linkedin", label: "in/monisha-chaurasia", href: PROFILE.linkedin, external: true },
  { key: "github", label: `@${PROFILE.handle}`, href: PROFILE.github, external: true },
  { key: "resume", label: PROFILE.resume.split("/").pop(), href: PROFILE.resume, download: true },
];

export default function DevContact() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="scroll-mt-32">
      <DevSectionHeading id="contact-title" icon={SquareTerminal}>
        Contact
      </DevSectionHeading>

      <div className="mt-4 rounded-xl border border-pf-border bg-pf-card p-5 md:p-6">
        <p className="flex items-center gap-2.5 text-sm text-pf-text">
          <span aria-hidden className="size-2 shrink-0 rounded-full bg-pf-green" />
          {ABOUT.status}
        </p>

        <dl className="mt-5 grid gap-x-6 gap-y-2.5 font-code text-[13px] sm:grid-cols-[6rem_1fr]">
          {CHANNELS.map((c) => (
            <div key={c.key} className="contents">
              <dt className="text-pf-muted">{c.key}</dt>
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

        <p className="mt-6 text-xs text-pf-muted">
          Tip: press{" "}
          <kbd className="rounded border border-pf-border px-1.5 py-0.5 font-code text-[10px]">
            /
          </kbd>{" "}
          to open the command palette and jump anywhere.
        </p>
      </div>
    </section>
  );
}
