/** @type {import('next').NextConfig} */
const nextConfig = {
  // 1. 에러 검사 무시
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  // 2. 폰트 최적화 기능 끄기 (핵심!)
  optimizeFonts: false,
};

module.exports = nextConfig;
