/* eslint no-console: 0 */
const path = require('path');
const express = require('express');
const webpack = require('webpack');
const webpackMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const config = require('./webpack.config.js');

const app = express();

const compiler = webpack(config);
const middleware = webpackMiddleware(compiler, {
	publicPath: config.output.publicPath,
	historyApiFallback: true,
	hot: true,
});

app.use(middleware);
app.use(webpackHotMiddleware(compiler));

app.get('*', function response(req, res) {
	res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(3000, function (err) {
	if (err) return console.error(err);
	console.log('Listening at http://localhost:3000/');
});
