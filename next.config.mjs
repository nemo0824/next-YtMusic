/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns: [
            {
                protocol:"https",
                hostname:"*.unsplash.com"
            }
        ]
    }
};
// 이미지 받을때 보안상의 이유로 next.config에서 설정을 해야함

export default nextConfig;
