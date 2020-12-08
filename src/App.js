import React from 'react';
import * as ROUTES from './constants/routes';
import {BrowserRouter as Router, Switch} from 'react-router-dom';
import Home from './pages/home';
import Browse from './pages/browse';
import Signin from './pages/signin';
import Signup from './pages/signup';
import { IsUserRedirect, ProtectedRoute } from './helpers/routes';
import { useAuthListener } from '../src/hooks/use-auth-listener'



export default function App() {
	const {user} = useAuthListener();

	return (
		<Router>
			<Switch>
				<IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.SIGN_IN}>
					<Signin />
				</IsUserRedirect>
				<IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.SIGN_UP}>
					<Signup />
				</IsUserRedirect>
				<ProtectedRoute user={user} path={ROUTES.BROWSE}>
					<Browse />
				</ProtectedRoute>
				<IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.HOME}>
					<Home />
				</IsUserRedirect>
			</Switch>
		</Router>
	);
}

