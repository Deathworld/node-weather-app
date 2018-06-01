const request = require('request');
const yargs = require('yargs');

const geocode = require('./geocode/geocode.js');
const weather = require('./weather/weather');

const argv = yargs.options({
    a: {
        demand: true,
        alias: 'address',
        describe: 'Address to watch for',
        string: true
    }
})
    .help()
    .argv;

// Get Latitude and Longitude from an address using Google Maps API
// When it's done, it gets and logs the temperature using location callback
geocode.geocodeAddress(argv.address, (errorMessage, results) => {
    if (errorMessage) {
        console.log(errorMessage);
    } else {
        console.log(results.address);
        weather.getWeather(results.latitude, results.longitude, (errorMessage, weatherResults) => {
            if (errorMessage) {
                console.log(errorMessage);
            } else {
                console.log(`It's currently ${weatherResults.temperature}F° there. It feels like ${weatherResults.apparentTemperature}`);
            }
        });
    }
});

// Get Weather infos from Latitude and Longitude
/*
weather.getWeather(47.2261831,-1.5164791, (errorMessage, weatherResults) => {
    if (errorMessage) {
        console.log(errorMessage);
    } else {
        console.log(JSON.stringify(weatherResults, undefined, 2));
    }
});*/
