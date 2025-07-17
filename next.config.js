/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "assets-global.website-files.com",
      },
      {
        hostname: "vrcms.talesign.com",
      },
      {
        hostname: "a0.muscache.com",
      },
      {
        hostname: "cms.violabnb.com",
      },
    ],
  },
};

module.exports = nextConfig;
