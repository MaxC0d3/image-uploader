/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    CLOUD_NAME: process.env.NEXT_PUBLIC_CLOUD_NAME,
    API_KEY: process.env.NEXT_PUBLIC_API_KEY,
    API_SECRET: process.env.NEXT_PUBLIC_API_SECRET,
  },
}

module.exports = nextConfig
