import App from 'app/components/App';
import Login from 'app/components/Login';

export default function getRoutes() {
	return [
		{
			component: App,
			path: '/',
		},
		{
			component: Login,
			path: '/login',
		},
	];
}
