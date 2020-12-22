import axios from 'axios';
import moment from 'moment';
import _ from 'lodash'

export async function getDOW(date){
  // to adjust for different dates, the outputsize value needs to be adjusted accordingly.
  // new code uses the twelvedata API server, which provides all the information I need
  // plus I have rapidapi taking care of the overhead, which is nice
  let endDate = moment(date.date)
  let today = moment().format('YYYY-MM-DD')
  // console.log(endDate)
  // console.log(today)
  let newOutput = -1 * endDate.diff(today,"days")
  let options = {
  method: 'GET',
  url: 'https://twelve-data1.p.rapidapi.com/time_series',
  params: {symbol: 'DJI', interval: '1day', outputsize: '10', format: 'json'},
    headers: {
      'x-rapidapi-key': 'cc072cf6a1mshca7a9fff5bd7131p175ba7jsne97460d453d2',
      'x-rapidapi-host': 'twelve-data1.p.rapidapi.com'
    }
  };
  if (newOutput > options.params.outputsize){
    options.params.outputsize = newOutput;
  }

  console.log('checking the past ' + options.params.outputsize + ' days')

  axios.request(options).then(function (response) {
  	let result = response.data.values

    return response.data.values
  }).catch(function (error) {
  	console.error(error);
  });


};
