/*const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
       path: path.resolve(__dirname, 'public', 'assets', 'js'),
       filename: 'bundle.js'
    },
    module: {
        rules: [{
            exclude: /node_modules/,
            test: /\.js$/,
            use: {
                loader: 'babel_loader',
                options: {
                    presets: ['@babel/env']
                }
            }
        }]
    },
    devtool: 'source-map'//te informa a linha exata onde ocorreu o erro.
};*/

const path = require('path'); // CommonJS
 
module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'public', 'assets', 'js'),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      exclude: /node_modules/,
      test: /\.js$/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: [
            [
              '@babel/preset-env',
              {
                targets: {
                  esmodules: true,
                },
              },
            ],
          ],
        }
      }
    }]
  },
  devtool: 'source-map'
};
