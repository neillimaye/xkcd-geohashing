export const Types = {
	CHANGE_ZIP: 'CHANGE_ZIP',
	GET_ZIP_REQUEST: 'GET_ZIP_REQUEST',
	GET_ZIP_SUCCESS: 'GET_ZIP_SUCCESS',
};

export const changeZIP = (zip) => {
  return {
    type: Types.CHANGE_ZIP,
		payload: zip
  }
}

export const getZIPRequest = (coords) => ({
	type: Types.GET_ZIP_REQUEST,
	coords
});

export const getZIPSuccess = (coords) => ({
	type: Types.GET_ZIP_SUCCESS,
	payload:
		coords
});
