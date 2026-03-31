import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function highlightText(text) {
  if (typeof text !== "string") return text; // 🛡️ safety

  const parts = text.split(/(\*\*.*?\*\*)/g);

  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <span key={i} className="font-semibold text-amber-50 inline">
          {part.slice(2, -2)}
        </span>
      );
    }
    return <span key={i}>{part}</span>;
  });
}
