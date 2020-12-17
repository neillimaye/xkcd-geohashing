export const Types = {
	CHANGE_DATE: 'CHANGE_DATE'
};

export const changeDate = (date) => {
  return {
    type: Types.CHANGE_DATE,
		payload:date
  }
}

export default changeDate;
