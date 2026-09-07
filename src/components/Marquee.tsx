export default function Marquee({ items }: { items: string[] }) {
  const loop = [...items, ...items];
  return (
    <div className="overflow-hidden border-y border-line/60 py-4">
      <div className="marquee-track gap-10">
        {loop.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="font-mono text-sm text-muted whitespace-nowrap flex items-center gap-10"
          >
            {item}
            <span className="text-accent">·</span>
          </span>
        ))}
      </div>
    </div>
  );
}
