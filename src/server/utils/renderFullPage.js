import pkg from '../../../package.json';

export default function renderFullPage(html) {
	return (
	`<!doctype html>
	<html>
		<head>
			<meta charset="utf-8">
			<title>App</title>
			<link rel="stylesheet" href="/css/style.css?v=${pkg.version}">
		</head>
		<body>
			<div id="app">${html}</div>
			<script src="/js/bundle.js?v=${pkg.version}"></script>
		</body>
	</html>`
	);
}
