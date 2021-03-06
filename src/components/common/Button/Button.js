import React from 'react';
import styles from './Button.scss';
import className from 'classnames/bind';
import {Link} from 'react-router-dom';

const cx = className.bind(styles);

const Div = ({children, ...rest}) => <div {...rest}>{children}</div>

const Button = ({children, to, onClick, disabled, theme='default'}) => {
	const Element = (to && !disabled) ? Link: Div;

	return (
		<Element to={to}
						 className={cx('button', theme, {disabled})}
						 onClick={disabled ? ()=>null : onClick}
		>
			{children}
		</Element>
	)
}

export default Button;
