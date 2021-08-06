// Webpack : 의존 관계에 있는 module들을 하나의 javascript 파일로 bundling하는 module bundler
// ES2015부터 문법 수준에서 모듈을 지원하기 시작했고 구 브라우저가 이를 지원하지 않는 경우가 있다
// 그래서 브라우저에 무관하게 모듈을 사용하고자 할 때 Webpack을 사용한다

// javascript가 로딩하는 모듈이 많아질 수록 모듈 간의 의존성이 증가한다
// Entry : 의존성 그래프의 시작점, 필요한 파일을 로딩하고 하나의 파일로 묶는다
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: [
    './src/index.tsx',
  ],
  output: {
    filename: '[name].[chunkhash].js',
    path: `${__dirname}/dist`,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(css|scss)$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx', '.ts', '.tsx'],
    modules: [path.resolve(__dirname, '.'), 'node_modules'],
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      favicon: './public/favicon.ico',
    }),
  ],
};
