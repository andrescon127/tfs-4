/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/tfs-4',
  assetPrefix: '/tfs-4/',
}

module.exports = nextConfig 