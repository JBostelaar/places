/* eslint no-console: 0 */
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
	res.send(`<!doctype html>
	<html>
		<head>
			<meta charset="utf-8">
			<title>Places</title>
			<link href="https://fonts.googleapis.com/css?family=Montserrat|Source+Sans+Pro" rel="stylesheet">
			<script src="https://www.gstatic.com/firebasejs/3.5.3/firebase.js"></script>

			<meta name="apple-mobile-web-app-capable" content="yes">
			<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
		</head>
		<body>
			<div id="app"></div>
			<script src="/dist/bundle.js"></script>
		</body>
	</html>`);
});

app.listen(3000, function () {
	console.log('Listening at http://localhost:3000/');
});
