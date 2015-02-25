var PORT  = Number( process.env.PORT || 3000 ),
  webpack = require('webpack');

var common = {

  entry: [
    __dirname + '/lib/app.jsx'
  ],

  output: {
    filename : '[name].js'
  },

  resolve: {
    // Allow to omit extensions when requiring these files
    extensions: ['', '.js', '.jsx']
  },

  module: {
    loaders: {
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

    resolve: common.resolve,

    module: {
      loaders: [
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

    plugins: [
      new webpack.HotModuleReplacementPlugin()
    ],

    resolve: common.resolve,

    module: {
      loaders: [
        {
          test    : common.module.loaders.jsx.test,
          loaders : ['react-hot'].concat(common.module.loaders.jsx.loaders)
        }
      ]
    }

  }
];
