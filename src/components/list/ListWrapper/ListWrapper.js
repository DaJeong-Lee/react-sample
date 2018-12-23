import React from 'react';
import styles from './ListWrapper.scss';
import className from 'classnames/bind';

const cx = className.bind(styles);

const ListWrapper = ({children}) => (
	<div className={cx('list-wrapper')}>
		{children}
	</div>
);

export default ListWrapper;
