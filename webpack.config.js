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
      ],
    },
  };