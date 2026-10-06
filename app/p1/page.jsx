import About from "@/components/portfolio/about";
import Experience from "@/components/portfolio/experience";
import Marquee from "@/components/portfolio/marquee";
import Contact from "@/components/portfolio/professional/contact";
import Hero from "@/components/portfolio/professional/hero";
import Projects from "@/components/portfolio/professional/projects";
import Skills from "@/components/portfolio/professional/skills";
import SiteFooter from "@/components/portfolio/site-footer";
import SiteHeader from "@/components/portfolio/site-header";

export default function PortfolioPhaseOne() {
  return (
    <>
      <a
        href="#main"
        className="sr-only z-60 rounded-md bg-pf-accent px-4 py-2 text-sm text-pf-bg focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        Skip to content
      </a>
      <SiteHeader />
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
