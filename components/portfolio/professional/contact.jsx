import { Download, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { PROFILE } from "@/lib/portfolio-data";
import { ButtonLink } from "../primitives";
import WaterReflection from "../water-reflection";
import CopyEmail from "./copy-email";
import GlyphField from "./glyph-field";

// Closing heading with the mirror / water effect from the design references,
// over a drifting code-glyph field.
export default function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="relative scroll-mt-20 overflow-hidden border-b border-pf-border"
    >
      <GlyphField className="inset-0 mask-[radial-gradient(ellipse_75%_80%_at_50%_40%,black_35%,transparent_85%)]" />
      {/* Keeps the glyphs behind the heading but quiet behind body copy and buttons. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_42%_32%_at_50%_75%,rgb(11_11_11/0.92),transparent_100%)]"
      />

      <div className="relative mx-auto flex max-w-3xl flex-col items-center px-4 pb-14 pt-16 text-center md:px-8 md:pt-24">
        <div>
          <WaterReflection
            id="contact-title"
            className="font-display text-[clamp(2.75rem,7vw,5rem)] leading-[0.98] tracking-[-0.03em]"
          >
            Let&apos;s build
            <br />
            something <em className="italic text-pf-accent">useful.</em>
          </WaterReflection>
        </div>

        <p className="mt-6 max-w-md text-base leading-relaxed text-pf-muted">
          I&apos;m open to Software Engineering opportunities - full-time roles
          or just a chat. Feel free to reach out.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <ButtonLink
            href={`mailto:${PROFILE.email}`}
            variant="primary"
            icon={Mail}
          >
            Email me
          </ButtonLink>
          <ButtonLink href={PROFILE.linkedin} icon={FaLinkedin} external>
            LinkedIn
          </ButtonLink>
          <ButtonLink href={PROFILE.github} icon={FaGithub} external>
            GitHub
          </ButtonLink>
          <ButtonLink href={PROFILE.resume} icon={Download} download>
            Resume
          </ButtonLink>
        </div>
        <CopyEmail email={PROFILE.email} className="mt-5" />
      </div>
    </section>
  );
}
