//this code does a little more than an API call
//quandl wouldn't let me look at any information past 2017, which is great
//IF YOU'RE A STOCKBROKER WITH A FUCKING TIME MACHINE

import axios from 'axios';
import moment from 'moment'

// ${moment().subtract(2, "days")}
// ${moment()}
// const quandlAPIKey = 'Ywd3Gtx2oyyN_Ma3exrG';
// const alphaVantageAPIKey = 'H96XWBT1J9Y9RN4R';
const marketStackAPIKey = 'e4a78d676f391288ed0a91c0c3dcacb0';

export async function getDOW(date){
  // code below is to verify that I can manipulate the given date properly to put into the API qrequest
  // console.log('api date')
  // console.log((date.date))
  // console.log(moment(date.date).subtract(2,"days").format('YYYY-MM-DD'))
  let end_date = moment(date.date).format('YYYY-MM-DD');
  let start_date = (moment(date.date).subtract(2,"days").format('YYYY-MM-DD'))
  // for the alphavantage API -
  // let DOWDataQuery =  `query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=DOW&outputsize=full&apikey=${alphaVantageAPIKey}`
  // for the quandl API
  // let DOWDataQuery = `WIKI/DOW.json?collapse=daily&start_date=2020-12-14&end_date=2020-12-16&api_key=Ywd3Gtx2oyyN_Ma3exrG`
  // for the worldmarket API
  let DOWDataQuery = `eod?access_key=${marketStackAPIKey}&symbols=DOW&date_from=${start_date}&date_to=${end_date}`
  //adjusted so that weekends don't cause the system to return
  let data = await axios.get(DOWDataQuery)
  console.log('Successful API Call')
  console.log(data.data.data[0].open)
  return data;
};
