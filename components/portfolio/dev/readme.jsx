import { BookOpen } from "lucide-react";
import { ABOUT, HERO_STACK, TERMINAL_LINES } from "@/lib/portfolio-data";
import { NlFlag, RichText } from "../primitives";
import { FileCard, TopicList } from "./dev-primitives";

export default function Readme() {
  return (
    <section id="overview" aria-labelledby="readme-title" className="scroll-mt-32">
      <FileCard icon={BookOpen} path={["monisha-chaurasia", "README.md"]}>
        <div className="p-5 md:p-8">
          <p aria-hidden className="font-code text-xs text-pf-muted">
            {"<!-- hi, thanks for stopping by -->"}
          </p>
          <h2
            id="readme-title"
            className="mt-3 font-display text-[clamp(1.9rem,4vw,2.6rem)] leading-[1.05] tracking-[-0.02em]"
          >
            Building scalable frontend systems{" "}
            <em className="italic text-pf-accent">for real-world products.</em>
          </h2>
          <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-pf-muted">
            <RichText text={ABOUT.intro} />
          </p>

          <TopicList items={HERO_STACK} label="Focus areas" className="mt-6" />

          <h3 className="mt-9 border-b border-pf-border pb-2 text-sm font-medium text-pf-text">
            Quick facts
          </h3>
          <dl className="mt-4 grid grid-cols-[auto_1fr] gap-x-4 gap-y-2 sm:gap-x-6 rounded-lg border border-pf-border bg-pf-bg p-4 font-code text-[13px]">
            {TERMINAL_LINES.map((line) => (
              <div key={line.cmd} className="contents">
                <dt className="whitespace-nowrap text-pf-orange">
                  <span aria-hidden>$ </span>
                  {line.cmd}
                </dt>
                <dd
                  className={
                    line.success
                      ? "text-pf-green"
                      : "flex items-center gap-2 text-pf-text"
                  }
                >
                  {line.value}
                  {line.flag && <NlFlag />}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </FileCard>
    </section>
  );
}
