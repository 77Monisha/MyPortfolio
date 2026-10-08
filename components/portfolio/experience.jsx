import { ArrowUpRight } from "lucide-react";
import { EXPERIENCE } from "@/lib/portfolio-data";
import { Eyebrow, RichText, SectionTitle, TagList } from "./primitives";

// /p1's own experience copy (the home page keeps its ROLES in lib/data.js).
// Tech tags are shared with the portfolio data, by company. WebRTC is
// dropped here because /p1 no longer lists the Hike Messenger project.
const TECH = Object.fromEntries(
  EXPERIENCE.map((job) => [job.company, job.tech.filter((t) => t !== "WebRTC")]),
);

const COMPANIES = [
  {
    company: "Hawk MarTech",
    techKey: "Hawk Martech",
    location: "Gurgaon, India",
    start: "April 2024",
    end: "Present",
    tagline: "Building scalable systems for real-world users",
    // Newest first; the first entry is the promotion.
    positions: [
      {
        role: "Software Development Engineer II",
        period: "Mar 2026 – Present",
        promoted: true,
        projects: [
          {
            name: "HikeBridge — Customer Engagement Platform",
            link: "https://hikebridge.com/",
            highlights: [
              "Built the customer dashboard from scratch as the **sole frontend developer** — **49 routes** and **191 reusable components** across a multi-tenant SaaS platform.",
              "Designed end-to-end workflows for omnichannel messaging, contact management, WhatsApp templates, service onboarding, audience segmentation and billing.",
              "Engineered a visual **workflow automation builder** with React Flow and ELK: triggers, actions, conditions, wait steps, versioning and automatic layout for complex customer journeys.",
              "Integrated backend services for wallet management, Razorpay payments, usage-based billing, subscription plans, proration, tax invoices, GST, UPI Autopay and eNACH.",
            ],
          },
        ],
      },
      {
        role: "Software Development Engineer I",
        period: "Apr 2024 – Mar 2026",
        projects: [
          {
            name: "WLPL — Cricket Premier League Platform",
            link: "https://www.worldlegendsprot20.com/",
            highlights: [
              "Built OTP-based authentication and registration for **500K+ users**, with secure session management and validation safeguards.",
              "Integrated Razorpay for **1,000+ monthly transactions** — order verification, coupon and affiliate workflows, and a 15-minute payment lock that cut duplicate transactions by **35%**.",
              "Led frontend development of the TLC Admin Panel with **2 engineers**: manual payment links via SMS/email, coupon management and affiliate rewards.",
            ],
          },
          {
            name: "OneTurf — Live Match Management Platform",
            link: "https://www.oneturf.news/",
            highlights: [
              "Led development of the live match management system — commentary, fixtures, stats and scoreboard — and optimised API polling, cutting redundant API calls by **40%** during high-traffic events.",
            ],
          },
        ],
      },
    ],
  },
  {
    company: "Ingersoll Rand",
    techKey: "Ingersoll Rand",
    location: "Bengaluru, India",
    start: "July 2023",
    end: "March 2024",
    tagline: "Designing scalable and accessible UI systems",
    positions: [
      {
        role: "Frontend Engineer",
        projects: [
          {
            name: "SEEPEX",
            link: "https://www.seepex.com/en/",
            highlights: [
              "Built **reusable component system** for large-scale product listings",
              "Improved **accessibility (a11y)** aligning with **WCAG standards**",
            ],
          },
          {
            name: "Ingersoll Rand",
            link: "https://www.ingersollrand.com/en-in/",
            highlights: [
              "Developed UI for **industrial machinery listings**",
              "Implemented **accessibility improvements** (color contrast, readability)",
              "Contributed to **scalable design system patterns**",
            ],
          },
        ],
      },
    ],
  },
];

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
          {COMPANIES.map((job, i) => {
            const single = job.positions.length === 1;
            return (
              <li
                key={job.company}
                className="relative grid gap-x-8 pb-12 pl-8 last:pb-0 md:grid-cols-[7rem_1fr] md:pl-0"
              >
                {/* Timeline rail + dot. Rail sits left on mobile, between columns on desktop. */}
                {i < COMPANIES.length - 1 && (
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

                  {TECH[job.techKey] && (
                    <TagList
                      items={TECH[job.techKey]}
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
