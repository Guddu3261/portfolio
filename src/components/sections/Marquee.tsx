const items = ["React.js", "Next.js", "TypeScript", "Node.js", "Express", "PostgreSQL", "Flutter", "Redux", "Docker", "Tailwind CSS", "JWT / OAuth", "ABDM", "Firebase", "Jest"];

export default function Marquee() {
  const row = [...items, ...items];
  return (
    <div className="mt-16 overflow-hidden border-y border-zinc-800/60 py-4 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
      <div className="flex w-max gap-10 animate-marquee text-zinc-500 font-mono text-sm">
        {row.map((t, i) => (
          <span key={i} className="whitespace-nowrap">{t}</span>
        ))}
      </div>
    </div>
  );
}
