'use static';

import express  from 'express';
const app = express();

app.use(express.static('dist/client'));

app.get('/', function (req, res) {
	res.sendfile('dist/client/templates/index.html');
});

app.listen(3000, function () {
	console.log('Listening on port 3000');
});