// Shared by the Professional (/p1) and Developer (/p2) views.
//
// Self-hosted through Fontsource instead of next/font/google: Google Fonts
// sometimes returns extensionless `/l/font?kit=` URLs that next/font can't
// resolve, which fails builds at random (vercel/next.js#99114). The
// `.pf-fonts` class in globals.css maps these families to the --font-* vars.
import "@fontsource-variable/playfair-display/wght.css";
import "@fontsource-variable/playfair-display/wght-italic.css";
import "@fontsource-variable/inter/wght.css";
import "@fontsource-variable/jetbrains-mono/wght.css";

export const portfolioFonts = "pf-fonts";
