const Webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.dev.js');

const compiler = Webpack(config);

module.exports = new WebpackDevServer(compiler, {
  publicPath: '/',
  contentBase: false,
  historyApiFallback: true,
  hot: true,
  inline: true,
  stats: 'errors-only',
  proxy: {
    '/api': {
      target: {
        host: process.env.PROXY_HOST,
        protocol: 'http:',
        port: 8080
      },
      secure: false
    },
    '/graphiql': {
      target: {
        host: process.env.PROXY_HOST,
        protocol: 'http:',
        port: 8080
      },
      secure: false
    },
    '/graphql': {
      target: {
        host: process.env.PROXY_HOST,
        protocol: 'http:',
        port: 8080
      },
      secure: false
    }
  },
}).listen(8081, '0.0.0.0', (err) => {
  if (err) console.log(err);
  console.log('Listening at 0.0.0.0:8081');
});
