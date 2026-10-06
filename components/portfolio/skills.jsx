import {
  SiDocker,
  SiFigma,
  SiGit,
  SiGithubactions,
  SiGooglegemini,
  SiGraphql,
  SiHtml5,
  SiJavascript,
  SiJest,
  SiLighthouse,
  SiNextdotjs,
  SiNodedotjs,
  SiOpenai,
  SiPostman,
  SiPrisma,
  SiReact,
  SiReactquery,
  SiReacttable,
  SiRedux,
  SiSupabase,
  SiTypescript,
  SiVercel,
  SiVitest,
} from "react-icons/si";
import { MdAccessibility } from "react-icons/md";
import { TbApi, TbBrain, TbBug, TbFlame, TbHierarchy } from "react-icons/tb";
import { SKILL_GROUPS } from "@/lib/portfolio-data";
import { Eyebrow, SectionTitle } from "./primitives";

export const SKILL_ICONS = {
  javascript: SiJavascript,
  typescript: SiTypescript,
  react: SiReact,
  nextjs: SiNextdotjs,
  html: SiHtml5,
  redux: SiRedux,
  zustand: TbHierarchy,
  tanstackquery: SiReactquery,
  tanstacktable: SiReacttable,
  nodejs: SiNodedotjs,
  api: TbApi,
  graphql: SiGraphql,
  supabase: SiSupabase,
  prisma: SiPrisma,
  playwright: TbBug,
  jest: SiJest,
  vitest: SiVitest,
  accessibility: MdAccessibility,
  lighthouse: SiLighthouse,
  githubactions: SiGithubactions,
  gemini: SiGooglegemini,
  openai: SiOpenai,
  ai: TbBrain,
  fire: TbFlame,
  git: SiGit,
  figma: SiFigma,
  postman: SiPostman,
  vercel: SiVercel,
  docker: SiDocker,
};

export default function Skills() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-title"
      className="scroll-mt-20 border-b border-pf-border"
    >
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 md:px-8 md:py-24 lg:grid-cols-[1fr_2fr]">
        <div>
          <Eyebrow>Technical skills</Eyebrow>
          <SectionTitle id="skills-title" className="mt-3">
            Tools I use
            <br />
            to build &amp; ship.
          </SectionTitle>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {SKILL_GROUPS.map((group) => (
            <div
              key={group.title}
              className="rounded-xl border border-pf-border bg-pf-card p-5"
            >
              <h3 className="text-sm font-medium text-pf-text">{group.title}</h3>
              <ul className="mt-4 space-y-2.5">
                {group.items.map((item) => {
                  const Icon = SKILL_ICONS[item.icon];
                  return (
                    <li
                      key={item.name}
                      className="flex items-center gap-2.5 text-[13px] text-pf-muted"
                    >
                      {Icon && (
                        <Icon aria-hidden className="size-3.5 shrink-0 text-pf-accent/80" />
                      )}
                      {item.name}
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
