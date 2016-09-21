import React from 'react';
import { Link } from 'react-router';

import Photo from './Photo';

const PhotoGrid = React.createClass({
	render() {
		console.log(this.props);
		return (
			<div className="photo-grid">
				{this.props.posts.map((post, i) => <Photo key={i} postIndex={i} post={post} {...this.props} />)}
			</div>
		);
	}
});

export default PhotoGrid;
