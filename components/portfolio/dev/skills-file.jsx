import { Braces, FileJson } from "lucide-react";
import { SKILL_GROUPS } from "@/lib/portfolio-data";
import { DevSectionHeading, FileCard } from "./dev-primitives";

// "State & Data" → "stateAndData"
const toKey = (title) =>
  title
    .toLowerCase()
    .replace(/&/g, "and")
    .split(/[^a-z0-9]+/)
    .filter(Boolean)
    .map((word, i) => (i ? word[0].toUpperCase() + word.slice(1) : word))
    .join("");

const Punct = ({ children }) => <span className="text-pf-muted">{children}</span>;

function Line({ number, indent, children }) {
  return (
    <div className="flex">
      <span className="w-10 shrink-0 select-none pr-4 text-right text-pf-muted/50">
        {number}
      </span>
      <code className={`min-w-0 flex-1 whitespace-pre-wrap ${indent ? "pl-[2ch]" : ""}`}>
        {children}
      </code>
    </div>
  );
}

export default function SkillsFile() {
  const skillCount = SKILL_GROUPS.reduce((n, g) => n + g.items.length, 0);
  const lineCount = SKILL_GROUPS.length + 2;

  return (
    <section id="skills" aria-labelledby="skills-title" className="scroll-mt-32">
      <DevSectionHeading id="skills-title" icon={Braces}>
        Skills
      </DevSectionHeading>

      <FileCard
        icon={FileJson}
        path={["monisha-chaurasia", "skills.json"]}
        meta={`${lineCount} lines · ${skillCount} skills`}
        className="mt-4"
      >
        {/* Visual file view; the list below carries the same content for screen readers. */}
        <div aria-hidden className="py-4 font-code text-[13px] leading-7">
          <Line number={1}>
            <Punct>{"{"}</Punct>
          </Line>
          {SKILL_GROUPS.map((group, i) => (
            <Line key={group.title} number={i + 2} indent>
              <span className="text-pf-accent">&quot;{toKey(group.title)}&quot;</span>
              <Punct>: [</Punct>
              {group.items.map((item, j) => (
                <span key={item.name}>
                  <span className="text-pf-text/90">&quot;{item.name}&quot;</span>
                  {j < group.items.length - 1 && <Punct>, </Punct>}
                </span>
              ))}
              <Punct>]{i < SKILL_GROUPS.length - 1 ? "," : ""}</Punct>
            </Line>
          ))}
          <Line number={lineCount}>
            <Punct>{"}"}</Punct>
          </Line>
        </div>

        <ul className="sr-only">
          {SKILL_GROUPS.map((group) => (
            <li key={group.title}>
              {group.title}: {group.items.map((item) => item.name).join(", ")}
            </li>
          ))}
        </ul>
      </FileCard>
    </section>
  );
}
