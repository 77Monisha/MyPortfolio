import { BookOpen } from "lucide-react";
import { ABOUT, PROFILE, TERMINAL_LINES } from "@/lib/portfolio-data";
import { FileCard } from "./dev-primitives";

export default function Readme() {
  const [title, stack] = ABOUT.headline.split(" | ");

  return (
    <section id="overview" aria-labelledby="readme-title" className="scroll-mt-32">
      <FileCard icon={BookOpen} path={["monisha-chaurasia", "README.md"]}>
        <div className="p-5 md:p-8">
          <p className="font-code text-xs text-pf-muted">{PROFILE.name}</p>
          <h2
            id="readme-title"
            className="mt-2 font-display text-[clamp(1.6rem,3.2vw,2.2rem)] leading-[1.1] tracking-[-0.02em]"
          >
            {title}{" "}
            <span className="text-pf-muted">
              <span aria-hidden>| </span>
              {stack}
            </span>
          </h2>
          <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-pf-muted">
            {ABOUT.intro}
          </p>

          <div className="mt-8 space-y-6">
            <div>
              <h3 className="border-b border-pf-border pb-2 text-sm font-medium text-pf-text">
                Current focus
              </h3>
              <ul className="mt-3 space-y-2 text-sm text-pf-muted">
                {ABOUT.focus.map((item) => (
                  <li key={item} className="flex gap-2.5">
                    <span aria-hidden className="text-pf-orange">→</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <dl
              aria-label="Quick facts"
              className="grid gap-y-1 rounded-lg border border-pf-border bg-pf-bg p-4 font-code text-xs sm:grid-cols-[auto_1fr] sm:gap-x-8 sm:gap-y-1.5 sm:text-[13px]"
            >
              {TERMINAL_LINES.map((line) => (
                <div key={line.cmd} className="contents">
                  <dt className="whitespace-nowrap text-pf-orange">
                    <span aria-hidden>$ </span>
                    {line.cmd}
                  </dt>
                  <dd
                    className={`mb-2 min-w-0 wrap-anywhere sm:mb-0 ${line.success ? "text-pf-green" : "text-pf-text"}`}
                  >
                    {line.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </FileCard>
    </section>
  );
}
