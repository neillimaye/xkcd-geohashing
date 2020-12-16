import axios from 'axios';
const quandlAPIKey = 'Ywd3Gtx2oyyN_Ma3exrG';

let DOWDataQuery =  `WIKI/DOW.json?collapse=daily&start_date=2014-10-08&end_date=2014-10-15&api_key=${quandlAPIKey}`
// ${moment().subtract(2, "days")}
// ${moment()}
 export async function getDOW(){
    let data = await axios.get(DOWDataQuery)
    console.log('Successful API Call')
    return data;
};
