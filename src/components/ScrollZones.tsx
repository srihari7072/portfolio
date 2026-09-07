"use client";

import { useEffect, useRef } from "react";

const ZONES = [
  { id: "top", color: "var(--zone-hero)" },
  { id: "about", color: "var(--zone-about)" },
  { id: "experience", color: "var(--zone-experience)" },
  { id: "projects", color: "var(--zone-projects)" },
  { id: "skills", color: "var(--zone-skills)" },
  { id: "contact", color: "var(--zone-contact)" },
];

export default function ScrollZones() {
  const layerRefs = useRef<Record<string, HTMLDivElement | null>>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const layer = layerRefs.current[entry.target.id];
          if (!layer) return;
          layer.classList.toggle("is-active", entry.isIntersecting);
        });
      },
      { rootMargin: "-40% 0px -40% 0px", threshold: 0 }
    );

    ZONES.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div aria-hidden>
      {ZONES.map((zone) => (
        <div
          key={zone.id}
          ref={(el) => {
            layerRefs.current[zone.id] = el;
          }}
          className={`zone-layer${zone.id === "top" ? " is-active" : ""}`}
          style={{ "--zone-color": zone.color } as React.CSSProperties}
        />
      ))}
    </div>
  );
}
