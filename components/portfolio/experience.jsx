import { ArrowUpRight } from "lucide-react";
import { ROLES } from "@/lib/data";
import { EXPERIENCE } from "@/lib/portfolio-data";
import { Eyebrow, RichText, SectionTitle, TagList } from "./primitives";

// Roles, client projects and highlights come from the home page data
// (lib/data.js) so both stay in sync. Tech tags are /p1-only, by company.
const TECH = Object.fromEntries(
  EXPERIENCE.map((job) => [job.company, job.tech]),
);

// Home renders `title` as a styled heading element; /p1 only needs its text.
const tagline = (role) => role.title?.props?.children ?? role.title;

// The home data marks links with a trailing 🔗; /p1 shows an arrow instead.
const cleanName = (name) => name.replace(/\s*🔗\s*$/u, "");

// /p1-only promotions, shown above the earlier role at the same company.
// `since` also closes the earlier role's period.
const PROMOTIONS = {
  "Hawk Martech": {
    role: "Software Development Engineer II",
    since: "2026",
    location: "Gurgaon, India",
    projects: [
      {
        name: "HikeBridge — Customer Engagement Platform",
        highlights: [
          "Built the HikeBridge customer dashboard from scratch as the sole frontend developer, delivering **49 routes and 191 reusable components** across a multi-tenant SaaS platform.",
          "Designed end-to-end workflows for **omnichannel messaging, contact management, WhatsApp templates, audience segmentation, and billing**.",
          "Engineered a visual workflow automation builder using **React Flow and ELK**, supporting triggers, actions, conditions, wait steps, versioning, and automatic layout for complex customer journeys.",
          "Integrated multiple backend services for **wallet management, Razorpay payments, usage-based billing, subscription plans, proration, tax invoices, GST, UPI Autopay, and eNACH**.",
        ],
      },
    ],
  },
};

// One entry per designation held at the company, newest first.
function positionsFor(role, start) {
  const promo = PROMOTIONS[role.label];
  if (!promo) return [{ role: role.role, projects: role.projects }];
  return [
    {
      role: promo.role,
      period: `${promo.since} – Present`,
      location: promo.location,
      projects: promo.projects,
    },
    {
      role: role.role,
      period: `${start} – ${promo.since}`,
      projects: role.projects,
    },
  ];
}

function ProjectList({ projects }) {
  return (
    <ul className="mt-4 space-y-5">
      {projects.map((project) => (
        <li key={project.name}>
          {project.link ? (
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
          ) : (
            <p className="text-sm font-medium text-pf-accent">
              {cleanName(project.name)}
            </p>
          )}
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
          {ROLES.map((role, i) => {
            const [start, end] = role.timeline.split(" - ");
            const positions = positionsFor(role, start);
            const promoted = positions.length > 1;
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
                  <h3 className="text-lg font-medium text-pf-text">
                    {role.label}
                  </h3>
                  {!promoted && (
                    <p className="text-sm text-pf-muted">{role.role}</p>
                  )}
                  <p className="mt-3 font-display text-[17px] italic text-pf-text/85">
                    {tagline(role)}
                  </p>

                  {promoted ? (
                    <ol className="mt-5 space-y-7">
                      {positions.map((position) => (
                        <li key={position.role}>
                          <h4 className="text-[15px] font-medium text-pf-text">
                            {position.role}
                          </h4>
                          <p className="mt-0.5 font-code text-[11px] uppercase tracking-[0.12em] text-pf-muted">
                            {position.period}
                            {position.location && ` · ${position.location}`}
                          </p>
                          <ProjectList projects={position.projects} />
                        </li>
                      ))}
                    </ol>
                  ) : (
                    <div className="mt-1">
                      <ProjectList projects={positions[0].projects} />
                    </div>
                  )}

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
