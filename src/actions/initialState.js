import moment from 'moment'
export const INITIAL_STATE =  {
    data: ['dummy data'],
		date: moment().format("YYYY-MM-DD"),
    zip: 10010,
    coords: {
      lat: 41,
      lng: 74
    }
}
