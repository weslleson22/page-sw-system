/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Restrict compilation to TypeScript files, avoiding legacy CRA files in src/
  pageExtensions: ["ts", "tsx"],
  images: {
    domains: [],
  },
};

export default nextConfig;
