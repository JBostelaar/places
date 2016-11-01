import pkg from '../../../package.json';

export default function renderFullPage(html) {
	return (
	`<!doctype html>
	<html>
		<head>
			<meta charset="utf-8">
			<title>App</title>
			<link href="https://fonts.googleapis.com/css?family=Montserrat|Source+Sans+Pro" rel="stylesheet">
			<script src="https://www.gstatic.com/firebasejs/3.5.3/firebase.js"></script>
			<link rel="stylesheet" href="/css/style.css?v=${pkg.version}">

			<meta name="apple-mobile-web-app-capable" content="yes">
			<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
		</head>
		<body>
			<div id="app">${html}</div>
			<script src="/js/bundle.js?v=${pkg.version}"></script>
		</body>
	</html>`
	);
}
