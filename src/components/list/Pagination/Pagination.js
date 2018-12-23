import React from 'react';
import styles from './Pagination.scss';
import className from 'classnames/bind';
import Button from 'components/common/Button';

const cx = className.bind(styles);

const Pagination = ({page, lastPage, tag}) => {
	const createPagePath = (page) => {
		return tag ? `/tag/${tag}/${page}`: `/page/${page}`;
	}

	return (
		<div className={cx('pagination')}>
			<Button disabled={page===1} to={createPagePath(page-1)}>
				Prev page
			</Button>
			<div className={cx('number')}>
				Page {page}
			</div>
			<Button disabled={page === lastPage} to={createPagePath(page+1)}>
				Next page
			</Button>
		</div>
	)
};

export default Pagination;
