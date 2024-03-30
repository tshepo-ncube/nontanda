/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["images.unsplash.com"],
  },
<<<<<<< HEAD
  output: "export",
=======
>>>>>>> a7878db7166df5d9b4c3b7efb7a92e6a92a25cef
};

module.exports = nextConfig;
