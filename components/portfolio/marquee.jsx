import { MARQUEE_WORDS } from "@/lib/portfolio-data";

// Slow editorial ticker between sections. Purely decorative; stops under
// prefers-reduced-motion (see .pf-marquee-track in globals.css).
export default function Marquee() {
  const row = (
    <ul className="flex shrink-0 items-center gap-10 pr-10">
      {MARQUEE_WORDS.map((word, i) => (
        <li key={word} className="flex items-center gap-10">
          <span
            className={
              i % 2
                ? "font-display italic text-pf-muted"
                : "font-display text-pf-text/80"
            }
          >
            {word}
          </span>
          <span aria-hidden className="text-pf-orange/70 text-base">
            ✦
          </span>
        </li>
      ))}
    </ul>
  );

  return (
    <div
      aria-hidden
      className="overflow-hidden border-b border-pf-border py-6 text-[clamp(1.5rem,3vw,2.25rem)] mask-[linear-gradient(90deg,transparent,black_10%,black_90%,transparent)]"
    >
      <div className="pf-marquee-track flex w-max">
        {row}
        {row}
      </div>
    </div>
  );
}
