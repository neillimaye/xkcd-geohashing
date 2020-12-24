import moment from 'moment'
export const INITIAL_STATE =  {
    data: ['not yet retrieved'],
		date: moment().format("YYYY-MM-DD"),
    zip: 10010,
    coords: {
      lat: 41.9404,
      lng: -87.6532
    }
}
