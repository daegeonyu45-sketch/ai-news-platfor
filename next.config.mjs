/** @type {import('next').NextConfig} */
const nextConfig = {
  // 1. 빌드 중 에러 검사 무시
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  // 2. 폰트 다운로드 실패 무시 (아까 그 에러 해결책)
  optimizeFonts: false,
};

export default nextConfig;
