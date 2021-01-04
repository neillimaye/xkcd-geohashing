import moment from 'moment'
export const INITIAL_STATE =  {
    data: ['not yet retrieved'],
		date: moment().format("YYYY-MM-DD"),
    zip: 10010,
    coords: {
      lat: 40.7128,
      lng: 74.0060
    }
}
