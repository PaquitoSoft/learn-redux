import React from 'react';

import { render } from 'react-dom';

// Import CSS
import css from './styles/style.styl';

// Import components
import App from './components/App';
import PhotoGrid from './components/PhotoGrid';
import Single from './components/Single';

// Import React Router deps
import { Router, Route, IndexRoute/*, browserHistory*/ } from 'react-router';

// Cloud error logging (Sentry)
import Raven from 'raven-js';
import { sentry_url } from './data/config';
Raven.config(sentry_url, {
	tags: {
		git_commit: 'fhdskjhfkafa',
		userLevel: 'editor'
	}
}).install();

import { Provider } from 'react-redux';
import appStore, { history } from './store';

const router = (
	<Provider store={appStore}>
		<Router history={history}>
			<Router path="/" component={App}>
				<IndexRoute component={PhotoGrid}></IndexRoute>
				<Route path="/view/:postId" component={Single}></Route>
			</Router>
		</Router>
	</Provider>
);

render(router, document.getElementById('root'));
