import axios from 'axios'
export async function getCoords(zip){
  console.log(zip)
  let options = {
    method: 'GET',
    url: 'https://trueway-geocoding.p.rapidapi.com/Geocode',
    params: {address: '10010', language: 'en', country: 'US'},
    headers: {
      'x-rapidapi-key': 'cc072cf6a1mshca7a9fff5bd7131p175ba7jsne97460d453d2',
      'x-rapidapi-host': 'trueway-geocoding.p.rapidapi.com'
    }
  };
  console.log('penis')
  //
  // axios.request(options).then(function (response) {
  // 	console.log(response.data);
  // }).catch(function (error) {
  // 	console.error(error);
  // });
};
