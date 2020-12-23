import axios from 'axios'

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});


export async function getCoords(zip){
    // let result = await axios.get(`https://www.zipcodeapi.com/rest/qqZmn6H64bx2BdF9UWZKivRu5vQVZtejqIQOVXCkPiRwwPVht3feiPEqxIMY3S5P/info.json/${zip}/degrees`)
    let options = {
      method: 'GET',
      url: 'https://google-maps-geocoding.p.rapidapi.com/geocode/json',
      params: {address: zip, language: 'en'},
      headers: {
        'x-rapidapi-key': 'cc072cf6a1mshca7a9fff5bd7131p175ba7jsne97460d453d2',
        'x-rapidapi-host': 'google-maps-geocoding.p.rapidapi.com'
      }
    };
    let result = await axios.request(options);
    let coordData = result.results.geometry.location

    console.log(result);
    return result;
};
