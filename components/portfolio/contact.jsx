import { Download, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { PROFILE } from "@/lib/portfolio-data";
import CodeSymbolField from "./code-symbol-field";
import { ButtonLink, Eyebrow } from "./primitives";
import WaterReflection from "./water-reflection";

export default function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="relative scroll-mt-20 overflow-hidden border-b border-pf-border"
    >
      <CodeSymbolField
        rows={14}
        cols={40}
        seed={21}
        className="left-[30%] top-4 -translate-x-1/2 mask-[radial-gradient(ellipse_at_center,black_20%,transparent_70%)]"
      />

      <div className="relative mx-auto grid max-w-6xl gap-10 px-4 pb-10 pt-16 md:px-8 md:pt-24 lg:grid-cols-[1.5fr_1fr] lg:items-start">
        <div>
          <Eyebrow>Contact</Eyebrow>
          <div className="mt-4">
            <WaterReflection
              id="contact-title"
              className="font-display text-[clamp(2.75rem,6.5vw,4.5rem)] leading-[0.98] tracking-[-0.03em]"
            >
              Let&apos;s build
              <br />
              something <em className="italic text-pf-accent">useful.</em>
            </WaterReflection>
          </div>
        </div>

        <div className="lg:pt-14">
          <p className="max-w-md text-base leading-relaxed text-pf-muted">
            I&apos;m open to frontend opportunities and would love to hear from
            you. Whether it&apos;s a full-time role, freelance work or just a
            chat — feel free to reach out.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <ButtonLink href={`mailto:${PROFILE.email}`} variant="primary" icon={Mail}>
              Email me
            </ButtonLink>
            <ButtonLink href={PROFILE.linkedin} icon={FaLinkedin} external>
              LinkedIn
            </ButtonLink>
            <ButtonLink href={PROFILE.github} icon={FaGithub} external>
              GitHub
            </ButtonLink>
            <ButtonLink href={PROFILE.resume} icon={Download} download>
              Download resume
            </ButtonLink>
          </div>
          <p className="mt-6 font-code text-xs text-pf-muted">
            {PROFILE.email}
          </p>
        </div>
      </div>
    </section>
  );
}
