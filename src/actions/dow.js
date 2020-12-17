export const Types = {
	GET_DOW_REQUEST: 'GET_DOW_REQUEST',
	GET_DOW_SUCCESS: 'GET_DOW_SUCCESS'
};

export const getDOWRequest = (date) => ({
	type: Types.GET_DOW_REQUEST,
	date
});

export const getDOWSuccess = ({items}) => ({
	type: Types.GET_DOW_SUCCESS,
	payload: {
		items
	}
});
