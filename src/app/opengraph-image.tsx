import { ImageResponse } from "next/og";

export const alt = "Guddu Kumar, Full Stack Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 80,
          background: "linear-gradient(135deg, #09090b 0%, #0f172a 60%, #082f2a 100%)",
          color: "#fafafa",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ fontSize: 28, color: "#34d399", marginBottom: 24 }}>Open to Full Stack roles</div>
        <div style={{ fontSize: 96, fontWeight: 700, lineHeight: 1.05 }}>Guddu Kumar</div>
        <div style={{ fontSize: 44, color: "#60a5fa", marginTop: 20 }}>Full Stack & Mobile App Developer</div>
        <div style={{ fontSize: 28, color: "#a1a1aa", marginTop: 36 }}>React · Next.js · Node.js · PostgreSQL · Flutter</div>
      </div>
    ),
    size,
  );
}
