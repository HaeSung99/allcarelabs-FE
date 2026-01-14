import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // 정적 사이트 생성
  images: {
    unoptimized: true, // 정적 export 시 이미지 최적화 비활성화
  },
};

export default nextConfig;
