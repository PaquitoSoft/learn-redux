import { createStore, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

// Import the Root Reducer
import rootReducer from './reducers/index';

import posts from './data/posts';
import comments from './data/comments';

// Create an object for the default data
const defaultState = {
	posts,
	comments
};

const store = createStore(rootReducer, defaultState);

export const history = syncHistoryWithStore(browserHistory, store);

// This is to enable reducers hot reload
// Should only be configured in development environments
if (module.hot) {
	module.hot.accept('./reducers/', () => {
		const nextRootReducer = require('./reducers/index').default;
		store.replaceReducer(nextRootReducer);
	});
}

export default store;
