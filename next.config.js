/** @type {import('next').NextConfig} */
const path = require("path");
const nextConfig = {
  output: 'standalone',
  reactStrictMode: false,
  swcMinify: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    unoptimized: true,
  },
  webpack: (config) => {
    config.resolve.alias['@components'] = path.join(__dirname, 'components');
    config.resolve.alias['@styles'] = path.join(__dirname, 'styles');
    return config;
  },
  productionBrowserSourceMaps: true,
};

module.exports = nextConfig;
