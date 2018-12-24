import axios from 'axios';
import queryString from 'query-string';

export const getPost = (id) => {
	return axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
};

export const getPostList = () => {
    return axios.get(`https://jsonplaceholder.typicode.com/posts`);
}

