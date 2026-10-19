"use client";
import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const links = [
  ["About", "about"],
  ["Experience", "experience"],
  ["Projects", "projects"],
  ["Skills", "skills"],
  ["Contact", "contact"],
];

const notesLink = ["Notes", "notes"] as const;

export default function Navbar() {
  const pathname = usePathname();
  const onNotes = pathname.startsWith("/notes");
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" },
    );
    links.forEach(([, id]) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-[#09090b]/70 border-b border-zinc-800/60">
      <motion.div style={{ scaleX }} className="absolute bottom-0 left-0 right-0 h-0.5 origin-left bg-gradient-to-r from-blue-500 to-emerald-400" />
      <nav className="mx-auto max-w-6xl flex items-center justify-between px-6 h-14">
        <Link href="/" className="font-bold tracking-tight">
          <span className="text-blue-400">&lt;</span>GK<span className="text-blue-400"> /&gt;</span>
        </Link>
        <ul className="hidden sm:flex gap-6 text-sm">
          {links.map(([label, id]) => (
            <li key={id}>
              <Link href={`/#${id}`} className={`transition ${!onNotes && active === id ? "text-white" : "text-zinc-400 hover:text-white"}`}>
                {label}
              </Link>
            </li>
          ))}
          <li>
            <Link href="/notes" className={`transition ${onNotes ? "text-white" : "text-zinc-400 hover:text-white"}`}>
              {notesLink[0]}
            </Link>
          </li>
        </ul>
        <button className="sm:hidden" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X /> : <Menu />}
        </button>
      </nav>
      {open && (
        <ul className="sm:hidden px-6 pb-4 space-y-3 text-zinc-300">
          {links.map(([label, id]) => (
            <li key={id}><Link href={`/#${id}`} onClick={() => setOpen(false)}>{label}</Link></li>
          ))}
          <li><Link href="/notes" onClick={() => setOpen(false)}>Notes</Link></li>
        </ul>
      )}
    </header>
  );
}
