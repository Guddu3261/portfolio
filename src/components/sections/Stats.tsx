import Reveal from "@/components/ui/Reveal";
import CountUp from "@/components/ui/CountUp";

const stats: { to?: number; suffix?: string; text?: string; label: string }[] = [
  { to: 4, suffix: "+", label: "Years experience" },
  { to: 3, label: "Companies" },
  { to: 3, label: "Live projects" },
  { text: "Web + Mobile", label: "React · Node · Flutter" },
];

export default function Stats() {
  return (
    <div className="mx-auto max-w-6xl px-6">
      <Reveal className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((s) => (
          <div key={s.label} className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-4 sm:p-6 text-center hover:border-blue-500/40 transition">
            <div className={`font-bold whitespace-nowrap bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent ${s.text ? "text-base sm:text-2xl lg:text-3xl leading-[2.25rem] sm:leading-[2.5rem]" : "text-3xl lg:text-4xl"}`}>
              {s.text ?? <CountUp to={s.to!} suffix={s.suffix} />}
            </div>
            <div className="text-sm text-zinc-500 mt-1">{s.label}</div>
          </div>
        ))}
      </Reveal>
    </div>
  );
}
