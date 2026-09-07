import Reveal from "./Reveal";
import { StaggerGroup, StaggerItem } from "./StaggerReveal";
import { experience } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="relative px-6 md:px-12 py-32 md:py-40">
      <div className="max-w-5xl">
        <Reveal>
          <p className="font-mono text-xs text-accent-2 mb-4">Experience</p>
          <h2 className="font-display text-4xl md:text-6xl font-semibold mb-20 md:mb-28">
            Where I&apos;ve Worked
          </h2>
        </Reveal>

        <div className="relative border-l border-line ml-2">
          {experience.map((role, i) => (
            <Reveal
              key={role.id}
              delay={i * 0.08}
              className="relative pl-10 md:pl-14 pb-28 last:pb-0"
            >
              <span
                className={`absolute left-[-5px] top-1.5 w-2.5 h-2.5 rounded-full border ${
                  role.status === "current"
                    ? "bg-accent-2 border-accent-2"
                    : "bg-bg border-accent"
                }`}
              />

              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-1">
                <h3 className="font-display text-2xl md:text-4xl font-semibold">
                  {role.role}
                </h3>
                {role.status === "current" && (
                  <span className="font-mono text-[11px] text-accent-2">Current</span>
                )}
              </div>
              <p className="text-muted mb-1">{role.org}</p>
              <p className="font-mono text-xs text-muted mb-8">{role.period}</p>

              <p className="text-lg text-text max-w-2xl mb-10 leading-relaxed">
                {role.summary}
              </p>

              <StaggerGroup className="space-y-5 max-w-2xl mb-10">
                {role.points.map((point) => (
                  <StaggerItem key={point} as="p" className="text-muted leading-relaxed">
                    {point}
                  </StaggerItem>
                ))}
              </StaggerGroup>

              <p className="font-mono text-xs text-accent leading-loose max-w-2xl">
                {role.tech.join("  ·  ")}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
