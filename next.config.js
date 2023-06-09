/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "images4.alphacoders.com",
      "images.hdqwalls.com",
      "wallpapers.com",
      "firebasestorage.googleapis.com",
    ],
  },
  // async redirects() {
  //   return [
  //     {
  //       source: "/",
  //       destination: "/trang-chu",
  //       permanent: true,
  //     },
  //   ];
  // },
};

module.exports = nextConfig;
