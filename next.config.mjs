/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  experimental: {
    reactRefresh: false, 
  },
  webpack(config) {
    config.devServer = {
      hot: false,  
      liveReload: false, 
    };
    return config;
  },
  
  output: "export", 
  basePath: "/wedding",
  images: {
    unoptimized: true, 
  },
};

export default nextConfig;
