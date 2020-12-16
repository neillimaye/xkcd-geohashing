export const Types = {
	GET_DOW_REQUEST: 'dow/get_dow_request',
	GET_DOW_SUCCESS: 'dow/get_dow_success'
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
