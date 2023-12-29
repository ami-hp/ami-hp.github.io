const path = require('path');

module.exports = {
    mode: 'development', // or 'production' or 'none'
    entry: './assets/js/index.js', // default: ./src/index.js
    output: { // default: ./dist/main.js
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'assets/js'),
    },
};