const path = require('path');
const miniCss = require('mini-css-extract-plugin');

module.exports = {
  mode: 'production',
	entry: {
    main: path.resolve(__dirname, './src/index.js'),
  },
	output: {
		path: path.resolve(__dirname, './dist'),
		filename: 'bundle.js'
  },
  module: {
		rules: [{
			test:/\.(s*)css$/,
			use: [  
				miniCss.loader,
				'css-loader',
				'sass-loader',
			]
		}]
	},
	plugins: [
		new miniCss({
			filename: '../style.css',
		}),
	]
};