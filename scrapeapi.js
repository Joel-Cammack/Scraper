const axios = require("axios");

const options = {
  method: 'GET',
  url: 'https://odds.p.rapidapi.com/v4/sports',
  params: {all: 'true'},
  headers: {
    'X-RapidAPI-Key': '590cb38bfemshfffeb7a50d399e4p1de8c5jsn14c45dcd34d0',
    'X-RapidAPI-Host': 'odds.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});
