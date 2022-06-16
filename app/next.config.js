module.exports = {
  swcMinify: true,
  pageExtensions: ['page.js'],
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    domains: ['cdn.sanity.io', 'cdn.chec.io'],
    optimize: true
  }
};
