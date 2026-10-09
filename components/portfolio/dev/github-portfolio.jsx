import { portfolioFonts } from "@/lib/portfolio-fonts";
import SiteFooter from "../site-footer";
import CommitHistory from "./commit-history";
import { CommandPaletteProvider } from "./command-palette";
import DevContact from "./dev-contact";
import DevHeader from "./dev-header";
import ProfileSidebar from "./profile-sidebar";
import Readme from "./readme";
import Repositories from "./repositories";
import SkillsFile from "./skills-file";

// The GitHub-style Professional View. Rendered directly at both / (the
// homepage) and /p2, so each route re-exports this component and metadata.
export const githubPortfolioMetadata = {
  title: "Monisha Chaurasia — Software Engineer Portfolio",
  description:
    "Monisha Chaurasia's developer profile: README, pinned repositories, experience and skills. Software Development Engineer II building with React, Next.js and TypeScript. Open to international opportunities.",
};

export default function GithubPortfolio() {
  return (
    <div
      className={`${portfolioFonts} pf min-h-screen bg-pf-bg font-body text-pf-text antialiased`}
    >
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
    </div>
  );
}
