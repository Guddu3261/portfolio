import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  reactCompiler: true,
  // Pin the project root so Turbopack doesn't watch the whole home directory.
  turbopack: {
    root: path.resolve(__dirname),
  },
};

export default nextConfig;
