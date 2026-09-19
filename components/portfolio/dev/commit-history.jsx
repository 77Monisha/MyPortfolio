import { GitCommitHorizontal } from "lucide-react";
import { EXPERIENCE } from "@/lib/portfolio-data";
import { RichText, TagList } from "../primitives";
import { DevSectionHeading } from "./dev-primitives";

// Stable decorative "commit hash" derived from the highlight text.
function shortHash(text) {
  let h = 2166136261;
  for (let i = 0; i < text.length; i++) {
    h ^= text.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return (h >>> 0).toString(16).padStart(8, "0").slice(0, 7);
}

export default function CommitHistory() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-title"
      className="scroll-mt-32"
    >
      <DevSectionHeading id="experience-title" icon={GitCommitHorizontal}>
        Experience
        <span className="font-normal text-pf-muted">· commit history</span>
      </DevSectionHeading>

      <ol className="mt-5 space-y-8">
        {EXPERIENCE.map((job) => {
          const current = job.end === "Present";
          return (
            <li key={job.company} className="relative pl-7">
              <span
                aria-hidden
                className="absolute bottom-0 left-[7px] top-5 w-px bg-pf-border"
              />
              <span
                aria-hidden
                className={`absolute left-0 top-0.5 size-[15px] rounded-full border-2 bg-pf-bg ${
                  current ? "border-pf-green" : "border-pf-muted"
                }`}
              />
              <p className="font-code text-xs text-pf-muted">
                {job.start} → {job.end}
              </p>

              <div className="mt-2.5 overflow-hidden rounded-xl border border-pf-border bg-pf-card">
                <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-pf-border bg-pf-surface px-4 py-3">
                  <h3 className="text-sm font-medium text-pf-text">
                    {job.company}{" "}
                    <span className="font-normal text-pf-muted">· {job.role}</span>
                  </h3>
                  {current && (
                    <span className="flex items-center gap-1.5 font-code text-[11px] text-pf-green">
                      <span aria-hidden className="size-1.5 rounded-full bg-pf-green" />
                      current role
                    </span>
                  )}
                </div>

                <ul className="divide-y divide-pf-border">
                  {job.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="flex items-start justify-between gap-4 px-4 py-3 text-sm leading-relaxed text-pf-muted"
                    >
                      <p>
                        <RichText text={highlight} />
                      </p>
                      <code
                        aria-hidden
                        className="mt-0.5 hidden shrink-0 rounded border border-pf-border px-1.5 py-0.5 font-code text-[11px] text-pf-muted/80 sm:block"
                      >
                        {shortHash(highlight)}
                      </code>
                    </li>
                  ))}
                </ul>

                <div className="border-t border-pf-border px-4 py-3">
                  <TagList items={job.tech} label={`${job.company} technologies`} />
                </div>
              </div>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
