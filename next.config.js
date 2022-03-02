const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  reactStrictMode: true,
  assetPrefix: isProd ? '/nextjs-fallback/' : '',
  webpack(config) {

    config.resolve.fallback = { 
      fs: false,
      "process": false
    };

    return config;
  }
}
