import App from 'app/components/App';
import OverviewContainer from 'app/components/OverviewContainer';
import AddPlaceContainer from 'app/components/AddPlaceContainer';
import PlaceContainer from 'app/components/PlaceContainer';
import Login from 'app/components/Login';
import Profile from 'app/components/Profile';

const requireAuth = (store) => (nextState, transtition) => {
	if (store && !store.getState().auth.authenticated) {
		transtition('/login');
	}
};

const getRoutes = (store) => (
	[
		{
			component: App,
			path: '/',
			onEnter: requireAuth(store),
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
				{
					component: Profile,
					path: '/profile',
				}
			],
		},
		{
			component: Login,
			path: '/login',
		},
	]
);

export default getRoutes;
