const request = require('request');


var getWeather = (latitude, longitude, callback) => {
    request({
        url: `https://api.darksky.net/forecast/6cebf2244ad2cd5a3206fe6929dc50f1/${latitude},${longitude}`,
        json: true
    }, (error, response, body) => {
        if(error) {
            callback(`Unable to fetch data !`);
        } else if(response.statusCode === 400) {
            callback(`An error has occured`);
        } else if(response.statusCode === 200) {
            callback(undefined, {
                temperature: body.currently.temperature,
                apparentTemperature: body.currently.apparentTemperature
            });
        }

    });
};

module.exports.getWeather = getWeather;