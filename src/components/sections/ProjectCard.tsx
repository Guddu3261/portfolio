"use client";
import { useRef } from "react";
import { ExternalLink, FolderGit2, Terminal } from "lucide-react";
import Screenshots, { type Shot } from "@/components/ui/Screenshots";

interface ProjectProps {
  project: {
    title: string;
    slug: string;
    role: string;
    subtitle: string;
    description: string;
    tech: string[];
    highlights: string[];
    links: { label: string; url: string }[];
    images?: Shot[];
    mobile?: boolean;
  };
}

const dot = ["bg-blue-400", "bg-emerald-400", "bg-purple-400", "bg-orange-400", "bg-pink-400", "bg-cyan-400"];

export default function ProjectCard({ project }: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);

  const onMove = (e: React.MouseEvent) => {
    const r = ref.current?.getBoundingClientRect();
    if (!r || !ref.current) return;
    ref.current.style.setProperty("--x", `${e.clientX - r.left}px`);
    ref.current.style.setProperty("--y", `${e.clientY - r.top}px`);
  };

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      className="group relative h-full overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/40 hover:border-blue-500/40 hover:-translate-y-1 transition duration-300"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition"
        style={{ background: "radial-gradient(320px circle at var(--x) var(--y), rgba(59,130,246,0.12), transparent 70%)" }}
      />

      {/* terminal-style title bar */}
      <div className="relative flex items-center gap-2 border-b border-zinc-800 bg-zinc-900/70 px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-red-500/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-green-500/70" />
        <span className="ml-2 flex min-w-0 items-center gap-1.5 truncate font-mono text-xs text-zinc-500">
          <Terminal size={12} /> ~/projects/{project.slug}
        </span>
      </div>

      <div className="relative p-6 lg:p-8">
        <div className="mb-3 flex flex-wrap items-center gap-2">
          <span className="flex items-center gap-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-xs text-blue-300">
            <FolderGit2 size={12} /> {project.role}
          </span>
          <span className="font-mono text-xs uppercase tracking-wider text-zinc-500">{project.subtitle}</span>
        </div>

        <h3 className="mb-3 flex items-center gap-3 text-2xl font-bold">
          {project.title}
        </h3>
        <p className="mb-5 leading-relaxed text-zinc-400">{project.description}</p>

        {project.images && project.images.length > 0 && (
          <Screenshots shots={project.images} phone={project.mobile} />
        )}

        <ul className="mb-6 space-y-2 font-mono text-sm text-zinc-400">
          {project.highlights.map((h) => (
            <li key={h} className="flex gap-2">
              <span className="text-emerald-400">&gt;</span>
              <span className="font-sans">{h}</span>
            </li>
          ))}
        </ul>

        <div className="mb-6 flex flex-wrap gap-2">
          {project.tech.map((t, i) => (
            <span key={t} className="flex items-center gap-1.5 rounded-md border border-zinc-700 bg-zinc-800 px-3 py-1 text-xs text-zinc-300">
              <span className={`h-1.5 w-1.5 rounded-full ${dot[i % dot.length]}`} />
              {t}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap gap-3 border-t border-zinc-800 pt-5">
          {project.links.map((l) => (
            <a
              key={l.url}
              href={l.url}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-zinc-700 px-4 py-2 text-sm font-medium text-zinc-200 transition hover:border-blue-400 hover:bg-blue-500/10 hover:text-white"
            >
              {l.label} <ExternalLink size={14} />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
