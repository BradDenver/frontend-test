var appServerMiddleware = require("./lib/appServerMiddleware"),
  appServerRoutes       = require("./lib/appServerRoutes"),
  config                = require('./webpack.config')[1],
  express               = require('express'),
  path                  = require('path'),
  PORT                  = Number( process.env.PORT || 3000 ),
  webpack               = require('webpack'),
  WebpackDevServer      = require('webpack-dev-server');

var server = new WebpackDevServer(webpack(config), {
  contentBase : config.output.path,
  hot         : true
});

server.app.use(express.static(path.resolve(__dirname + "/dynamic/")));

appServerMiddleware(server.app);
appServerRoutes(server.app);

// must call listen on webpack express wrapper for socket io to work
server.listen(PORT, console.log.bind(null, "PORT: " + PORT));
