const nextConfig = {
  output: "export", // Enables static export mode
  basePath: "/wedding", // Matches your GitHub repository name
  images: {
    unoptimized: true, // Fixes images for static hosting
  },
};

export default nextConfig;
