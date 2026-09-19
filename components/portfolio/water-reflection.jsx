"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

/**
 * Renders a heading with a rippling water reflection of its last line below.
 * The ripple only animates while on screen and when motion is allowed;
 * otherwise the reflection stays as a static, softly distorted mirror.
 */
export default function WaterReflection({
  as: Tag = "h2",
  id,
  className,
  children,
}) {
  const ref = useRef(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const motion = window.matchMedia("(prefers-reduced-motion: no-preference)");
    let visible = false;
    const sync = () => setAnimate(visible && motion.matches);

    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      sync();
    });
    io.observe(el);
    motion.addEventListener("change", sync);
    return () => {
      io.disconnect();
      motion.removeEventListener("change", sync);
    };
  }, []);

  return (
    <div ref={ref}>
      <Tag id={id} className={className}>
        {children}
      </Tag>

      {/* Clipped to roughly one line, so only the flipped last line shows. */}
      <div
        aria-hidden
        className={cn(
          className,
          "pointer-events-none mt-0 h-[0.9em] select-none overflow-hidden",
        )}
      >
        <div className="filter-[url(#pf-water)] mask-[linear-gradient(to_top,rgb(0_0_0/0.42),transparent_48%)] -scale-y-100">
          {children}
        </div>
      </div>

      <svg aria-hidden width="0" height="0" className="absolute">
        <filter id="pf-water" x="-5%" y="-5%" width="110%" height="110%">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.008 0.09"
            numOctaves="2"
            seed="4"
            result="noise"
          >
            {animate && (
              <animate
                attributeName="baseFrequency"
                dur="14s"
                values="0.008 0.09;0.012 0.12;0.008 0.09"
                repeatCount="indefinite"
              />
            )}
          </feTurbulence>
          <feDisplacementMap
            in="SourceGraphic"
            in2="noise"
            scale="14"
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>
      </svg>
    </div>
  );
}
