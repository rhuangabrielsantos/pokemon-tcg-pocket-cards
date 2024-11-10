import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com",
        port: "",
        pathname:
          "/chase-manning/pokemon-tcg-pocket-cards/refs/heads/main/images/**",
      },
    ],
  },
};

export default nextConfig;
