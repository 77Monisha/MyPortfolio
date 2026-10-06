import { PROFILE } from "@/lib/portfolio-data";

export default function SiteFooter() {
  return (
    <footer className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-4 py-8 text-xs text-pf-muted md:px-8">
      <p className="font-code tracking-[0.08em]">{PROFILE.wordmark}</p>
      <p>
        © {new Date().getFullYear()} {PROFILE.name} · Built with Next.js
      </p>
    </footer>
  );
}
