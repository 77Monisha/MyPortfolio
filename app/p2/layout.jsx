import { portfolioFonts } from "@/lib/portfolio-fonts";

export const metadata = {
  title: "Monisha Chaurasia — Developer View",
  description:
    "Monisha Chaurasia's developer profile: README, pinned repositories, experience and skills. Software Development Engineer II building with React, Next.js and TypeScript. Open to international opportunities.",
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
