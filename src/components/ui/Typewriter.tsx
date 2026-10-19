"use client";
import { useEffect, useState } from "react";

export default function Typewriter({ words }: { words: string[] }) {
  const [i, setI] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[i % words.length];
    const t = setTimeout(
      () => {
        if (!deleting) {
          setText(word.slice(0, text.length + 1));
          if (text.length + 1 === word.length) setTimeout(() => setDeleting(true), 1200);
        } else {
          setText(word.slice(0, text.length - 1));
          if (text.length - 1 === 0) {
            setDeleting(false);
            setI((n) => n + 1);
          }
        }
      },
      deleting ? 40 : 80,
    );
    return () => clearTimeout(t);
  }, [text, deleting, i, words]);

  return (
    <span className="text-blue-400">
      {text}
      <span className="animate-pulse">|</span>
    </span>
  );
}
