// Increment likes for a post
export function incrementLikes(postIndex) {
	return {
		type: 'INCREMENT_LIKES',
		postIndex
	};
}

// Add comment
export function addComment(postId, author, comment) {
	return {
		type: 'ADD_COMMENT',
		postId,
		author,
		comment
	};
}

// Remove comment
export function removeComment(postId, commentIndex) {
	return {
		type: 'REMOVE_COMMENT',
		postId,
		commentIndex
	};
}
