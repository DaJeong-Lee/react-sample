import React from 'react';
import styles from './PostBody.scss';
import className from 'classnames/bind';

const cx = className.bind(styles);

const PostBody = () => (
	<div className={cx('post-body')}>
		<div className={cx('paper')}>
			Content
		</div>
	</div>
)

export default PostBody;
