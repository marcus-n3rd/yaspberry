const path = require('path');
const slsw = require('serverless-webpack');
const nodeExternals = require('webpack-node-externals')

module.exports = {
  bail: true, // exit on any error
  mode: slsw.lib.options.stage === 'prod' ? 'production' : 'development',
  entry: slsw.lib.entries,
  target: 'node',
  devtool: 'nosources-source-map',
  output: {
    libraryTarget: 'commonjs',
    path: path.resolve(__dirname, '.webpack'),
    filename: '[name].js',
    sourceMapFilename: '[file].map',
  },
  externals: [nodeExternals()],
};
