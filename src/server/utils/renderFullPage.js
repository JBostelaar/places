const renderFullPage = (html) => (
	`<!doctype html>
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
			<div id="app">${html}</div>
			<script src="bundle.js"></script>
		</body>
	</html>`
);

export default renderFullPage;
