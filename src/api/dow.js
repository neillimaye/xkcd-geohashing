import axios from 'axios';
import moment from 'moment'

// ${moment().subtract(2, "days")}
// ${moment()}
const quandlAPIKey = 'Ywd3Gtx2oyyN_Ma3exrG';

export async function getDOW(date){
  // code below is to verify that I can manipulate the given date properly to put into the API qrequest
  // console.log('api date')
  // console.log((date.date))
  // console.log(moment(date.date).subtract(2,"days").format('YYYY-MM-DD'))
  let end_date = date.date;
  let start_date = (moment(date.date).subtract(2,"days").format('YYYY-MM-DD'))

  let DOWDataQuery =  `WIKI/DJI.json?collapse=daily&start_date=${start_date}&end_date=${end_date}&api_key=${quandlAPIKey}`
  let data = await axios.get(DOWDataQuery)
  console.log('Successful API Call')
  console.log(data)
  return data;
};
