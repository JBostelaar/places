export default function renderFullPage(html) {
	return (
	`<!doctype html>
	<html>
		<head>
			<meta charset="utf-8">
			<title>App</title>
			<link rel="stylesheet" href="/styles/style.css?v=1.0">
		</head>
		<body>
			<div id="app">${html}</div>
			<script src="bundle.js"></script>
		</body>
	</html>`
	);
}
