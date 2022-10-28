const path = require('path');

module.exports = {
  mode: 'production',
  entry: './assets/src/js/index.js',
  output: {
    path: path.resolve(__dirname, './assets/dist/js/'),
    filename: 'main.min.js',
  },
};