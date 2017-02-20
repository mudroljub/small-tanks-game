const path = require('path')

module.exports = {
  entry: {
    main: './src/main.js'
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
    publicPath: './dist/'
  },
  node: {
    __filename: true
  },
  watch: true,
  devtool: 'source-map',
  resolve: {
    alias: {
      src: path.resolve(__dirname, 'src'),
      slike: path.resolve(__dirname, 'assets/slike/'),
      klase: path.resolve(__dirname, 'game-engine/klase'),
      akcije: path.resolve(__dirname, 'game-engine/akcije/'),
      io: path.resolve(__dirname, 'game-engine/io/'),
      konstante: path.resolve(__dirname, 'game-engine/konstante'),
      utils: path.resolve(__dirname, 'game-engine/utils')
    }
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        presets: ['es2015']
      }
    }, {
      test: /\.css$/,
      use: ['style-loader', 'css-loader']
    }, {
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', 'sass-loader']
    }, {
      test: /\.html$/,
      loader: 'html-loader'
    }, {
      test: /\.(jpg|png|gif|wav|mp3)$/,
      loader: 'file-loader',
      options: {
        name: '[path][name].[hash].[ext]'
      }
    }]
  }
}
