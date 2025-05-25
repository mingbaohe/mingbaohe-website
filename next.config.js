/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // 确保在 Cloudflare Pages 上正常工作
  experimental: {
    appDir: true,
  },
  // 添加 trailingSlash 配置
  trailingSlash: true,
}

module.exports = nextConfig 