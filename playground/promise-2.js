const request = require('request');

var geocodeAddress = (address) => {
    return new Promise((resolve, reject) => {
        var encodedAddress = encodeURIComponent(address);
        request({
            url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=AIzaSyBdUIO1NbWxwTgfpYi1ygIn7cscFQTyu3s`,
            json: true
        }, (error, response, body) => {
            if(error) {

                // Check if there is an error
                reject(`An error has occured => ${error}`);
            } else if(body.status === 'ZERO_RESULTS') {

                // The status is "ZERO_RESULTS"
                reject(`An error has occured => ${body.status}`);
            } else if(body.status === 'OK') {

                // All's good - return some things
                resolve({
                    address: body.results[0].formatted_address,
                    latitude: body.results[0].geometry.location.lat,
                    longitude: body.results[0].geometry.location.lng
                });


            } else {
                callback(`An error has occured while getting data`);
            }

        });
    });
};

geocodeAddress('paris').then((location) => {
    console.log(JSON.stringify(location, undefined, 2));
}, (errorMessage) => {
   console.log(errorMessage);
});