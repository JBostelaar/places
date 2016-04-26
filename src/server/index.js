import express from 'express';
import React from 'react';
import App from 'client/components/App';
import { renderToString } from 'react-dom/server';
import renderFullPage from './utils/renderFullPage';

const app = express();

app.use(express.static('dist/client'));

app.get('*', (req, res) => {
	res.send(renderFullPage(
		renderToString(<App />)
	));
});

app.listen(3000, () => {
	console.log('Listening on port 3000');
});
