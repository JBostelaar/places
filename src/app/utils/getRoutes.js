import App from 'app/components/App';
import OverviewContainer from 'app/components/OverviewContainer';
import AddPlaceContainer from 'app/components/AddPlaceContainer';
import PlaceContainer from 'app/components/PlaceContainer';
import Login from 'app/components/Login';

export default function getRoutes() {
	return [
		{
			component: App,
			path: '/',
			indexRoute: { component: OverviewContainer },
			childRoutes: [
				{
					component: AddPlaceContainer,
					path: '/add',
				},
				{
					component: PlaceContainer,
					path: '/places/:id',
				},
			],
		},
		{
			component: Login,
			path: '/login',
		},
	];
}
