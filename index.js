/*
const Basics = require('./playground/async-basics');

*/

const request = require('request');
const yargs = require('yargs');

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

var encodedAddress = encodeURIComponent(argv.address);

request({
    url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=AIzaSyBdUIO1NbWxwTgfpYi1ygIn7cscFQTyu3s`,
    json: true
}, (error, response, body) => {
    console.log(`Address :  ${body.results[0].formatted_address}`);
    console.log(`Latitude : ${body.results[0].geometry.location.lat}`);
    console.log(`Longitude : ${body.results[0].geometry.location.lng}`);

});