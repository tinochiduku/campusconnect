import type { NextConfig } from "next";
const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  typescript : {
    ignoreBuildErrors: true
  },
 output: 'export',
 basePath: isProd ? '/campusconnect' : '',
 assetPrefix: isProd ? '/campusconnect/' : '',
 images: {
  unoptimized: true
 }
};

export default nextConfig;
