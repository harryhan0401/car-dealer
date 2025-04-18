import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["placehold.co", "github.com", "localhost"], dangerouslyAllowSVG: true
  }
};

export default nextConfig;
