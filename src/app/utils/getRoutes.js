import App from 'app/components/App';
import OverviewContainer from 'app/components/Places/OverviewContainer';
import AddPlaceContainer from 'app/components/Places/AddPlaceContainer';
import PlaceContainer from 'app/components/Places/PlaceContainer';
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
				},
				{
					component: AddPlaceContainer,
					path: '/edit/:id',
				},
			],
		},
		{
			component: Login,
			path: '/login',
		},
	]
);

export default getRoutes;
