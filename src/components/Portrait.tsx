"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Portrait() {
  return (
    <div className="relative w-full max-w-[300px] md:max-w-[380px]">
      <motion.div
        aria-hidden
        className="absolute -inset-8 rounded-full bg-accent blur-3xl"
        animate={{ opacity: [0.16, 0.3, 0.16], scale: [1, 1.1, 1] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="absolute -inset-4 rounded-full bg-[#7c9cff] blur-3xl"
        animate={{ opacity: [0.1, 0.22, 0.1], scale: [1.05, 0.95, 1.05] }}
        transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
      />

      <motion.div
        aria-hidden
        className="absolute -inset-6 rounded-full border border-dashed border-accent/40"
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      />

      <div className="corner-frame relative p-2">
        <div className="relative aspect-[3/4] overflow-hidden">
          <motion.div
            className="absolute inset-0"
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.14 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <Image
              src="/images/srihari.jpg"
              alt="Portrait of Sri Hari Batchu"
              fill
              sizes="(min-width: 768px) 380px, 300px"
              priority
              className="object-cover object-top portrait-grade"
            />
          </motion.div>

          <div className="absolute inset-0 bg-gradient-to-t from-bg/50 via-transparent to-transparent pointer-events-none" />
          <div className="absolute inset-0 bg-accent/10 mix-blend-color pointer-events-none" />

          <motion.div
            aria-hidden
            className="absolute inset-x-0 h-1/3 bg-gradient-to-b from-transparent via-accent/25 to-transparent pointer-events-none"
            animate={{ top: ["-35%", "105%"] }}
            transition={{ duration: 3.2, repeat: Infinity, repeatDelay: 1.6, ease: "easeInOut" }}
          />
        </div>

        <div className="flex items-center justify-between gap-3 pt-3">
          <p className="font-mono text-[11px] text-muted">sri hari batchu</p>
          <span className="flex items-center gap-1.5 shrink-0">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
            </span>
            <span className="font-mono text-[10px] text-accent">active</span>
          </span>
        </div>
      </div>
    </div>
  );
}
