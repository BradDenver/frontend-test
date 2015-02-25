var express             = require("express");
var app                 = express();
var appServerMiddleware = require("./lib/appServerMiddleware");
var appServerRoutes     = require("./lib/appServerRoutes");
var PORT                = Number( process.env.PORT || 3000 );

appServerConfig(app);

app.listen(PORT, console.log.bind(null, "PORT: " + PORT));
