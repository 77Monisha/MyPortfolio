import { portfolioFonts } from "@/lib/portfolio-fonts";

export const metadata = {
  title: "Monisha Chaurasia — Frontend Engineer",
  description:
    "Frontend Engineer with 3+ years of experience building accessible, performant web applications with React and Next.js. Open to relocation to the Netherlands.",
};

export default function PortfolioPhaseThreeLayout({ children }) {
  return (
    <div
      className={`${portfolioFonts} pf pf-p3 min-h-screen bg-pf-bg font-body text-pf-text antialiased`}
    >
      {children}
    </div>
  );
}
