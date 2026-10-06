import About from "@/components/portfolio/about";
import Experience from "@/components/portfolio/experience";
import Marquee from "@/components/portfolio/marquee";
import Contact from "@/components/portfolio/p3/contact";
import Hero from "@/components/portfolio/p3/hero";
import Projects from "@/components/portfolio/p3/projects";
import Skills from "@/components/portfolio/p3/skills";
import { P3_VIEWS } from "@/components/portfolio/p3/views";
import SiteFooter from "@/components/portfolio/site-footer";
import SiteHeader from "@/components/portfolio/site-header";

export default function PortfolioPhaseThree() {
  return (
    <>
      <a
        href="#main"
        className="sr-only z-60 rounded-md bg-pf-accent px-4 py-2 text-sm text-pf-bg focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        Skip to content
      </a>
      <SiteHeader views={P3_VIEWS} />
      <main id="main">
        <Hero />
        <Projects />
        <Marquee />
        <Experience />
        <Skills />
        <About />
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}
