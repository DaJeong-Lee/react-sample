import React, {Component} from 'react';
import styles from './PreviewPane.scss';
import classNames from 'classnames/bind';
import MarkdownRender from 'components/common/MarkdownRender';

const cx = classNames.bind(styles);

const PreviewPane = ({markdown, title}) => {
	return (
		<div className={cx('preview-pane')}>
			<div className={cx('title')}>
				{title}
			</div>
			<div >
				<MarkdownRender markdown={markdown}/>
			</div>
		</div>
	)
}

export default PreviewPane;

