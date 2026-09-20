"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { SYMBOLS } from "../code-symbol-field";
import { valueNoise } from "./noise";

const CELL_W = 13;
const CELL_H = 20;
const TICK_MS = 80;
const POINTER_RADIUS = 150;
const ALPHA_LEVELS = 10;
const MUTED = "163 163 160";
const ACCENT = "207 195 163";

const styles = (rgb, max) =>
  Array.from(
    { length: ALPHA_LEVELS },
    (_, i) => `rgb(${rgb} / ${(((i + 1) / ALPHA_LEVELS) * max).toFixed(3)})`,
  );

/**
 * Drifting field of code glyphs, after dovetail.com's hero: clusters of
 * characters fade in and out as a slow noise field moves across the grid,
 * glyphs flicker, and the area under the cursor scrambles and brightens.
 * Pauses off-screen; renders a single still frame for reduced motion.
 */
export default function GlyphField({ className, seed = 3 }) {
  const ref = useRef(null);

  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas?.getContext("2d");
    const host = canvas?.parentElement?.parentElement;
    if (!canvas || !ctx || !host) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    const muted = styles(MUTED, 0.5);
    const accent = styles(ACCENT, 0.9);

    let width = 0;
    let height = 0;
    let cols = 0;
    let rows = 0;
    let glyphs = new Uint8Array(0);
    let pointer = null;
    let frame = 0;
    let last = 0;

    const randomGlyph = () => Math.floor(Math.random() * SYMBOLS.length);

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.font = `11px ${getComputedStyle(canvas).fontFamily}`;
      ctx.textBaseline = "top";
      cols = Math.ceil(width / CELL_W);
      rows = Math.ceil(height / CELL_H);
      glyphs = Uint8Array.from({ length: cols * rows }, randomGlyph);
    };

    const draw = (ms) => {
      const t = ms / 1000;
      ctx.clearRect(0, 0, width, height);
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const x = c * CELL_W;
          const y = r * CELL_H;
          // Two octaves drifting in different directions give moving clusters.
          const n =
            0.65 * valueNoise(c * 0.09 + t * 0.12, r * 0.16 - t * 0.04, seed) +
            0.35 * valueNoise(c * 0.23 - t * 0.2, r * 0.3 + t * 0.1, seed + 7);

          let boost = 0;
          if (pointer) {
            const d = Math.hypot(x - pointer.x, y - pointer.y);
            if (d < POINTER_RADIUS) boost = 1 - d / POINTER_RADIUS;
          }

          const v = Math.min(1, (n - 0.5) / 0.28 + boost * 0.9);
          if (v <= 0) continue;

          const i = r * cols + c;
          if (!reduced && Math.random() < 0.02 + boost * 0.35) glyphs[i] = randomGlyph();

          const level = Math.max(0, Math.ceil(v * ALPHA_LEVELS) - 1);
          ctx.fillStyle = (boost > 0.35 ? accent : muted)[level];
          ctx.fillText(SYMBOLS[glyphs[i]], x, y);
        }
      }
    };

    const loop = (ms) => {
      frame = requestAnimationFrame(loop);
      if (ms - last < TICK_MS) return;
      last = ms;
      draw(ms);
    };
    const start = () => {
      if (!frame && !reduced) frame = requestAnimationFrame(loop);
    };
    const stop = () => {
      cancelAnimationFrame(frame);
      frame = 0;
    };

    const ro = new ResizeObserver(() => {
      resize();
      draw(performance.now());
    });
    ro.observe(canvas);

    const io = new IntersectionObserver(([entry]) =>
      entry.isIntersecting ? start() : stop(),
    );
    io.observe(canvas);

    const onMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      pointer = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    };
    const onLeave = () => {
      pointer = null;
    };
    if (finePointer && !reduced) {
      host.addEventListener("pointermove", onMove);
      host.addEventListener("pointerleave", onLeave);
    }

    return () => {
      stop();
      ro.disconnect();
      io.disconnect();
      host.removeEventListener("pointermove", onMove);
      host.removeEventListener("pointerleave", onLeave);
    };
  }, [seed]);

  return (
    <div aria-hidden className={cn("pointer-events-none absolute", className)}>
      <canvas ref={ref} className="size-full font-code" />
    </div>
  );
}
