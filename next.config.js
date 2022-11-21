/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ['en', 'fr', 'kin'],
    defaultLocale: 'en'
  }
}

module.exports = nextConfig
