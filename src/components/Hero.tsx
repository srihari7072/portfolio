"use client";

import { motion } from "framer-motion";
import { profile } from "@/lib/data";

const NAME = profile.name;

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex items-end overflow-hidden border-b border-line"
    >
      <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/40 to-bg/10" />

      <div className="relative z-10 w-full px-6 md:px-12 pb-20 pt-40">
        <div className="max-w-3xl">
          <p className="font-mono text-xs text-accent tracking-tight mb-4">
            {profile.location} <span className="text-muted">· available for work</span>
          </p>

          <h1 className="font-display font-semibold text-[13vw] leading-[0.95] sm:text-6xl md:text-7xl text-text">
            {NAME.split("").map((char, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 0.15 + i * 0.03,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="inline-block"
              >
                {char === " " ? " " : char}
              </motion.span>
            ))}
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0] }}
              transition={{
                delay: 0.15 + NAME.length * 0.03 + 0.3,
                duration: 0.9,
                repeat: Infinity,
                repeatDelay: 0.1,
              }}
              className="inline-block w-[0.5ch] ml-1 -mb-1 h-[0.85em] bg-accent align-middle"
            />
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="mt-5 font-mono text-sm sm:text-base text-muted max-w-xl"
          >
            {profile.role}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <a
              href="#experience"
              className="border border-accent text-accent px-5 py-2.5 text-sm font-medium hover:bg-accent hover:text-bg transition-colors"
            >
              View work
            </a>
            <a
              href="#contact"
              className="border border-line text-text px-5 py-2.5 text-sm font-medium hover:border-muted transition-colors"
            >
              Contact
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
