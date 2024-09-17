/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_PUBLIC_ZEGO_APP_ID: 503187480,
    NEXT_PUBLIC_ZEGO_SERVER_ID: "da04b7eb6265a09a659878c5c65ce116",
  },
  reactStrictMode: false,
  images: {
    domains: ["localhost"],
  },
};

module.exports = nextConfig;
