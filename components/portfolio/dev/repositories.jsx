import { ArrowUpRight, BookMarked, Globe } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import { PROFILE, PROJECTS, SIDE_PROJECTS } from "@/lib/portfolio-data";
import { DevSectionHeading, TopicList } from "./dev-primitives";

function RepoCard({ project }) {
  return (
    <article
      aria-labelledby={`repo-${project.id}`}
      className="flex h-full flex-col rounded-xl border border-pf-border bg-pf-card p-5 transition-colors duration-200 hover:border-pf-muted/50"
    >
      <div className="flex items-center gap-2">
        <BookMarked aria-hidden className="size-4 shrink-0 text-pf-muted" />
        <h3 id={`repo-${project.id}`} className="min-w-0 truncate">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="font-code text-sm font-medium text-pf-accent hover:underline"
          >
            {project.id}
            <span className="sr-only"> source on GitHub (opens in a new tab)</span>
          </a>
        </h3>
        <span className="ml-auto shrink-0 rounded-full border border-pf-border px-2 py-0.5 text-[11px] text-pf-muted">
          Public
        </span>
      </div>

      <p className="mt-3 text-sm leading-relaxed text-pf-text/85">
        {project.description}
      </p>
      <p className="mt-3 font-code text-xs leading-relaxed text-pf-muted">
        <span className="text-pf-orange">{"// challenge: "}</span>
        {project.challenge}
      </p>

      <TopicList
        items={project.tech}
        label={`${project.name} technologies`}
        className="mt-4"
      />

      <div className="mt-auto flex flex-wrap items-center gap-x-5 gap-y-2 pt-5 text-xs text-pf-muted">
        <a
          href={project.live}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 transition-colors hover:text-pf-text"
        >
          <Globe aria-hidden className="size-3.5" />
          Live demo
          <span className="sr-only"> of {project.name} (opens in a new tab)</span>
        </a>
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 transition-colors hover:text-pf-text"
        >
          <FaGithub aria-hidden className="size-3.5" />
          Source
          <span className="sr-only"> code for {project.name} (opens in a new tab)</span>
        </a>
      </div>
    </article>
  );
}

export default function Repositories() {
  const repos = [...PROJECTS, ...SIDE_PROJECTS];

  return (
    <section
      id="repositories"
      aria-labelledby="repos-title"
      className="scroll-mt-32"
    >
      <DevSectionHeading id="repos-title" icon={BookMarked}>
        Pinned
      </DevSectionHeading>

      <ul className="mt-4 grid gap-4 md:grid-cols-2">
        {repos.map((project) => (
          <li key={project.id}>
            <RepoCard project={project} />
          </li>
        ))}
        <li>
          <a
            href={PROFILE.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex h-full min-h-40 flex-col items-center justify-center gap-2 rounded-xl border border-dashed border-pf-border p-5 text-sm text-pf-muted transition-colors hover:border-pf-muted hover:text-pf-text"
          >
            <FaGithub aria-hidden className="size-5" />
            <span className="inline-flex items-center gap-1.5">
              More on GitHub
              <ArrowUpRight
                aria-hidden
                className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </span>
            <span className="font-code text-xs">@{PROFILE.handle}</span>
            <span className="sr-only">(opens in a new tab)</span>
          </a>
        </li>
      </ul>
    </section>
  );
}
