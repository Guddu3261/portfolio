"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Download, ArrowDown, MapPin } from "lucide-react";
import { profile } from "@/data/portfolio";
import Typewriter from "@/components/ui/Typewriter";

const floating = ["React", "Next.js", "Node.js", "Flutter", "PostgreSQL", "Docker"];

export default function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-6 pt-28 pb-12 lg:pt-32 min-h-[88vh] grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] gap-14 items-center">
      <motion.div className="min-w-0" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <div className="inline-flex w-fit items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm mb-6">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          Open to Full Stack roles
        </div>

        <p className="text-zinc-400 text-lg mb-2">Hi, I&apos;m</p>
        <h1 className="text-5xl lg:text-7xl font-bold tracking-tight mb-4">
          Guddu{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Kumar</span>
        </h1>
        <h2 className="text-2xl lg:text-3xl font-semibold text-zinc-300 mb-6 h-10">
          <Typewriter words={["Full Stack Developer", "Mobile App Developer"]} />
        </h2>
        <p className="max-w-lg text-lg text-zinc-400 leading-relaxed mb-8">
          Software developer with 4+ years of experience building fast, scalable web and mobile apps, from clean React and Next.js interfaces to secure Node.js APIs and cross-platform Flutter apps.
        </p>

        <div className="flex flex-wrap items-center gap-3 mb-8">
          <a href="#projects" className="flex items-center gap-2 bg-white text-black px-6 py-3 rounded-xl font-semibold hover:bg-zinc-200 hover:-translate-y-0.5 transition">
            View Projects <ArrowDown size={18} />
          </a>
          <a href={profile.resume} download className="flex items-center gap-2 border border-zinc-700 px-6 py-3 rounded-xl font-semibold hover:bg-zinc-900 hover:-translate-y-0.5 transition">
            Resume <Download size={18} />
          </a>
        </div>

        <div className="flex items-center gap-5 text-zinc-400">
          {profile.github && (
            <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="hover:text-white transition"><Github /></a>
          )}
          <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:text-white transition"><Linkedin /></a>
          <a href={`mailto:${profile.email}`} aria-label="Email" className="hover:text-white transition"><Mail /></a>
          <span className="flex items-center gap-1 text-sm"><MapPin size={16} />{profile.location}</span>
        </div>
      </motion.div>

      {/* Photo */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="relative mx-auto w-full max-w-sm min-w-0"
      >
        <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-tr from-blue-500/40 to-emerald-500/40 blur-2xl" />
        <div className="relative rounded-[2rem] p-[2px] bg-gradient-to-tr from-blue-500 to-emerald-400">
          <div className="relative aspect-square overflow-hidden rounded-[calc(2rem-2px)] bg-zinc-900">
            <Image src="/profile.jpg" alt="Guddu Kumar" fill priority sizes="(min-width:1024px) 384px, 90vw" className="object-cover object-top" />
          </div>
        </div>

        <div className="absolute -bottom-5 -left-4 rounded-xl border border-zinc-700 bg-zinc-900/90 backdrop-blur px-4 py-3 shadow-xl">
          <p className="text-2xl font-bold text-white leading-none">4+</p>
          <p className="text-xs text-zinc-400">years experience</p>
        </div>

        {floating.map((t, i) => (
          <motion.span
            key={t}
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 3 + (i % 3), repeat: Infinity, delay: i * 0.3 }}
            className="hidden md:block absolute px-3 py-1 text-xs rounded-full border border-zinc-700 bg-zinc-900/90 text-zinc-300 shadow-lg"
            style={{
              top: ["14%", "42%", "70%", "24%", "56%", "84%"][i],
              left: i % 2 === 0 ? "-18%" : undefined,
              right: i % 2 === 1 ? "-14%" : undefined,
            }}
          >
            {t}
          </motion.span>
        ))}
      </motion.div>
    </section>
  );
}
