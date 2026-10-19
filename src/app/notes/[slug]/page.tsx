import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import { ArrowLeft, Clock } from "lucide-react";
import { getAllNotes, getNote, formatDate } from "@/lib/notes";
import "highlight.js/styles/github-dark.css";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getAllNotes().map((n) => ({ slug: n.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const note = getNote((await params).slug);
  if (!note) return {};
  return {
    title: `${note.title} | Guddu Kumar`,
    description: note.summary,
    openGraph: { title: note.title, description: note.summary, type: "article", publishedTime: note.date },
  };
}

export default async function NotePage({ params }: Props) {
  const note = getNote((await params).slug);
  if (!note) notFound();

  return (
    <article>
      <Link href="/notes" className="mb-8 inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition">
        <ArrowLeft size={16} /> All notes
      </Link>

      <div className="mb-3 flex items-center gap-3 font-mono text-xs text-zinc-500">
        <span>{formatDate(note.date)}</span>
        <span className="flex items-center gap-1"><Clock size={12} /> {note.readingMinutes} min read</span>
      </div>
      <h1 className="mb-4 text-3xl font-bold leading-tight lg:text-4xl">{note.title}</h1>
      <div className="mb-10 flex flex-wrap gap-2">
        {note.tags.map((t) => (
          <span key={t} className="rounded-md border border-zinc-700 bg-zinc-800 px-2.5 py-0.5 text-xs text-zinc-300">{t}</span>
        ))}
      </div>

      <div className="note-body">
        <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeHighlight]}>
          {note.content}
        </ReactMarkdown>
      </div>
    </article>
  );
}
