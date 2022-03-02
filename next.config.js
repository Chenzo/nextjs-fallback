const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  reactStrictMode: true,
  basePath: isProd ? '/nextjs-fallback' : '',
  assetPrefix: isProd ? '/nextjs-fallback/' : '',

  webpack(config) {

    config.resolve.fallback = { 
      fs: false,
      "process": false
    };

    return config;
  }
}
