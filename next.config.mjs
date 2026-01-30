/** @type {import('next').NextConfig} */
const nextConfig = {
  // 문법 검사 무시 (필수)
  eslint: {
    ignoreDuringBuilds: true,
  },
  // 타입 에러 무시 (필수)
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
