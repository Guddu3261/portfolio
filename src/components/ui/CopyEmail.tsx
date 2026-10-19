"use client";
import { useState } from "react";
import { Check, Copy } from "lucide-react";

export default function CopyEmail({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <button
      onClick={async () => {
        try {
          await navigator.clipboard.writeText(email);
          setCopied(true);
          setTimeout(() => setCopied(false), 2000);
        } catch {}
      }}
      className="inline-flex items-center gap-2 rounded-xl border border-zinc-700 px-5 py-3 font-medium hover:bg-zinc-900 transition"
    >
      {copied ? <Check size={18} className="text-emerald-400" /> : <Copy size={18} />}
      {copied ? "Copied!" : "Copy email"}
    </button>
  );
}
