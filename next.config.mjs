/** @type {import('next').NextConfig} */
const nextConfig = {
  // 1. 검사 기능 끄기 (기존)
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  // 2. 폰트 다운로드 에러 무시 (핵심!)
  optimizeFonts: false,
};

export default nextConfig;
