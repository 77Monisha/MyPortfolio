import { portfolioFonts } from "@/lib/portfolio-fonts";

export const metadata = {
  title: "Monisha Chaurasia — Developer View",
  description:
    "The developer side of Monisha Chaurasia's portfolio: README, pinned repositories, commit-style experience and skills. Frontend Engineer open to relocation to the Netherlands.",
};

export default function DeveloperLayout({ children }) {
  return (
    <div
      className={`${portfolioFonts} pf min-h-screen bg-pf-bg font-body text-pf-text antialiased`}
    >
      {children}
    </div>
  );
}
