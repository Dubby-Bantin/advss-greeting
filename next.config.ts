import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
      {
        protocol: "https",
        hostname: "t4.ftcdn.net",
      },

      {
        protocol: "https",
        hostname: "as2.ftcdn.net",
      },
    ],
  },
};

export default nextConfig;
