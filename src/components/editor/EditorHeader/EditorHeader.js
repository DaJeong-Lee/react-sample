import React, {Component} from 'react';
import styles from './EditorHeader.scss';
import classNames from 'classnames/bind';
import Button from 'components/common/Button';

const cx = classNames.bind(styles);

const EditorHeader = ({onGoBack, onSubmit}) => {
	return (
		<div className={cx('editor-header')}>
			<div className={cx('back')}>
				<Button onClick={onGoBack} theme="outline">Go Back</Button>
			</div>
			<div className={cx('submit')}>
				<Button onClick={onSubmit} theme="outline">Submit</Button>
			</div>
		</div>
	)
}

export default EditorHeader;

