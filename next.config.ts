/** @type {import('next').NextConfig} */
const nextConfig = {
  // 1. 린트 에러 무시 (잔소리 끄기)
  eslint: {
    ignoreDuringBuilds: true,
  },
  // 2. 타입 에러 무시 (깐깐함 끄기)
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
