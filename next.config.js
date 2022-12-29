/** @type {import('next').NextConfig} */
const withPWA = require("next-pwa");
const runtimeCaching = require("next-pwa/cache");

const nextConfig = {
  dest: "public",
  register: true,
  skipWaiting: true,
  runtimeCaching,
  disable: process.env.NODE_ENV === "development",
  buildExcludes: [/.*\.js\.map/],
};

module.exports =
  process.env.NODE_ENV === "development" ? nextConfig : withPWA(nextConfig);
