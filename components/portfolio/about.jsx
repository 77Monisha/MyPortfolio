// /p1's About copy (the shared ABOUT in lib/portfolio-data still drives /p2).
const ABOUT = {
  intro:
    "I'm a **Software Engineer specialising in frontend development**, building scalable, production-ready applications with React, Next.js, and TypeScript. I enjoy solving complex product challenges, designing reusable UI systems, and improving performance and accessibility. Currently based in India, I'm open to relocation.",
  stats: [
    { value: "3+", label: "Years of experience" },
    { value: "5+", label: "Projects" },
    { value: "500K+", label: "Users reached" },
  ],
  languages: [
    { name: "English", level: "Professional", tone: "accent" },
    { name: "Hindi", level: "Native", tone: "muted" },
    { name: "Dutch", level: "Beginner (A1), learning", tone: "orange" },
  ],
  learning: [
    "Advanced TypeScript",
    "System design and frontend architecture",
    "Dutch (A1 → A2)",
    "AI-powered applications and automation",
  ],
};
import { Eyebrow, RichText, SectionTitle } from "./primitives";

const TONES = {
  accent: "bg-pf-accent",
  muted: "bg-pf-muted",
  orange: "bg-pf-orange",
};

export default function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="scroll-mt-20 border-b border-pf-border"
    >
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 md:px-8 md:py-24 lg:grid-cols-[1fr_2fr]">
        <div>
          <Eyebrow>About</Eyebrow>
          <SectionTitle id="about-title" className="mt-3">
            A little
            <br />
            about me.
          </SectionTitle>
        </div>

        <div className="space-y-10">
          <p className="max-w-2xl text-base leading-relaxed text-pf-muted md:text-lg">
            <RichText text={ABOUT.intro} />
          </p>

          <dl className="grid grid-cols-3 divide-x divide-pf-border rounded-xl border border-pf-border bg-pf-card">
            {ABOUT.stats.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col-reverse gap-1 p-4 md:p-6"
              >
                <dt className="text-xs text-pf-muted">{stat.label}</dt>
                <dd className="font-display text-2xl text-pf-text md:text-4xl">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-pf-border bg-pf-card p-5">
              <h3 className="text-sm font-medium text-pf-text">Languages</h3>
              <ul className="mt-4 space-y-2.5 text-[13px]">
                {ABOUT.languages.map((lang) => (
                  <li key={lang.name} className="flex items-center gap-2.5">
                    <span
                      aria-hidden
                      className={`size-1.5 rounded-full ${TONES[lang.tone]}`}
                    />
                    <span className="text-pf-text">{lang.name}</span>
                    <span className="text-pf-muted">— {lang.level}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl border border-pf-border bg-pf-card p-5">
              <h3 className="text-sm font-medium text-pf-text">
                Currently learning
              </h3>
              <ul className="mt-4 space-y-2.5 font-code text-xs text-pf-muted">
                {ABOUT.learning.map((item) => (
                  <li key={item}>
                    <span aria-hidden className="text-pf-orange">
                      →{" "}
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
