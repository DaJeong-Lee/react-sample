import React from 'react';
import styles from './PostList.scss';
import className from 'classnames/bind';
import {Link} from 'react-router-dom';

const cx = className.bind(styles);

const PostItem = () => {
	return (
		<div className={cx('post-item')}>
			<h2><a>Title</a></h2>
			<div className={cx('date')}>2018-12-23</div>
			<p>내용</p>
			<div className={cx('tags')}>
				<a>#Tag</a>
				<a>#Tag</a>
				<a>#Tag</a>
			</div>
		</div>
	)
};

const PostList = () => (
	<div className={cx('post-list')}>
		<PostItem/>
		<PostItem/>
		<PostItem/>
		<PostItem/>
	</div>
)

export default PostList;
