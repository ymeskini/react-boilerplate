const merge = require('webpack-merge');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const baseConfig = require('./webpack.config.base');

module.exports = merge(baseConfig, {
  mode: 'production',
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  },
  performance: {
    hints: false,
    maxEntrypointSize: 30000,
    maxAssetSize: 30000
  },
  plugins: [
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      openAnalyzer: false,
      reportFilename: 'bundle_sizes.html'
    })
  ],
  devtool: false
});
