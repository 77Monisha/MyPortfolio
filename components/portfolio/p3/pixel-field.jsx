"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { valueNoise } from "./noise";

const GOLD = "222 178 108";
const PALE = "241 239 232";
const ALPHA_LEVELS = 10;
// Pixels fade out this close (px) to any [data-pixel-clear] element in the
// host, so text and buttons always sit on a clean background.
const CLEAR_PAD = 6;
const CLEAR_FADE = 28;

function mulberry32(seed) {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/**
 * Dithered gold pixel texture. `glows` place the dense areas, in fractions of
 * the field: { x, y, rx, ry, strength }. `streaks` breaks the dither into
 * vertical runs, like a scanned halftone. Elements in the host marked with
 * `data-pixel-clear` are kept free of pixels. Drawn once per size on a
 * canvas, so it stays static (and therefore reduced-motion safe).
 */
export default function PixelField({
  glows,
  seed = 1,
  step = 5,
  streaks = true,
  className,
}) {
  const ref = useRef(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const host = canvas.parentElement?.parentElement;
    const clearEls = host ? [...host.querySelectorAll("[data-pixel-clear]")] : [];

    const styles = (rgb) =>
      Array.from(
        { length: ALPHA_LEVELS },
        (_, i) => `rgb(${rgb} / ${((i + 1) / ALPHA_LEVELS).toFixed(2)})`,
      );
    const gold = styles(GOLD);
    const pale = styles(PALE);

    const density = (u, v) => {
      let d = 0;
      for (const g of glows) {
        const dist = Math.hypot((u - g.x) / g.rx, (v - g.y) / g.ry);
        const f = Math.max(0, 1 - dist);
        d = Math.max(d, f ** 1.4 * g.strength);
      }
      return d;
    };

    let frame = 0;
    const draw = () => {
      const base = canvas.getBoundingClientRect();
      const { width, height } = base;
      if (!width || !height) return;

      const rects = clearEls
        .map((el) => el.getBoundingClientRect())
        .filter((r) => r.width && r.height)
        .map((r) => ({
          left: r.left - base.left,
          right: r.right - base.left,
          top: r.top - base.top,
          bottom: r.bottom - base.top,
        }));
      const clearance = (x, y) => {
        let f = 1;
        for (const r of rects) {
          const dx = Math.max(r.left - x, 0, x - r.right);
          const dy = Math.max(r.top - y, 0, y - r.bottom);
          f = Math.min(f, Math.max(0, (Math.hypot(dx, dy) - CLEAR_PAD) / CLEAR_FADE));
        }
        return Math.min(1, f);
      };

      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, width, height);

      const rand = mulberry32(seed);
      for (let y = 0; y < height; y += step) {
        for (let x = 0; x < width; x += step) {
          let d = density(x / width, y / height);
          if (d < 0.01) continue;
          if (streaks) d *= 0.3 + 1.1 * valueNoise(x / 12, y / 80, seed);
          if (rects.length) d *= clearance(x, y);
          d = Math.min(1, d);
          if (rand() > d) continue;

          const size = 1 + d * 1.8 * rand();
          const alpha = 0.3 + 0.7 * d * (0.55 + 0.45 * rand());
          const level = Math.min(ALPHA_LEVELS - 1, Math.floor(alpha * ALPHA_LEVELS));
          ctx.fillStyle = (rand() < 0.04 ? pale : gold)[level];
          ctx.fillRect(x, y, size, size);
        }
      }
    };

    const ro = new ResizeObserver(() => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(draw);
    });
    ro.observe(canvas);
    clearEls.forEach((el) => ro.observe(el));
    return () => {
      ro.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [glows, seed, step, streaks]);

  return (
    <div aria-hidden className={cn("pointer-events-none absolute", className)}>
      <canvas ref={ref} className="size-full" />
    </div>
  );
}
