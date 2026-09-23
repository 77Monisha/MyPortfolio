import { ICON_MAP } from "@/lib/data";
import { Eyebrow, SectionTitle } from "../primitives";
import { SKILL_ICONS } from "../skills";

// /p1's skills, grouped as on the resume (the shared SKILL_GROUPS still drive
// /p2). HTML / CSS, OpenAI API and Vercel are /p1 extras kept from before.
const SKILL_GROUPS = [
  {
    title: "Languages",
    items: [
      { name: "JavaScript", icon: "javascript" },
      { name: "TypeScript", icon: "typescript" },
    ],
  },
  {
    title: "Frontend Development",
    items: [
      { name: "React", icon: "react" },
      { name: "Next.js", icon: "nextjs" },
      { name: "Tailwind CSS", icon: "tailwind" },
      { name: "SCSS", icon: "sass" },
      { name: "ShadCN", icon: "shadcn" },
      { name: "React Flow", icon: "reactflow" },
      { name: "HTML / CSS", icon: "html" },
    ],
  },
  {
    title: "State Management & Data",
    items: [
      { name: "Redux", icon: "redux" },
      { name: "Zustand", icon: "zustand" },
      { name: "TanStack Query", icon: "tanstackquery" },
      { name: "TanStack Table", icon: "tanstacktable" },
    ],
  },
  {
    title: "Backend & APIs",
    items: [
      { name: "Node.js", icon: "nodejs" },
      { name: "REST APIs", icon: "api" },
      { name: "GraphQL", icon: "graphql" },
      { name: "Supabase", icon: "supabase" },
      { name: "Prisma", icon: "prisma" },
    ],
  },
  {
    title: "Testing & Quality",
    items: [
      { name: "Playwright", icon: "playwright" },
      { name: "axe-core", icon: "accessibility" },
      { name: "Vitest", icon: "vitest" },
      { name: "Jest", icon: "jest" },
      { name: "Unit Testing", icon: "unittest" },
      { name: "Integration Testing", icon: "integrationtest" },
    ],
  },
  {
    title: "Web Engineering & Tools",
    items: [
      { name: "Web Accessibility (a11y)", icon: "accessibility" },
      { name: "Internationalization (i18n)", icon: "globe" },
      { name: "Core Web Vitals", icon: "web" },
      { name: "SEO", icon: "seo" },
      { name: "Lighthouse", icon: "lighthouse" },
      { name: "Razorpay", icon: "razorpay" },
      { name: "Git", icon: "git" },
      { name: "Postman", icon: "postman" },
      { name: "Figma", icon: "figma" },
    ],
  },
  {
    title: "AI & Emerging Tech",
    items: [
      { name: "LLMs", icon: "ai" },
      { name: "Generative AI (GenAI)", icon: "genai" },
      { name: "Gemini API", icon: "gemini" },
      { name: "OpenAI API", icon: "openai" },
      { name: "Vector Databases", icon: "vector" },
      { name: "Firecrawl", icon: "fire" },
    ],
  },
  {
    title: "DevOps & Automation",
    items: [
      { name: "Docker", icon: "docker" },
      { name: "GitHub Actions", icon: "githubactions" },
      { name: "CI/CD", icon: "cicd" },
      { name: "Vercel", icon: "vercel" },
    ],
  },
];

// /p1's icon set first; the home page's map covers the rest (Tailwind, SCSS…).
function SkillIcon({ icon, className }) {
  const Icon = SKILL_ICONS[icon];
  if (Icon) return <Icon aria-hidden className={className} />;
  if (!ICON_MAP[icon]) return null;
  return (
    <span
      aria-hidden
      className={`grid place-items-center [&>svg]:size-full ${className}`}
    >
      {ICON_MAP[icon]}
    </span>
  );
}

// Brand tints for the icons. Marks that are black in their brand (Next.js,
// Prisma, OpenAI, Vercel) fall back to the primary text color.
const ICON_COLORS = {
  javascript: "text-[#F7DF1E]",
  typescript: "text-[#3178C6]",
  react: "text-[#61DAFB]",
  html: "text-[#E34F26]",
  redux: "text-[#9B6FE0]",
  zustand: "text-pf-accent",
  tanstackquery: "text-[#FF4154]",
  tanstacktable: "text-[#FF4154]",
  nodejs: "text-[#5FA04E]",
  api: "text-[#60A5FA]",
  graphql: "text-[#E10098]",
  supabase: "text-[#3ECF8E]",
  playwright: "text-[#2EAD33]",
  jest: "text-[#C21325]",
  vitest: "text-[#FCC72B]",
  accessibility: "text-[#60A5FA]",
  lighthouse: "text-[#F44B21]",
  githubactions: "text-[#2088FF]",
  gemini: "text-[#8E75B2]",
  ai: "text-pf-accent",
  fire: "text-pf-orange",
  git: "text-[#F05032]",
  figma: "text-[#F24E1E]",
  postman: "text-[#FF6C37]",
  docker: "text-[#2496ED]",
  tailwind: "text-[#38BDF8]",
  sass: "text-[#CC6699]",
  reactflow: "text-[#FF0072]",
  unittest: "text-pf-green",
  integrationtest: "text-[#60A5FA]",
  globe: "text-[#60A5FA]",
  web: "text-pf-accent",
  seo: "text-pf-green",
  razorpay: "text-[#3395FF]",
  genai: "text-pf-accent",
  vector: "text-[#A78BFA]",
  cicd: "text-pf-orange",
};

export default function Skills() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-title"
      className="scroll-mt-20 border-b border-pf-border"
    >
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 md:px-8 md:py-24 lg:grid-cols-[1fr_2.2fr]">
        <div>
          <Eyebrow>Technical skills</Eyebrow>
          <SectionTitle id="skills-title" className="mt-3">
            Tools I use
            <br />
            to build &amp; ship.
          </SectionTitle>
        </div>

        <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3">
          {SKILL_GROUPS.map((group) => (
            <div key={group.title} className="border-l border-pf-border pl-5">
              <h3 className="text-sm font-medium text-pf-text">
                {group.title}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {group.items.map((item) => {
                  return (
                    <li
                      key={item.name}
                      className="flex items-center gap-2.5 text-[13px] text-pf-muted"
                    >
                      <SkillIcon
                        icon={item.icon}
                        className={`size-3.5 shrink-0 ${ICON_COLORS[item.icon] ?? "text-pf-text"}`}
                      />
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
