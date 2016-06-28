const WebpackDevServer = require("webpack-dev-server");  
const webpack = require("webpack");  
const config = require("../config/webpack.dev");

var server = new WebpackDevServer(webpack(config), {  
  contentBase: "/client/build",
  // webpack-dev-server options
  publicPath: config.output.publicPath,
  hot: true,
  stats: { colors: true },
});

server.listen(3001, "localhost", function() {});  