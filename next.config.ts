/** @type {import('next').NextConfig} */
const nextConfig = {
  //output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // Ensure CSS is properly handled
  experimental: {
    optimizeCss: true,
  },
};

module.exports = nextConfig;
