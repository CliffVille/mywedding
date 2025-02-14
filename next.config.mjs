/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath: "",  // Remove /test-cliff-stuff for local development
  assetPrefix: "", // Remove /test-cliff-stuff/ for local development
};

// Use this configuration for production (GitHub Pages)
if (process.env.NODE_ENV === "production") {
  nextConfig.basePath = "/test-cliff-stuff";
  nextConfig.assetPrefix = "/test-cliff-stuff/";
}

export default nextConfig;
