/** @type {import('next').NextConfig} */
const nextConfig = {
  // 문법 검사 무시
  eslint: {
    ignoreDuringBuilds: true,
  },
  // 타입 에러 무시
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
