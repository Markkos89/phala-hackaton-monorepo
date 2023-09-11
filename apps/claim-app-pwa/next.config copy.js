/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'
const withPWA = require('next-pwa')({
  dest: 'public',
  disable: !isProd
})

const nextConfig = withPWA({
  reactStrictMode: true,
  // experimental: {
  //   appDir: true
  // },
  compiler: {
    styledComponents: true
  }
})

module.exports = nextConfig
