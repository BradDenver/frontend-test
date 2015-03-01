var PORT            = Number( process.env.PORT || 3000 ),
  ExtractTextPlugin = require("extract-text-webpack-plugin"),
  webpack           = require('webpack');

var common = {

  entry: [
    __dirname + '/lib/app.jsx'
  ],

  output: {
    filename : '[name].js'
  },

  plugins: [
    new ExtractTextPlugin("[name].css")
  ],

  resolve: {
    // Allow to omit extensions when requiring these files
    extensions: ['', '.js', '.jsx']
  },

  module: {
    loaders: {
      css: {
        test   : /\.css$/,
        loader : ExtractTextPlugin.extract("style-loader", "css-loader")
      },
      js: {
        test    : /\.js$/,
        exclude : /node_modules/,
        loader  : 'regenerator!babel-loader?experimental'
      },
      jsx: {
        test    : /\.jsx$/,
        loaders : ['react-hot', 'jsx', 'babel']
      }
    }
  }

};

module.exports = [
  {
  
    name: 'app',

    entry: {app: common.entry},

    output: {
      path     : __dirname + '/static',
      filename : common.output.filename
    },

    plugins: common.plugins,

    resolve: common.resolve,

    module: {
      loaders: [
        common.module.loaders.css,
        common.module.loaders.js,
        common.module.loaders.jsx
      ]
    }

  },{
  
    name: 'appDev',

    entry: {
      app: [
        'webpack-dev-server/client?http://localhost:' + PORT,
        'webpack/hot/dev-server'
      ].concat(common.entry)
    },

    output: {
      path     : __dirname + '/dynamic',
      filename : common.output.filename
    },

    plugins: common.plugins.concat(
      new webpack.HotModuleReplacementPlugin()
    ),

    resolve: common.resolve,

    module: {
      loaders: [
        common.module.loaders.css,
        common.module.loaders.js,
        {
          test    : common.module.loaders.jsx.test,
          loaders : ['react-hot'].concat(common.module.loaders.jsx.loaders)
        }
      ]
    }

  }
];
