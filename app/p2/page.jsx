import CommitHistory from "@/components/portfolio/dev/commit-history";
import { CommandPaletteProvider } from "@/components/portfolio/dev/command-palette";
import DevContact from "@/components/portfolio/dev/dev-contact";
import DevHeader from "@/components/portfolio/dev/dev-header";
import ProfileSidebar from "@/components/portfolio/dev/profile-sidebar";
import Readme from "@/components/portfolio/dev/readme";
import Repositories from "@/components/portfolio/dev/repositories";
import SkillsFile from "@/components/portfolio/dev/skills-file";
import SiteFooter from "@/components/portfolio/site-footer";

export default function PortfolioPhaseTwo() {
  return (
    <CommandPaletteProvider>
      <a
        href="#main"
        className="sr-only z-60 rounded-md bg-pf-accent px-4 py-2 text-sm text-pf-bg focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        Skip to content
      </a>
      <DevHeader />
      <main
        id="main"
        className="mx-auto grid max-w-6xl gap-10 px-4 pb-16 pt-8 md:px-8 lg:grid-cols-[17rem_1fr] lg:gap-12 lg:pt-10"
      >
        <ProfileSidebar />
        <div className="min-w-0 space-y-14">
          <Readme />
          <Repositories />
          <CommitHistory />
          <SkillsFile />
          <DevContact />
        </div>
      </main>
      <div className="border-t border-pf-border">
        <SiteFooter />
      </div>
    </CommandPaletteProvider>
  );
}
