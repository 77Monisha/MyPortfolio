import { EXPERIENCE } from "@/lib/portfolio-data";
import { Eyebrow, RichText, SectionTitle, TagList } from "./primitives";

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
          {EXPERIENCE.map((job, i) => (
            <li
              key={job.company}
              className="relative grid gap-x-8 pb-12 pl-8 last:pb-0 md:grid-cols-[7rem_1fr] md:pl-0"
            >
              {/* Timeline rail + dot. Rail sits left on mobile, between columns on desktop. */}
              {i < EXPERIENCE.length - 1 && (
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
                </h3>
                <p className="text-sm text-pf-muted">{job.role}</p>
                <ul className="mt-4 space-y-2">
                  {job.highlights.map((point) => (
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
                <TagList
                  items={job.tech}
                  label={`Technologies used at ${job.company}`}
                  className="mt-5"
                />
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
