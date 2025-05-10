/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Remove turbopack from experimental entirely
  experimental: {},
  // Keep allowedDevOrigins at the top level
  allowedDevOrigins: ["192.168.100.13", "localhost"],
};

module.exports = nextConfig;