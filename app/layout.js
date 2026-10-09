import { ThemeProvider } from "@/components/theme-provider";
// Self-hosted (see lib/portfolio-fonts.js for why not next/font/google);
// `.site-fonts` in globals.css sets --font-serif / --font-sans.
import "@fontsource-variable/lora/wght.css";
import "@fontsource-variable/lora/wght-italic.css";
import "@fontsource-variable/dm-sans/wght.css";
import "./globals.css";

export const metadata = {
  title: "Monisha Chaurasia | Software Engineer Portfolio",
  description:
    "Mid-level software engineer building scalable, accessible, and AI-powered web applications.",
  // public/favicon.ico holds PNG data, so declare the type for browsers.
  icons: { icon: { url: "/favicon.ico", type: "image/png" } },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className="site-fonts font-sans">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
