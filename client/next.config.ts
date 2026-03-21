/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "pm-s3-bucket-rohanv.s3.us-east-2.amazonaws.com",
        pathname: "/**",
      }
    ]
  }
};

export default nextConfig;