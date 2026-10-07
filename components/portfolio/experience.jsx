import { ArrowUpRight } from "lucide-react";
import { ROLES } from "@/lib/data";
import { EXPERIENCE } from "@/lib/portfolio-data";
import { Eyebrow, RichText, SectionTitle, TagList } from "./primitives";

// Roles, client projects and highlights come from the home page data
// (lib/data.js) so both stay in sync. Tech tags are /p1-only, by company.
const TECH = Object.fromEntries(EXPERIENCE.map((job) => [job.company, job.tech]));

// Home renders `title` as a styled heading element; /p1 only needs its text.
const tagline = (role) => role.title?.props?.children ?? role.title;

// The home data marks links with a trailing 🔗; /p1 shows an arrow instead.
const cleanName = (name) => name.replace(/\s*🔗\s*$/u, "");

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
          {ROLES.map((role, i) => {
            const [start, end] = role.timeline.split(" - ");
            return (
              <li
                key={role.label}
                className="relative grid gap-x-8 pb-12 pl-8 last:pb-0 md:grid-cols-[7rem_1fr] md:pl-0"
              >
                {/* Timeline rail + dot. Rail sits left on mobile, between columns on desktop. */}
                {i < ROLES.length - 1 && (
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
                  <time>{start}</time>
                  <span aria-label="to"> – </span>
                  <br className="hidden md:block" />
                  {end === "Present" ? end : <time>{end}</time>}
                </p>

                <div className="mt-2 md:mt-0 md:pl-8">
                  <h3 className="text-lg font-medium text-pf-text">{role.label}</h3>
                  <p className="text-sm text-pf-muted">{role.role}</p>
                  <p className="mt-3 font-display text-[17px] italic text-pf-text/85">
                    {tagline(role)}
                  </p>

                  <ul className="mt-5 space-y-5">
                    {role.projects.map((project) => (
                      <li key={project.name}>
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group inline-flex items-center gap-1.5 text-sm font-medium text-pf-accent transition-colors hover:text-pf-text"
                        >
                          {cleanName(project.name)}
                          <ArrowUpRight
                            aria-hidden
                            className="size-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                          />
                          <span className="sr-only">(opens in a new tab)</span>
                        </a>
                        <ul className="mt-2 space-y-1.5">
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

                  {TECH[role.label] && (
                    <TagList
                      items={TECH[role.label]}
                      label={`Technologies used at ${role.label}`}
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
