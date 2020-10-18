import React from 'react';
import * as ROUTES from './constants/routes';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './pages/home'
import Browse from './pages/browse'
import Signin from './pages/signin'
import Signup from './pages/signup'


function App() {
	return (
		<Router>
			<Route exact path={ROUTES.HOME}>
				<Home />
			</Route>
			<Route exact path={ROUTES.BROWSE}>
				<Browse />
			</Route>
			<Route exact path={ROUTES.SIGN_IN}>
				<Signin />
			</Route>
			<Route exact path={ROUTES.SIGN_UP}>
				<Signup />
			</Route>
		</Router>	
	);
}

export default App;
