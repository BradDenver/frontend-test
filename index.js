var express             = require("express");
var app                 = express();
var appServerMiddleware = require("./lib/appServerMiddleware");
var appServerRoutes     = require("./lib/appServerRoutes");
var path                = require('path');
var PORT                = Number( process.env.PORT || 3000 );

app.use(express.static(path.resolve(__dirname + "/static/")));

appServerMiddleware(app);
appServerRoutes(app);

app.listen(PORT, console.log.bind(null, "PORT: " + PORT));
