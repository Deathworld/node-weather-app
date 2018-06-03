const request = require('request');



/*
      _                                               _                _
     | |                                             | |              | |
   __| |   ___   _ __    _ __    ___    ___    __ _  | |_    ___    __| |
  / _` |  / _ \ | '_ \  | '__|  / _ \  / __|  / _` | | __|  / _ \  / _` |
 | (_| | |  __/ | |_) | | |    |  __/ | (__  | (_| | | |_  |  __/ | (_| |
  \__,_|  \___| | .__/  |_|     \___|  \___|  \__,_|  \__|  \___|  \__,_|
                | |
                |_|
*/


var geocodeAddress = (address, callback) => {
    var encodedAddress = encodeURIComponent(address);
    request({
        url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=AIzaSyBdUIO1NbWxwTgfpYi1ygIn7cscFQTyu3s`,
        json: true
    }, (error, response, body) => {
        if(error) {

            // Check if there is an erreor
            callback(`An error has occured => ${error}`);
        } else if(body.status === 'ZERO_RESULTS') {

            // The status is "ZERO_RESULTS"
            callback(`An error has occured => ${body.status}`);
        } else if(body.status === 'OK') {

            // All's good - return some things
            callback(undefined, {
                address: body.results[0].formatted_address,
                latitude: body.results[0].geometry.location.lat,
                longitude: body.results[0].geometry.location.lng
            });


        } else {
            callback(`An error has occured while getting data`);
        }

    });
};



module.exports.geocodeAddress = geocodeAddress;

