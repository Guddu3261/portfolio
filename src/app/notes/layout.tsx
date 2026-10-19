import Navbar from "@/components/layout/Navbar";
import CursorGlow from "@/components/ui/CursorGlow";

export default function NotesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <CursorGlow />
      <Navbar />
      <main className="relative z-10 mx-auto max-w-3xl px-6 pt-28 pb-20">{children}</main>
    </>
  );
}
