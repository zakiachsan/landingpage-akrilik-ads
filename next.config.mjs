/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'dist',
  images: {
    unoptimized: true,
  },
  eslint: {
    // Ignore ESLint warnings during build (only fail on errors)
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
