import type { NextConfig } from "next";

const nextConfig: NextConfig = {
experimental: {
        serverActions: {
            bodySizeLimit: "5mb",
        },
    },
  allowedDevOrigins: ['192.168.0.12'],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.ibb.co",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;