module.exports = {
    module: {
      rules: [
        {
          test: /\.svg$/,
          loader: 'vue-svg-loader',
          use: [
            'babel-loader',
            'vue-svg-loader',
          ],
        },
        {
          test: /\.(csv|xlsx|xls)$/,
          loader: 'file-loader',
          options: {
              name: `files/[name].[ext]`
          }
        }
      ],
    },
  };