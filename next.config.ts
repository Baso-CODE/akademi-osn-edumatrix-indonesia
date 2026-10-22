import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "akademiosn.com",
      },
      {
        protocol: "https",
        hostname: "node-osn.edusmart-indonesia.com",
        port: "",
        pathname: "/**",
      },
    ],
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      {
        source: "/bimbel-lesprivat-osn-imo-jismo-iso-ksn-di-kota/:path*",
        destination: "/persiapan-olimpiade/:path*",
        permanent: true,
      },
      {
        source: "/akademi-olimpiade/:path*",
        destination: "/persiapan-olimpiade/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
