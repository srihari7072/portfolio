import Reveal from "./Reveal";
import Portrait from "./Portrait";
import { StaggerGroup, StaggerItem } from "./StaggerReveal";
import { profile, quickFacts } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="relative px-6 md:px-12 py-32 md:py-40">
      <div className="max-w-5xl grid md:grid-cols-[auto_1fr] gap-12 md:gap-16">
        <Reveal className="order-1 md:order-none">
          <Portrait />
        </Reveal>

        <div>
          <Reveal>
            <p className="font-mono text-xs text-accent mb-4">about</p>
            <p className="text-2xl md:text-3xl leading-snug text-text max-w-2xl font-display font-medium">
              {profile.summary}
            </p>
          </Reveal>

          <StaggerGroup className="flex flex-wrap gap-x-10 gap-y-4 mt-12 border-t border-line/60 pt-8">
            {quickFacts.map((f) => (
              <StaggerItem key={f.label}>
                <p className="font-mono text-[11px] text-muted mb-1">{f.label}</p>
                <p className="text-text font-medium">{f.value}</p>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </div>
    </section>
  );
}
