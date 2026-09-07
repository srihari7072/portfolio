import Reveal from "./Reveal";
import Marquee from "./Marquee";
import { StaggerGroup, StaggerItem } from "./StaggerReveal";
import { skillGroups } from "@/lib/data";

const allSkills = skillGroups.flatMap((g) => g.items.map((i) => i.name));

export default function Skills() {
  return (
    <section id="skills" className="relative py-32 md:py-40">
      <div className="max-w-5xl px-6 md:px-12">
        <Reveal>
          <p className="font-mono text-xs text-[#e85da0] mb-4">capabilities</p>
          <h2 className="font-display text-4xl md:text-6xl font-semibold mb-16 md:mb-20">
            What I work with
          </h2>
        </Reveal>
      </div>

      <Reveal>
        <Marquee items={allSkills} />
      </Reveal>

      <div className="max-w-5xl px-6 md:px-12 mt-16 md:mt-20 grid md:grid-cols-2 gap-x-16 gap-y-14">
        {skillGroups.map((group, i) => (
          <Reveal key={group.group} delay={i * 0.05}>
            <h3 className="font-mono text-xs text-[#e85da0] mb-5">{group.group}</h3>
            <StaggerGroup className="space-y-4">
              {group.items.map((item) => (
                <StaggerItem key={item.name} className="group">
                  <p className="text-lg text-text font-medium group-hover:text-[#e85da0] transition-colors">
                    {item.name}
                  </p>
                  <p className="text-sm text-muted">{item.note}</p>
                </StaggerItem>
              ))}
            </StaggerGroup>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
