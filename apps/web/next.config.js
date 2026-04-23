/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: [
    "@modern-essentials/types",
    "@modern-essentials/utils",
    "@modern-essentials/ui",
  ],
  images: {
    domains: ["images.unsplash.com", "plus.unsplash.com"],
  },
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: `${process.env.NEXT_PUBLIC_API_URL}/:path*`,
      },
    ];
  },
};

module.exports = nextConfig;
