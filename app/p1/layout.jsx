import { portfolioFonts } from "@/lib/portfolio-fonts";

export const metadata = {
  title: "Monisha Chaurasia — Frontend Engineer",
  description:
    "Software Engineer building scalable, production-ready web applications with React, Next.js, and TypeScript. Experienced in complex product workflows, performance optimization, and accessible user experiences. Open to relocation to the Netherlands.",
};

export default function PortfolioLayout({ children }) {
  return (
    <div
      className={`${portfolioFonts} pf pf-pro min-h-screen bg-pf-bg font-body text-pf-text antialiased`}
    >
      {children}
    </div>
  );
}
