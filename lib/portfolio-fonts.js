import { Inter, JetBrains_Mono, Playfair_Display } from "next/font/google";

// Shared by the Professional (/p1) and Developer (/p2) views.
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const portfolioFonts = `${playfair.variable} ${inter.variable} ${jetbrains.variable}`;
