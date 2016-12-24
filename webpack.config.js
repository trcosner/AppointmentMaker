module.exports = {
  entry: "./src/js/index.js",
  output: {
    path: './docs',
    filename: "bundle.js",
    publicPath: '/'
  },
  devServer: {
    inline: true,
    contentBase: './dist',
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      },
      { test: /\.css$/,
        loader: "style-loader!css-loader"
      }
    ]
  }
};
