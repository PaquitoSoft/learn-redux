import React from 'react';
import { Link } from 'react-router';

import Photo from './Photo';
import Comments from './Comments';

const Single = React.createClass({
	render() {
		const index = this.props.posts.findIndex(post => post.code === this.props.params.postId);
		const post = this.props.posts[index];
		const postComments = this.props.comments[post.code];

		return (
			<div className="single-photo">
				<Photo postIndex={index} post={post} {...this.props} />
				<Comments postComments={postComments} {...this.props} />
			</div>
		);
	}
});

export default Single;
