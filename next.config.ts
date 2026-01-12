import type { NextConfig } from "next";


/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/davidscales7.github.io',
  assetPrefix: '/davidscales7.github.io/',
}

export default nextConfig;
