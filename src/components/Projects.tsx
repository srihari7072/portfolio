import Reveal from "./Reveal";
import { StaggerGroup, StaggerItem } from "./StaggerReveal";
import { projects } from "@/lib/data";

export default function Projects() {
  return (
    <section id="projects" className="relative px-6 md:px-12 py-32 md:py-40">
      <div className="max-w-5xl">
        <Reveal>
          <p className="font-mono text-xs text-[#22d3ee] mb-4">featured work</p>
          <h2 className="font-display text-4xl md:text-6xl font-semibold mb-20 md:mb-28">
            Selected projects
          </h2>
        </Reveal>

        <div>
          {projects.map((p, i) => (
            <Reveal
              key={p.id}
              delay={i * 0.05}
              className="grid md:grid-cols-[auto_1fr] gap-6 md:gap-14 py-16 md:py-20 border-t border-line/60 first:border-t-0"
            >
              <span className="font-display text-6xl md:text-8xl font-semibold text-line select-none leading-none">
                {String(i + 1).padStart(2, "0")}
              </span>

              <div>
                <div className="flex flex-wrap items-baseline justify-between gap-3 mb-4">
                  <h3 className="font-display text-2xl md:text-4xl font-semibold">
                    {p.name}
                  </h3>
                  <span className="font-mono text-xs text-[#22d3ee] whitespace-nowrap">
                    {p.tag}
                  </span>
                </div>

                <p className="text-lg text-text max-w-2xl mb-8 leading-relaxed">
                  {p.description}
                </p>

                <StaggerGroup className="space-y-4 max-w-2xl mb-8">
                  {p.details.map((d) => (
                    <StaggerItem key={d} as="p" className="text-muted leading-relaxed">
                      {d}
                    </StaggerItem>
                  ))}
                </StaggerGroup>

                <p className="font-mono text-xs text-muted">{p.tech.join("  ·  ")}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
