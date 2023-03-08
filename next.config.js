/** @type {import('next').NextConfig} */

module.exports = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.asos-media.com',
        port: '',
        pathname: '/products/**',
      },
    ],
  },
}