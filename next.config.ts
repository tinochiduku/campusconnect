import type { NextConfig } from "next";
const isProd = process.env.NODE_ENV === 'production';
const repoName = 'campusconnect';


const nextConfig: NextConfig = {
    typescript : {
    ignoreBuildErrors: true
  },
  output: 'export', // Forces Next.js 16 to build static HTML/CSS/JS assets
  basePath: isProd ? `/${repoName}` : '', // Prepends repo name to URLs for production
  assetPrefix: isProd ? `/${repoName}/` : '', // Prepends repo name to asset pipelines
  images: {
    unoptimized: true, // Required because GitHub Pages does not support Next.js dynamic image optimization
  },
};

export default nextConfig;