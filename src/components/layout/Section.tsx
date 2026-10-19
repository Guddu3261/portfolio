import Reveal from "@/components/ui/Reveal";

export default function Section({
  id,
  eyebrow,
  title,
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="mx-auto max-w-6xl px-6 py-16 lg:py-20 scroll-mt-14">
      <Reveal>
        <p className="font-mono text-sm text-blue-400 mb-2">{eyebrow}</p>
        <h2 className="text-3xl lg:text-4xl font-bold mb-10">{title}</h2>
      </Reveal>
      {children}
    </section>
  );
}
