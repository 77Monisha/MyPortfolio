import { ArrowUpRight, GitCommitHorizontal } from "lucide-react";
import { CAREER } from "@/lib/portfolio-data";
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

function ProjectName({ project }) {
  if (!project.link)
    return <h4 className="text-[13px] font-medium text-pf-text">{project.name}</h4>;
  return (
    <h4>
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="group inline-flex items-center gap-1.5 text-[13px] font-medium text-pf-accent transition-colors hover:text-pf-text"
      >
        {project.name}
        <ArrowUpRight
          aria-hidden
          className="size-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
        />
        <span className="sr-only">(opens in a new tab)</span>
      </a>
    </h4>
  );
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
        {CAREER.map((job, i) => {
          const current = job.end === "Present";
          return (
            <li key={job.role + job.company} className="relative pl-7">
              {/* Rail joins consecutive roles so the progression reads as one line. */}
              {i < CAREER.length - 1 && (
                <span
                  aria-hidden
                  className="absolute -bottom-8 left-1.75 top-5 w-px bg-pf-border"
                />
              )}
              <span
                aria-hidden
                className={`absolute left-0 top-0.5 size-3.75 rounded-full border-2 bg-pf-bg ${
                  current ? "border-pf-green" : "border-pf-muted"
                }`}
              />
              <p className="font-code text-xs text-pf-muted">
                {job.start} → {job.end}
                <span aria-hidden> · </span>
                <span className="sr-only">, </span>
                {job.location}
              </p>

              <div className="mt-2.5 overflow-hidden rounded-xl border border-pf-border bg-pf-card">
                <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-pf-border bg-pf-surface px-4 py-3">
                  <h3 className="text-sm font-medium text-pf-text">
                    {job.role}{" "}
                    <span className="font-normal text-pf-muted">· {job.company}</span>
                  </h3>
                  {(current || job.promoted) && (
                    <span className="flex items-center gap-3 font-code text-[11px]">
                      {job.promoted && <span className="text-pf-accent">↑ promoted</span>}
                      {current && (
                        <span className="flex items-center gap-1.5 text-pf-green">
                          <span aria-hidden className="size-1.5 rounded-full bg-pf-green" />
                          current role
                        </span>
                      )}
                    </span>
                  )}
                </div>

                <div className="divide-y divide-pf-border">
                  {job.projects.map((project, j) => (
                    <div key={project.name ?? j}>
                      {project.name && (
                        <div className="px-4 pt-3">
                          <ProjectName project={project} />
                        </div>
                      )}
                      <ul className="divide-y divide-pf-border/60">
                        {project.highlights.map((highlight) => (
                          <li
                            key={highlight}
                            className="flex items-start justify-between gap-4 px-4 py-2.5 text-sm leading-relaxed text-pf-muted"
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
                    </div>
                  ))}
                </div>

                <div className="border-t border-pf-border px-4 py-3">
                  <TagList items={job.tech} label={`${job.role} technologies`} />
                </div>
              </div>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
