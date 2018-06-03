const yargs = require('yargs');
const axios = require('axios');

const argv = yargs.options({
    a: {
        demand: false,
        alias: 'address',
        describe: 'Address to watch for',
        string: true
    },

    d: {
        demand: false,
        alias: 'default',
        describe: 'Set the default location',
        string: true
    },

    i: {
        demand: false,
        alias: 'info',
        describe: 'Print the default location',
        string: false
    }
})
    .help()
    .argv;




var encodedAddress = encodeURIComponent(argv.address);
var geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=AIzaSyBdUIO1NbWxwTgfpYi1ygIn7cscFQTyu3s`;

axios.get(geocodeUrl).then((response) => {
    if(response.data.status === 'ZERO_RESULTS'){
        throw new Error('Unable to find that address.');
    }
    var latitude = response.data.results[0].geometry.location.lat;
    var longitude = response.data.results[0].geometry.location.lng;

    var weatherUrl = `https://api.darksky.net/forecast/6cebf2244ad2cd5a3206fe6929dc50f1/${latitude},${longitude}`;

    console.log(response.data.results[0].formatted_address);
    return axios.get(weatherUrl);

}).then((response) => {

    var temperature = response.data.currently.temperature;
    var apparentTemperature = response.data.currently.temperature;
    console.log(`It's currently ${temperature} but it feels like ${apparentTemperature}`)

}).catch((e) => {
    if(e.code === 'ENOTFOUND'){
        console.log('Unable to connect to API servers.');
    } else {
        console.log(e.message);
    }
});