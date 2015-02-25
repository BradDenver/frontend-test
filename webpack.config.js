var PORT  = Number( process.env.PORT || 3000 ),
  webpack = require('webpack');

module.exports = {
  
  entry: {
    app: [
      'webpack-dev-server/client?http://localhost:' + PORT,
      'webpack/hot/dev-server',
      __dirname + '/lib/app.jsx'
    ]
  },

  output: {
    path     : __dirname + '/static',
    filename : '[name].js'
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],

  resolve: {
    // Allow to omit extensions when requiring these files
    extensions: ['', '.js', '.jsx']
  },

  module: {
    loaders: [
      {
        test    : /\.jsx$/,
        loaders : ['react-hot', 'jsx']
      }
    ]
  }

};
