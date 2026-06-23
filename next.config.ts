import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript : {
    ignoreBuildErrors: true
  },
 output: 'export',
 images: {
  unoptimized: true
 }
  // images: {
  //   loader: 'custom',
  //   loaderFile: './image-loader.ts',
  //   deviceSizes: [640, 768, 1024, 1280, 1536, 1920],
  //   imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  // },
};

export default nextConfig;
