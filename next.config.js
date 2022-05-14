/** @type {import('next').NextConfig} */
const withPWA = require("next-pwa");

const nextConfig = {
  pwa: {
    dest: "public",
    register: true,
    skipWaiting: true,
    //disable: process.env.NODE_ENV === 'development',
    buildExcludes: [/.*\.js\.map/],
  },
  images: {
    domains: [
      "www.nojima.co.jp",
      "www.kyotango.gr.jp",
      "image.4meee.com",
      "www.picturemosaics.com",
    ],
  },
  reactStrictMode: true,
};

module.exports =
  process.env.NODE_ENV === "development" ? nextConfig : withPWA(nextConfig);
