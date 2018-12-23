import {createAction, handleActions} from 'redux-actions';
import {Map, fromJS, List} from 'immutable';
import {pender} from 'redux-pender';

const GET_POST = 'post/GET_POST';

export const getPost = createAction(GET_POST);

let postsInit =  fromJS([
	{_id: 1, title: 'title1', body: 'body1', publishedDate: '2018-12-23', tags: ['tag1']},
	{_id: 2, title: 'title2', body: 'body2', publishedDate: '2018-12-23', tags: ['tag2']},
]);

const initialState = Map({
	post: postsInit.get(0),
	loading: false
});

export default handleActions({
	[GET_POST]: (state, action) => {
		const id = action.payload;
		console.log(typeof parseInt(id))
		let post = postsInit.filter(p => p.get('_id') === parseInt(id));
		if (post.size === 0){
			post = List([postsInit.get(postsInit.size-1)]);
		}
		return state.set('post', post.get(0));
	}
}, initialState);