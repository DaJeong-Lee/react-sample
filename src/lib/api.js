import axios from 'axios';

export const getPost = (id) => {
	return ("Post "+ id)
};

export const getPostList = ({tag, page}) => {
	return (
		"list of post"
	);
}