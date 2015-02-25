var bodyParser  = require("body-parser");
var compression = require("compression");
var morgan      = require("morgan");

module.exports = function(app) {

  app.use(morgan("combined"));
  app.use(bodyParser.urlencoded({extended: false}));
  app.use(bodyParser.json());
  app.use(compression());

};
