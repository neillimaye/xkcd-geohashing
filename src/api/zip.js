import axios from 'axios'


export async function getZIP(coords){
    // let result = await axios.get(`https://www.coordscodeapi.com/rest/qqZmn6H64bx2BdF9UWZKivRu5vQVZtejqIQOVXCkPiRwwPVht3feiPEqxIMY3S5P/info.json/${coords}/degrees`)
    // console.log('getZIP API fired')
    let options = {
      method: 'GET',
      url: 'https://google-maps-geocoding.p.rapidapi.com/geocode/json',
      params: {address: coords.lat+','+coords.lng, language: 'en'},
      headers: {
        'x-rapidapi-key': 'cc072cf6a1mshca7a9fff5bd7131p175ba7jsne97460d453d2',
        'x-rapidapi-host': 'google-maps-geocoding.p.rapidapi.com'
      }
    };
    let result = await axios.request(options);
    return result.data.results[0].address_components[7].long_name;
};
