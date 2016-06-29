import App from 'app/components/App';
import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import renderFullPage from 'server/utils/renderFullPage';

const app = express();

app.use(express.static('dist/client'));

app.get('*', (req, res) => {
	res.send(renderFullPage(
		renderToString(<App />)
	));
});

app.listen(3000, () => {
	console.info('Listening on port 3000');
});
