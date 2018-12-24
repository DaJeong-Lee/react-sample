import {createAction, handleActions} from 'redux-actions';
import {Map, fromJS, List} from 'immutable';
import {pender} from 'redux-pender';

import * as api from 'lib/api';

const GET_POST = 'post/GET_POST';

export const getPost = createAction(GET_POST, api.getPost);

const initialState = Map({
	post: Map(),
	loading: false
});

export default handleActions({
	...pender({
		type: GET_POST,
		onSuccess: (state, action) => {
			return state.set('post', fromJS(action.payload.data))
		}
	})
}, initialState);