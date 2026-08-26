import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    // Required for static export — next/image optimization needs a server
    unoptimized: true,
  },
  // Improves compatibility with common static hosts
  trailingSlash: true,
};

export default nextConfig;
