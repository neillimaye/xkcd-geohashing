import moment from 'moment'
export const INITIAL_STATE =  {
    data: ['dummy data'],
		date: moment().format("YYYY-MM-DD"),
    zip: 10010,
    coords: {
      lat: 41.9404,
      lng: -87.6532
    }
}
