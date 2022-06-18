/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    MONGODB_URI:
      'mongodb+srv://SifisoRimana:NewPassword_123@schoolmate-cluster.a5wxazm.mongodb.net/?retryWrites=true&w=majority',
  },
}

module.exports = nextConfig
