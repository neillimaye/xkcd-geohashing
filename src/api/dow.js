import axios from 'axios';
const quandlAPIKey = 'Ywd3Gtx2oyyN_Ma3exrG';

// ${moment().subtract(2, "days")}
// ${moment()}
 export async function getDOW(date){
  console.log('api date')
  console.log(date)
  let DOWDataQuery =  `WIKI/DOW.json?collapse=daily&start_date=2014-10-08&end_date=2014-10-15&api_key=${quandlAPIKey}`
  let data = await axios.get(DOWDataQuery)
  console.log('Successful API Call')
  return data;
};
