/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        hostname: "coin-images.coingecko.com",
      },
    ],
  },
};

module.exports = nextConfig;
