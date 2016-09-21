/*
	A reducer takes in two things:
		1.- The action
		2.- Copy of the current state

	It must return a NEW current state (in changed)
*/

const actionsHandlersMaps = {
	'ADD_COMMENT': addCommentHandler,
	'REMOVE_COMMENT': removeCommentHandler
};

function defaultHandler(action, comments) { return comments; }

function addCommentHandler(actionPayload, comments) {
	let postComments = comments[actionPayload.postId] || [];

	postComments.push({
		user: actionPayload.author,
		text: actionPayload.comment
	});

	comments[actionPayload.postId] = postComments;
	return comments;
}

function removeCommentHandler(actionPayload, comments) {
	let postComments = comments[actionPayload.postId] || [];

	postComments.splice(actionPayload.commentIndex, 1);

	comments[actionPayload.postId] = postComments;
	return comments;
}


/* REDUCER */
function comments(state = [], action) {
	console.log('Comments reducer receive an action:', action.type, 'with this payload:', action);
	let newComments = Object.assign({}, state);

	const handler = actionsHandlersMaps[action.type] || defaultHandler;

	return handler(action, newComments);	
}

/*
function postComments(state = [], action) {
	switch(action.type) {
		case 'ADD_COMMENT':
			return [...state, {
				user: action.author,
				text: action.comment
			}];
		case 'REMOVE_COMMENT':
		default:
			return state;
	}
}

function comments(state = [], action) {
  if(typeof action.postId !== 'undefined') {
    return {
      // take the current state
      ...state,
      // overwrite this post with a new one
      [action.postId]: postComments(state[action.postId], action)
    }
  }
  return state;
}
*/

export default comments;
