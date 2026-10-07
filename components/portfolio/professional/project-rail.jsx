"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Desktop (lg+): a horizontally scrolling, snap-aligned row of project cards
 * with previous/next buttons. Below lg it is a plain vertical stack, so on
 * phones every project is reachable by normal scrolling.
 */
export default function ProjectRail({ children, label }) {
  const ref = useRef(null);
  const [edges, setEdges] = useState({ start: true, end: false });

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const update = () =>
      setEdges({
        start: el.scrollLeft <= 4,
        end: el.scrollLeft + el.clientWidth >= el.scrollWidth - 4,
      });
    update();
    el.addEventListener("scroll", update, { passive: true });
    const ro = new ResizeObserver(update);
    ro.observe(el);

    // Cards cut off by the rail edge are dimmed (see data-peek styles), so
    // half-visible, low-contrast text never reads as content.
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          entry.target.dataset.peek = String(entry.intersectionRatio < 0.97);
        }),
      { root: el, threshold: [0, 0.97, 1] },
    );
    [...el.children].forEach((card) => io.observe(card));

    return () => {
      el.removeEventListener("scroll", update);
      ro.disconnect();
      io.disconnect();
    };
  }, []);

  const scrollByCard = (dir) => {
    const el = ref.current;
    const card = el?.firstElementChild;
    if (!el || !card) return;
    const gap = parseFloat(getComputedStyle(el).columnGap) || 0;
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    el.scrollBy({
      left: dir * (card.getBoundingClientRect().width + gap),
      behavior: reduce ? "auto" : "smooth",
    });
  };

  const arrow =
    "grid size-10 place-items-center rounded-full border border-pf-border text-pf-text transition-colors hover:border-pf-muted disabled:cursor-not-allowed disabled:opacity-35 disabled:hover:border-pf-border";

  return (
    <div>
      <div className="mb-4 hidden justify-end gap-2 lg:flex">
        <button
          type="button"
          className={arrow}
          onClick={() => scrollByCard(-1)}
          disabled={edges.start}
          aria-label="Previous projects"
        >
          <ArrowLeft aria-hidden className="size-4" />
        </button>
        <button
          type="button"
          className={arrow}
          onClick={() => scrollByCard(1)}
          disabled={edges.end}
          aria-label="Next projects"
        >
          <ArrowRight aria-hidden className="size-4" />
        </button>
      </div>

      {/* From lg the rail bleeds to the viewport's right edge: --pf-bleed is the
          page gutter beside the max-w-6xl container (2rem padding included). */}
      <div className="relative [--pf-bleed:max(2rem,calc((100vw-72rem)/2+2rem))] lg:mr-[calc(var(--pf-bleed)*-1)]">
        <div
          ref={ref}
          role="region"
          aria-label={label}
          tabIndex={0}
          className={cn(
            "grid gap-5",
            "lg:-my-2 lg:flex lg:snap-x lg:snap-mandatory lg:overflow-x-auto lg:py-2 lg:pr-(--pf-bleed) lg:[scrollbar-width:none] lg:[&::-webkit-scrollbar]:hidden",
            "lg:[&>*]:w-[30rem] lg:[&>*]:shrink-0 lg:[&>*]:snap-start lg:[&>*]:transition-opacity lg:[&>*]:duration-300",
            // A peeking card stays faint until it is scrolled or tabbed into view.
            "lg:[&>[data-peek=true]]:opacity-40 lg:[&>[data-peek=true]:focus-within]:opacity-100",
          )}
        >
          {children}
        </div>

        {/* Shadow over the trailing edge while there is more to scroll. */}
        <div
          aria-hidden
          className={cn(
            "pointer-events-none absolute inset-y-0 right-0 hidden w-40 bg-linear-to-l from-pf-bg/70 via-pf-bg/30 to-transparent transition-opacity duration-300 lg:block",
            edges.end && "opacity-0",
          )}
        />
      </div>
    </div>
  );
}
