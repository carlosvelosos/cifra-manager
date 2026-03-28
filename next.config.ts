import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export for GitHub Pages
  output: "export",
  trailingSlash: false,
  basePath: "/cifra-manager",

  // Images must be unoptimized for static export
  images: {
    unoptimized: true,
  },

  experimental: {
    optimizePackageImports: [
      "@radix-ui/react-separator",
    ],
  },
};

export default nextConfig;
