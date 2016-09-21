/*
	A reducer takes in two things:
		1.- The action
		2.- Copy of the current state

	It must return a NEW current state (if changed)
*/

const actionsHandlersMaps = {
	'INCREMENT_LIKES': incrementPostLikesHandler
};

function defaultHandler(action, state) { return state; }

function incrementPostLikesHandler(actionPayload, posts) {
	posts[actionPayload.postIndex].likes++;
	return posts;
}

function posts(posts = [], action) {
	let newState = [...posts];

	console.log('Posts reducer receive an action:', action.type, 'with this payload:', action);
	
	const handler = actionsHandlersMaps[action.type] || defaultHandler;

	return handler(action, newState);
}

export default posts;
