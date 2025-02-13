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
  };
  
  export default nextConfig;
  