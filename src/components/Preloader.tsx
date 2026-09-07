"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { profile } from "@/lib/data";

const SESSION_KEY = "srihari-portfolio-booted";

export default function Preloader() {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);
  const [skip, setSkip] = useState(true);

  useEffect(() => {
    const alreadyBooted = sessionStorage.getItem(SESSION_KEY);
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (alreadyBooted || reducedMotion) {
      setSkip(true);
      return;
    }

    setSkip(false);
    document.body.style.overflow = "hidden";

    const duration = 1500;
    const start = performance.now();
    let raf: number;

    function tick(now: number) {
      const elapsed = now - start;
      const t = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      setProgress(Math.round(eased * 100));

      if (t < 1) {
        raf = requestAnimationFrame(tick);
      } else {
        sessionStorage.setItem(SESSION_KEY, "1");
        setTimeout(() => setDone(true), 250);
      }
    }
    raf = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(raf);
  }, []);

  useEffect(() => {
    if (done) document.body.style.overflow = "";
  }, [done]);

  if (skip) return null;

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[100] bg-bg flex flex-col items-center justify-center"
          initial={{ opacity: 1 }}
          exit={{ clipPath: "inset(0 0 100% 0)" }}
          transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
        >
          <div className="w-64">
            <div className="flex items-baseline justify-between mb-3">
              <span className="font-mono text-xs text-muted">Initializing</span>
              <span className="font-display text-4xl font-semibold tabular-nums">
                {progress}
              </span>
            </div>
            <div className="h-px bg-line w-full overflow-hidden">
              <motion.div
                className="h-full bg-accent"
                style={{ width: `${progress}%` }}
              />
            </div>
            <p className="font-mono text-[11px] text-accent mt-4 tracking-tight">
              {profile.name}
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
