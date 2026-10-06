"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

export const SYMBOLS = ["0", "1", "/", "%", "+", "-", "<", ">", "*", "=", ":", "8", "3", "9", "2"];

// Deterministic so server and client render identical markup.
function buildField(rows, cols, seed) {
  let s = seed;
  const rand = () => {
    s = (s * 1664525 + 1013904223) % 4294967296;
    return s / 4294967296;
  };
  return Array.from({ length: rows }, () =>
    Array.from({ length: cols }, () =>
      rand() < 0.42 ? SYMBOLS[Math.floor(rand() * SYMBOLS.length)] : " ",
    ).join(" "),
  ).join("\n");
}

/**
 * Faint programming-symbol texture. With `parallax`, it drifts a few pixels
 * toward the cursor; disabled for reduced motion and touch pointers.
 */
export default function CodeSymbolField({
  className,
  rows = 18,
  cols = 26,
  seed = 7,
  parallax = false,
}) {
  const ref = useRef(null);

  useEffect(() => {
    if (!parallax) return;
    const el = ref.current;
    const host = el?.parentElement;
    if (!el || !host) return;
    const motionOk = window.matchMedia(
      "(prefers-reduced-motion: no-preference) and (pointer: fine)",
    );
    if (!motionOk.matches) return;

    let frame = 0;
    const onMove = (e) => {
      const rect = host.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        el.style.transform = `translate3d(${x * -14}px, ${y * -10}px, 0)`;
      });
    };
    host.addEventListener("pointermove", onMove);
    return () => {
      host.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(frame);
    };
  }, [parallax]);

  return (
    <pre
      ref={ref}
      aria-hidden
      className={cn(
        "pointer-events-none absolute select-none font-code text-[11px] leading-[1.9] text-pf-muted/25 transition-transform duration-500 ease-out",
        className,
      )}
    >
      {buildField(rows, cols, seed)}
    </pre>
  );
}
