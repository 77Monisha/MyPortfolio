import { ArrowUpRight } from "lucide-react";
import { P1_EXPERIENCE } from "@/lib/portfolio-data";
import { Eyebrow, RichText, SectionTitle, TagList } from "./primitives";

function ProjectList({ projects }) {
  return (
    <ul className="mt-3 space-y-4">
      {projects.map((project) => (
        <li key={project.name}>
          {project.link ? (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-1.5 text-sm font-medium text-pf-accent transition-colors hover:text-pf-text"
            >
              {project.name}
              <ArrowUpRight
                aria-hidden
                className="size-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
              <span className="sr-only">(opens in a new tab)</span>
            </a>
          ) : (
            <p className="text-sm font-medium text-pf-accent">{project.name}</p>
          )}
          <ul className="mt-1.5 space-y-1.5">
            {project.highlights.map((point) => (
              <li
                key={point}
                className="flex gap-3 text-sm leading-relaxed text-pf-muted"
              >
                <span
                  aria-hidden
                  className="mt-2 size-1 shrink-0 rounded-full bg-pf-muted"
                />
                <span>
                  <RichText text={point} />
                </span>
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
}

export default function Experience() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-title"
      className="scroll-mt-20 border-b border-pf-border"
    >
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 md:px-8 md:py-24 lg:grid-cols-[1fr_2fr]">
        <div>
          <Eyebrow>Professional experience</Eyebrow>
          <SectionTitle id="experience-title" className="mt-3">
            Where I&apos;ve
            <br />
            made an impact.
          </SectionTitle>
        </div>

        <ol className="relative">
          {P1_EXPERIENCE.map((job, i) => {
            const single = job.positions.length === 1;
            return (
              <li
                key={job.company}
                className="relative grid gap-x-8 pb-12 pl-8 last:pb-0 md:grid-cols-[7rem_1fr] md:pl-0"
              >
                {/* Timeline rail + dot. Rail sits left on mobile, between columns on desktop. */}
                {i < P1_EXPERIENCE.length - 1 && (
                  <span
                    aria-hidden
                    className="absolute bottom-0 left-[5px] top-2 w-px bg-pf-border md:left-[calc(7rem+1rem+5px)]"
                  />
                )}
                <span
                  aria-hidden
                  className="absolute left-0 top-1.5 size-[11px] rounded-full border-2 border-pf-bg bg-pf-accent md:left-[calc(7rem+1rem)]"
                />

                <p className="font-code text-xs uppercase leading-relaxed tracking-[0.12em] text-pf-muted">
                  <time>{job.start}</time>
                  <span aria-label="to"> – </span>
                  <br className="hidden md:block" />
                  {job.end === "Present" ? job.end : <time>{job.end}</time>}
                </p>

                <div className="mt-2 md:mt-0 md:pl-8">
                  <h3 className="text-lg font-medium text-pf-text">
                    {job.company}
                    <span className="font-normal text-pf-muted">
                      {" "}
                      · {job.location}
                    </span>
                  </h3>
                  {single && (
                    <p className="text-sm text-pf-muted">
                      {job.positions[0].role}
                    </p>
                  )}
                  <p className="mt-2 font-display text-[17px] italic text-pf-text/85">
                    {job.tagline}
                  </p>

                  {/* Several positions at one company read as one progression:
                      newest on top, joined by a short inner rail. */}
                  <ol
                    className={
                      single
                        ? "mt-1"
                        : "relative mt-5 space-y-7 border-l border-pf-border/70 pl-5"
                    }
                  >
                    {job.positions.map((position) => (
                      <li key={position.role} className="relative">
                        {!single && (
                          <>
                            <span
                              aria-hidden
                              className={`absolute -left-6 top-1.5 size-[7px] rounded-full ${position.promoted ? "bg-pf-accent" : "bg-pf-muted"}`}
                            />
                            <h4 className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-[15px] font-medium text-pf-text">
                              {position.role}
                              {position.promoted && (
                                <span className="rounded-full border border-pf-accent/40 bg-pf-accent/10 px-2 py-0.5 font-code text-[10px] uppercase tracking-[0.14em] text-pf-accent">
                                  Promoted
                                </span>
                              )}
                            </h4>
                            <p className="mt-0.5 font-code text-[11px] uppercase tracking-[0.12em] text-pf-muted">
                              {position.period}
                            </p>
                          </>
                        )}
                        <ProjectList projects={position.projects} />
                      </li>
                    ))}
                  </ol>

                  {job.tech && (
                    <TagList
                      items={job.tech}
                      label={`Technologies used at ${job.company}`}
                      className="mt-6"
                    />
                  )}
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
