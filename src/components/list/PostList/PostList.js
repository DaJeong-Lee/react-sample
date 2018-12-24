import React from 'react';
import styles from './PostList.scss';
import className from 'classnames/bind';
import {Link} from 'react-router-dom';
import moment from 'moment';
import removeMd from 'remove-markdown';

const cx = className.bind(styles);

const PostItem = ({title, body, publishedDate, tags, id}) => {
	let tagList = null;
	if(tags){
		tagList = tags.map(tag => <Link key={tag} to={`/tag/${tag}`}>#{tag}</Link>);
	}else{
		tagList = [<Link key="tag1" to={`/tag/tag1`}>#tag1</Link>];
	}

	return (
		<div className={cx('post-item')}>
			<h2><a><Link to={`/post/${id}`}>{title}</Link></a></h2>
			<div className={cx('date')}>{moment(publishedDate).format('ll')}</div>
			<p>{removeMd(body)}</p>
			<div className={cx('tags')}>
				{tagList}
			</div>
		</div>
	)
};

const PostList = ({posts}) => {
	const postList = posts.map(
		(post) => {
			const {id, title, body, publishedDate, tags} = post.toJS();
			return (
				<PostItem title={title}
									body={body}
									publishedDate={publishedDate}
									tags={tags}
									key={id}
									id={id}
				>
				</PostItem>
			)
		}
	)

	return (
		<div className={cx('post-list')}>
			{postList}
		</div>
	)
}

export default PostList;
