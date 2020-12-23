export const Types = {
	GET_COORDS_REQUEST: 'GET_COORDS_REQUEST',
	GET_COORDS_SUCCESS: 'GET_COORDS_SUCCESS'
};

export const getCoordsRequest = (zip) => ({
	type: Types.GET_COORDS_REQUEST,
	zip
});

export const getCoordsSuccess = ({coords}) => ({
	type: Types.GET_COORDS_SUCCESS,
	payload: {
		coords
	}
});
