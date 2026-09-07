"use client";

import { useEffect, useState } from "react";

const SECTIONS = [
  { id: "top", label: "Intro" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

export default function Nav() {
  const [active, setActive] = useState("top");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );

    SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    function handleScroll() {
      const scrolledToBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;
      if (scrolledToBottom) setActive(SECTIONS[SECTIONS.length - 1].id);
    }
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className="fixed z-50 right-6 top-1/2 -translate-y-1/2 hidden md:flex flex-col gap-4">
      {SECTIONS.map((s) => (
        <a
          key={s.id}
          href={`#${s.id}`}
          className="group flex items-center gap-3 justify-end"
          aria-label={s.label}
          aria-current={active === s.id ? "true" : undefined}
        >
          <span
            className={`font-mono text-[11px] transition-colors ${
              active === s.id ? "text-accent" : "text-muted opacity-0 group-hover:opacity-100"
            }`}
          >
            {s.label}
          </span>
          <span
            className={`block w-1.5 h-1.5 rounded-full border transition-colors ${
              active === s.id
                ? "bg-accent border-accent"
                : "bg-transparent border-muted group-hover:border-text"
            }`}
          />
        </a>
      ))}
    </nav>
  );
}
