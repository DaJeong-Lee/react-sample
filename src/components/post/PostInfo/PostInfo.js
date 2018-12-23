import React from 'react';
import styles from './PostInfo.scss';
import className from 'classnames/bind';

const cx = className.bind(styles);

const PostInfo = () => (
	<div className={cx('post-info')}>
		<div className={cx('info')}>
			<h1>Title</h1>
			<div className={cx('tags')}>
				<a>#Tag</a>
				<a>#Tag</a>
				<a>#Tag</a>
			</div>
			<div className={cx('date')}>Oct 12, 2018</div>
		</div>
	</div>
)

export default PostInfo;
