import React from 'react';
import styles from './Header.scss';
import className from 'classnames/bind';
import {Link} from 'react-router-dom';
import Button from 'components/common/Button';

const cx = className.bind(styles);

const Header = () => (
	<header className={cx('header')}>
		<div className={cx('header-content')}>
			<div className={cx('brand')}>
				<Link to="/">reactblog</Link>
			</div>
			<div className={cx('right')}>
				<Button theme="outline" to="/editor">New Post</Button>
			</div>
		</div>
	</header>
);

export default Header;
