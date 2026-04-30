import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  outputFileTracingRoot: __dirname,
  // Required for Cloudflare Pages: static export + edge functions
  experimental: {},
};

export default nextConfig;
