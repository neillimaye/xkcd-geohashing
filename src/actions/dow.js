export const Types = {
	GET_DOW_REQUEST: 'GET_DOW_REQUEST',
	GET_DOW_SUCCESS: 'GET_DOW_SUCCESS'
};

export const getDOWRequest = () => ({
	type: Types.GET_DOW_REQUEST
});

export const getDOWSuccess = ({items}) => ({
	type: Types.GET_DOW_SUCCESS,
	payload: {
		items
	}
});
