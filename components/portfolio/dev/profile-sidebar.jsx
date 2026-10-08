import { Building2, Download, Mail, MapPin } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { ABOUT, CAREER, PROFILE } from "@/lib/portfolio-data";
import { ButtonLink } from "../primitives";
import { ViewToggle } from "../view-mode";

const TONES = {
  accent: "bg-pf-accent",
  muted: "bg-pf-muted",
  orange: "bg-pf-orange",
};

const LINK_CLASS = "transition-colors hover:text-pf-text hover:underline";

function SidebarBlock({ title, children }) {
  return (
    <div className="border-t border-pf-border pt-5">
      <h2 className="text-sm font-medium text-pf-text">{title}</h2>
      <div className="mt-3">{children}</div>
    </div>
  );
}

export default function ProfileSidebar() {
  const current = CAREER[0];
  const currentProduct = current.projects[0].name.split(" — ")[0];

  return (
    <section aria-labelledby="profile-name" className="space-y-5">
      <ViewToggle className="sm:hidden" />

      <div className="flex items-center gap-4 lg:block">
        <div className="relative shrink-0">
          <div
            aria-hidden
            className="grid size-20 place-items-center rounded-full border border-pf-border bg-pf-card font-display text-3xl text-pf-accent lg:size-56 lg:text-7xl"
          >
            MC
          </div>
          <span
            title="Open to work"
            className="absolute bottom-0 right-0 flex items-center gap-1.5 rounded-full border border-pf-border bg-pf-bg px-2 py-1 font-code text-[10px] text-pf-green lg:bottom-4 lg:right-4"
          >
            <span aria-hidden className="size-1.5 rounded-full bg-pf-green" />
            <span className="sr-only lg:not-sr-only">open_to_work</span>
          </span>
        </div>
        <div className="min-w-0 lg:mt-5">
          <h1
            id="profile-name"
            className="font-display text-2xl leading-tight tracking-[-0.01em] lg:text-[1.75rem]"
          >
            {PROFILE.name}
          </h1>
          <p className="font-code text-sm text-pf-muted">{PROFILE.handle}</p>
        </div>
      </div>

      <p className="text-sm leading-relaxed text-pf-text/85">
        <span className="font-medium text-pf-text">{current.role}</span> at{" "}
        {current.company},
        building <span className="font-medium text-pf-text">{currentProduct}</span>.
      </p>

      <p className="flex items-center gap-2.5 rounded-lg border border-pf-border bg-pf-card px-3 py-2 text-[13px] text-pf-text">
        <span aria-hidden className="size-2 shrink-0 rounded-full bg-pf-green" />
        {ABOUT.status}
      </p>

      <div className="grid gap-2">
        <ButtonLink href={PROFILE.resume} variant="primary" icon={Download} download>
          Download resume
        </ButtonLink>
        <ButtonLink href={PROFILE.github} icon={FaGithub} external>
          View on GitHub
        </ButtonLink>
      </div>

      <dl className="flex flex-wrap gap-x-3 gap-y-1 text-[13px] text-pf-muted">
        {ABOUT.stats.map((stat, i) => (
          <div key={stat.label} className="flex flex-row-reverse gap-1">
            <dt>
              {stat.label.toLowerCase()}
              {i < ABOUT.stats.length - 1 && <span aria-hidden> ·</span>}
            </dt>
            <dd className="font-medium text-pf-text">{stat.value}</dd>
          </div>
        ))}
      </dl>

      <ul className="space-y-2.5 text-[13px] text-pf-muted">
        <li className="flex items-center gap-2.5">
          <Building2 aria-hidden className="size-4 shrink-0" />
          {current.company}
        </li>
        <li className="flex items-center gap-2.5">
          <MapPin aria-hidden className="size-4 shrink-0" />
          {current.location}
        </li>
        <li className="flex items-center gap-2.5">
          <Mail aria-hidden className="size-4 shrink-0" />
          <a href={`mailto:${PROFILE.email}`} className={`truncate ${LINK_CLASS}`}>
            {PROFILE.email}
          </a>
        </li>
        <li className="flex items-center gap-2.5">
          <FaLinkedin aria-hidden className="size-4 shrink-0" />
          <a
            href={PROFILE.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className={LINK_CLASS}
          >
            in/monisha-chaurasia
            <span className="sr-only"> on LinkedIn (opens in a new tab)</span>
          </a>
        </li>
        <li className="flex items-center gap-2.5">
          <FaGithub aria-hidden className="size-4 shrink-0" />
          <a
            href={PROFILE.github}
            target="_blank"
            rel="noopener noreferrer"
            className={LINK_CLASS}
          >
            @{PROFILE.handle}
            <span className="sr-only"> on GitHub (opens in a new tab)</span>
          </a>
        </li>
      </ul>

      <SidebarBlock title="Languages">
        <ul className="space-y-2 text-[13px]">
          {ABOUT.languages.map((lang) => (
            <li key={lang.name} className="flex items-center gap-2.5">
              <span aria-hidden className={`size-1.5 rounded-full ${TONES[lang.tone]}`} />
              <span className="text-pf-text">{lang.name}</span>
              <span className="text-pf-muted">— {lang.level}</span>
            </li>
          ))}
        </ul>
      </SidebarBlock>
    </section>
  );
}
