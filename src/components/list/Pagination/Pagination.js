import React from 'react';
import styles from './Pagination.scss';
import className from 'classnames/bind';
import Button from 'components/common/Button';

const cx = className.bind(styles);

const Pagination = () => (
	<div className={cx('pagination')}>
		<Button disabled>
			Prev page
		</Button>
		<div className={cx('number')}>
			Page 1
		</div>
		<Button>
			Next page
		</Button>
	</div>
)

export default Pagination;
