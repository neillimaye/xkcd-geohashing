export const Types = {
	CHANGE_MEETUP: 'CHANGE_MEETUP'
};

export const changeMeetup = (meetup) => {
  return {
    type: Types.CHANGE_MEETUP,
		payload: meetup
  }
}

export default changeMeetup;
