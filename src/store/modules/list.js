import {createAction, handleActions} from 'redux-actions';
import {Map, List, fromJS} from 'immutable';
import {pender} from 'redux-pender';

import * as api from 'lib/api';

const GET_POST_LIST = 'list/GET_POST_LIST';

export const getPostList = createAction(GET_POST_LIST, api.getPostList, meta => meta);
// export const getPostList = createAction(GET_POST_LIST);

let postsInit =  fromJS([
	{id: 1, title: 'title1', body: 'body1', publishedDate: '2018-12-23', tags: ['tag1']},
	{id: 2, title: 'title2', body: 'body2', publishedDate: '2018-12-23', tags: ['tag1']},
]);

const initialState = Map({
	posts : postsInit,
	lastPage: null,
});

export default handleActions({
	...pender({
		type: GET_POST_LIST,
		onSuccess: (state, action) => {
			const {data: posts} = action.payload;
			// console.log(posts);
			const lastPage = action.payload.headers['last-page'];
			return state.set('posts', fromJS(posts)).set('lastPage', parseInt(lastPage, 10));
			// return state;
		},
	})
}, initialState);