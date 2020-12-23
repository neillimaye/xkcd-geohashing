import moment from 'moment'
export const INITIAL_STATE = {
  data: "unknown",
  date: moment().format('YYYY-MM-DD'),
  zip: 10010,
  coords:{
    lat: 40.7388,
    long: 73.9815
  }
}
