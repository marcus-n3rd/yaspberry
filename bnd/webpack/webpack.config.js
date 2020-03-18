const path = require('path');
const slsw = require('serverless-webpack');
const nodeExternals = require('webpack-node-externals')

module.exports = {
  mode: slsw.lib.options.stage === 'prod' ? 'production' : 'development',
  entry: slsw.lib.entries,
  target: 'node',
  output: {
    libraryTarget: 'commonjs',
    path: path.resolve(__dirname, '.webpack'),
    filename: '[name].js',
  },
  externals: [nodeExternals()],
};
