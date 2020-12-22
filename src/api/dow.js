import axios from 'axios';
import moment from 'moment';
import _ from 'lodash'

export async function getDOW(date){
  // to adjust for different dates, the outputsize value needs to be adjusted accordingly.
  // new code uses the twelvedata API server, which provides all the information I need
  // plus I have rapidapi taking care of the overhead, which is nice
  let startDate = moment(date.date)
  let today = moment().format('YYYY-MM-DD')
  // console.log(startDate)
  // console.log(today)
  let daysBetween = -1 * startDate.diff(today,"days")
  let options = {
  method: 'GET',
  url: 'https://twelve-data1.p.rapidapi.com/time_series',
  params: {symbol: 'DJI', interval: '1day', outputsize: daysBetween, format: 'json'},
    headers: {
      'x-rapidapi-key': 'cc072cf6a1mshca7a9fff5bd7131p175ba7jsne97460d453d2',
      'x-rapidapi-host': 'twelve-data1.p.rapidapi.com'
    }
  };

  // console.log('checking the past ' + options.params.outputsize + ' days')

  let result = await axios.request(options)
  let DJIAdata = result.data.values;
  let dowOpening = _.find(DJIAdata, {'datetime':moment(startDate).format('YYYY-MM-DD')})
  return dowOpening.open
};
