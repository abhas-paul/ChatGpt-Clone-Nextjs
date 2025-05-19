/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    turbo: true, 
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};
