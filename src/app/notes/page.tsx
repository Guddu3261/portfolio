import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import { getAllNotes, formatDate } from "@/lib/notes";

export const metadata: Metadata = {
  title: "Notes | Guddu Kumar",
  description: "Developer notes on React, Node.js, PostgreSQL, authentication and architecture.",
};

export default function NotesPage() {
  const notes = getAllNotes();
  return (
    <>
      <p className="font-mono text-sm text-blue-400 mb-2">~/notes</p>
      <h1 className="text-4xl font-bold mb-3">Developer notes</h1>
      <p className="text-zinc-400 mb-10">Short write-ups on things I build and learn: React, Node.js, PostgreSQL, security and architecture.</p>

      <div className="space-y-5">
        {notes.map((n) => (
          <Link
            key={n.slug}
            href={`/notes/${n.slug}`}
            className="group block rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 transition hover:-translate-y-0.5 hover:border-blue-500/40"
          >
            <div className="mb-2 flex items-center gap-3 font-mono text-xs text-zinc-500">
              <span>{formatDate(n.date)}</span>
              <span className="flex items-center gap-1"><Clock size={12} /> {n.readingMinutes} min read</span>
            </div>
            <h2 className="mb-2 text-xl font-semibold group-hover:text-blue-300 transition">{n.title}</h2>
            <p className="mb-4 text-sm text-zinc-400">{n.summary}</p>
            <div className="flex flex-wrap items-center gap-2">
              {n.tags.map((t) => (
                <span key={t} className="rounded-md border border-zinc-700 bg-zinc-800 px-2.5 py-0.5 text-xs text-zinc-300">{t}</span>
              ))}
              <span className="ml-auto flex items-center gap-1 text-sm text-blue-400">Read <ArrowRight size={14} className="transition group-hover:translate-x-1" /></span>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
