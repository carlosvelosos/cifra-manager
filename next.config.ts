import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Ensure static assets are properly handled
  trailingSlash: false,

  // Enable static optimization
  experimental: {
    optimizePackageImports: [
      "@radix-ui/react-accordion",
      "@radix-ui/react-separator",
    ],
  },

  // Configure headers for better performance
  async headers() {
    return [
      {
        source: "/api/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=3600, s-maxage=3600",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
