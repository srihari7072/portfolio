import Reveal from "./Reveal";
import { StaggerGroup, StaggerItem } from "./StaggerReveal";
import { profile } from "@/lib/data";

const links = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { label: "Phone", value: profile.phone, href: `tel:${profile.phone.replace(/[\s-]/g, "")}` },
  { label: "LinkedIn", value: "batchu-srihari", href: profile.linkedin },
  { label: "GitHub", value: "srihari7072", href: profile.github },
];

export default function Contact() {
  return (
    <section id="contact" className="relative px-6 md:px-12 py-32 md:py-48">
      <div className="max-w-5xl">
        <Reveal>
          <p className="font-mono text-xs text-[#ff7a59] mb-4">get in touch</p>
          <h2 className="font-display text-4xl md:text-6xl font-semibold mb-6 max-w-3xl leading-[1.05]">
            Open to frontend and data-analytics roles.
          </h2>
          <p className="text-lg text-muted max-w-xl mb-20">
            The fastest way to reach me is email.
          </p>
        </Reveal>

        <StaggerGroup className="border-t border-line/60">
          {links.map((link) => (
            <StaggerItem key={link.label}>
              <a
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                className="group flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 py-6 border-b border-line/60"
              >
                <span className="font-mono text-xs text-muted">{link.label}</span>
                <span className="relative text-xl md:text-2xl text-text group-hover:text-[#ff7a59] transition-colors">
                  {link.value}
                  <span className="absolute left-0 -bottom-1 h-px w-full bg-[#ff7a59] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                </span>
              </a>
            </StaggerItem>
          ))}
        </StaggerGroup>

        <p className="font-mono text-xs text-muted mt-16">
          {profile.name} — built with Next.js, Framer Motion &amp; React Three Fiber
        </p>
      </div>
    </section>
  );
}
