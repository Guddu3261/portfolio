import { Mail, Phone, Linkedin, MapPin, GraduationCap, Briefcase, MessageCircle } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Section from "@/components/layout/Section";
import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import Marquee from "@/components/sections/Marquee";
import ProjectCard from "@/components/sections/ProjectCard";
import Reveal from "@/components/ui/Reveal";
import CursorGlow from "@/components/ui/CursorGlow";
import CopyEmail from "@/components/ui/CopyEmail";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getAllNotes, formatDate } from "@/lib/notes";
import { profile, skills, projects, workHistory, education } from "@/data/portfolio";

export default function Home() {
  const latestNotes = getAllNotes().slice(0, 3);
  return (
    <>
      <CursorGlow />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <Stats />
        <Marquee />

        <Section id="about" eyebrow="01 — About" title="Who I am">
          <div className="grid lg:grid-cols-3 gap-6">
            <Reveal className="lg:col-span-2 rounded-2xl border border-zinc-800 bg-zinc-900/40 p-8">
              <p className="text-zinc-300 leading-relaxed text-lg">{profile.summary}</p>
            </Reveal>
            <Reveal delay={0.1} className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-8">
              <GraduationCap className="text-blue-400 mb-3" />
              <p className="font-semibold">{education.degree}</p>
              <p className="text-sm text-zinc-400 mt-1">{education.school}</p>
              <p className="text-sm text-zinc-500">{education.location} · {education.year}</p>
            </Reveal>
          </div>
        </Section>

        <Section id="experience" eyebrow="02 — Experience" title="Where I've worked">
          <ol className="relative space-y-8 border-l border-zinc-800 ml-3 pl-8">
            {workHistory.map((w, i) => (
              <li key={w.company} className="relative">
                <span className="absolute -left-[43px] top-1 flex h-6 w-6 items-center justify-center rounded-full bg-zinc-900 border border-blue-500/60 text-blue-400">
                  <Briefcase size={12} />
                </span>
                <Reveal delay={i * 0.05} className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 hover:border-blue-500/30 transition">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="text-xl font-semibold">{w.role}</h3>
                    <span className="text-xs font-mono px-2 py-1 rounded-md bg-blue-500/10 text-blue-300">{w.period}</span>
                  </div>
                  <p className="text-zinc-400 mb-4">{w.company} · {w.location}</p>
                  <ul className="list-disc pl-5 space-y-1 text-sm text-zinc-400">
                    {w.highlights.map((h) => <li key={h}>{h}</li>)}
                  </ul>
                </Reveal>
              </li>
            ))}
          </ol>
        </Section>

        <Section id="projects" eyebrow="03 — Projects" title="What I've built">
          <div className="grid grid-cols-[minmax(0,1fr)] md:grid-cols-2 gap-6">
            {projects.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.1} className={`min-w-0 ${projects.length % 2 === 1 && i === projects.length - 1 ? "md:col-span-2" : ""}`}>
                <ProjectCard project={p} />
              </Reveal>
            ))}
          </div>
        </Section>

        <Section id="skills" eyebrow="04 — Skills" title="Tech I work with">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((s, i) => (
              <Reveal key={s.group} delay={i * 0.05} className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 hover:border-blue-500/30 transition">
                <h3 className="text-xs font-bold text-blue-400 uppercase tracking-widest mb-4">{s.group}</h3>
                <div className="flex flex-wrap gap-2">
                  {s.items.map((it) => (
                    <span key={it} className="px-3 py-1 bg-zinc-800 text-zinc-300 text-sm rounded-md border border-zinc-700 hover:border-blue-400 hover:text-white hover:-translate-y-0.5 transition">{it}</span>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>
        </Section>

        {latestNotes.length > 0 && (
          <Section id="notes" eyebrow="05 — Notes" title="Latest developer notes">
            <div className="grid gap-5 md:grid-cols-3">
              {latestNotes.map((n, i) => (
                <Reveal key={n.slug} delay={i * 0.08} className="h-full">
                  <Link href={`/notes/${n.slug}`} className="group flex h-full flex-col rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 transition hover:-translate-y-1 hover:border-blue-500/40">
                    <span className="mb-2 font-mono text-xs text-zinc-500">{formatDate(n.date)} · {n.readingMinutes} min read</span>
                    <h3 className="mb-2 font-semibold group-hover:text-blue-300 transition">{n.title}</h3>
                    <p className="mb-4 flex-1 text-sm text-zinc-400">{n.summary}</p>
                    <span className="flex items-center gap-1 text-sm text-blue-400">Read note <ArrowRight size={14} className="transition group-hover:translate-x-1" /></span>
                  </Link>
                </Reveal>
              ))}
            </div>
            <Link href="/notes" className="mt-8 inline-flex items-center gap-2 text-sm text-zinc-300 hover:text-white transition">
              View all notes <ArrowRight size={14} />
            </Link>
          </Section>
        )}

        <Section id="contact" eyebrow="06 — Contact" title="Let's work together">
          <Reveal className="relative overflow-hidden rounded-3xl border border-zinc-800 bg-gradient-to-br from-blue-500/10 via-zinc-900/60 to-emerald-500/10 p-8 lg:p-12">
            <p className="text-xl text-zinc-300 max-w-xl mb-8">
              I&apos;m open to full stack opportunities. Have a role or project in mind? Email or WhatsApp is the fastest way to reach me.
            </p>
            <div className="flex flex-wrap gap-3 mb-10">
              <a href={`mailto:${profile.email}`} className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-xl font-semibold hover:bg-zinc-200 transition">
                <Mail size={18} /> Say hello
              </a>
              <a
                href={`https://wa.me/${profile.whatsapp}?text=${encodeURIComponent(profile.whatsappMessage)}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-[#25D366] px-6 py-3 font-semibold text-black transition hover:brightness-110"
              >
                <MessageCircle size={18} /> WhatsApp
              </a>
              <CopyEmail email={profile.email} />
            </div>
            <ul className="grid sm:grid-cols-2 gap-3 text-zinc-300 text-sm">
              <li className="flex items-center gap-3"><Mail size={16} className="text-blue-400" />{profile.email}</li>
              <li className="flex items-center gap-3"><Phone size={16} className="text-blue-400" /><a href={`tel:${profile.phone.replace(/\s/g, "")}`}>{profile.phone}</a></li>
              <li className="flex items-center gap-3"><MessageCircle size={16} className="text-blue-400" /><a href={`https://wa.me/${profile.whatsapp}?text=${encodeURIComponent(profile.whatsappMessage)}`} target="_blank" rel="noreferrer" className="hover:underline">WhatsApp: {profile.phone}</a></li>
              <li className="flex items-center gap-3"><Linkedin size={16} className="text-blue-400" /><a href={profile.linkedin} target="_blank" rel="noreferrer" className="hover:underline">LinkedIn</a></li>
              <li className="flex items-center gap-3"><MapPin size={16} className="text-blue-400" />{profile.location}</li>
            </ul>
          </Reveal>
        </Section>

        <footer className="mx-auto max-w-6xl px-6 py-10 text-sm text-zinc-600 border-t border-zinc-900 flex justify-between">
          <span>© {new Date().getFullYear()} {profile.name}</span>
          <span>Built with Next.js & Tailwind</span>
        </footer>
      </main>
    </>
  );
}
