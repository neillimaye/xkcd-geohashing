export const Types = {
	CHANGE_ZIP: 'CHANGE_ZIP'
};

export const changeZIP = (zip) => {
  return {
    type: Types.CHANGE_ZIP,
		payload: zip
  }
}

export default changeZIP;
