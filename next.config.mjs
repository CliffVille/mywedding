/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath: "",  // Remove /mywedding for local development
  assetPrefix: "", // Remove /mywedding/ for local development
};

// Use this configuration for production (GitHub Pages)
if (process.env.NODE_ENV === "production") {
  nextConfig.basePath = "/mywedding";
  nextConfig.assetPrefix = "/mywedding/";
}

export default nextConfig;
