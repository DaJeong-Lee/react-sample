import React, {Component} from 'react';
import PostList from 'components/list/PostList';
import Pagination from 'components/list/Pagination';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as listActions from 'store/modules/list';

class ListContainer extends Component{
	getPostList = () => {
		const {tag, pages, ListActions} = this.props;
		ListActions.getPostList({
			pages,
			tag
		})
	}

	componentDidMount(){
		this.getPostList();
	}

	componentDidUpdate(prevProps, prevState){
		if(prevProps.page !== this.props.page || prevProps.tag !== this.props.tag){
			this.getPostList();
			document.documentElement.scrollTop = 0;
		}
	}

	render(){
		const {loading, posts, page, lastPage, tag} = this.props;
		if(loading) return null;
		return(
			<div>
				<PostList posts={posts}></PostList>
				<Pagination page={page} lastPage={lastPage} tag={tag}/>
			</div>
		)
	}
}

export default connect(
	(state) => ({
		lastPage: state.list.get('lastPage'),
		posts: state.list.get('posts'),
		loading: state.pender.pending['list/GET_POST_LIST']
	}),
	(dispatch) => ({
		ListActions: bindActionCreators(listActions, dispatch)
	})
)(ListContainer);
