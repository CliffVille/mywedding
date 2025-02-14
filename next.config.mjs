/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  experimental: {
    reactRefresh: false, // Ensure Fast Refresh is OFF
  },
  webpack(config) {
    config.devServer = {
      hot: false,  // Disable Hot Module Replacement
      liveReload: false, // Disable live reload
    };
    return config;
  },
  
  // GitHub Pages Deployment Settings
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true, // Required for GitHub Pages
  },
  basePath: "/mywedding", // Change this to match your GitHub repo name
  assetPrefix: "/mywedding/", // Change this to match your GitHub repo name
};

export default nextConfig;
