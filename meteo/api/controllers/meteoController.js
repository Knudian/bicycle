'use strict';
const http = require('http');

const config = require('./../../config');
exports.local_meteo = ((req, res) => {
    http.get(config.openWeatherMapServerUri + config.openWeatherMapApiUri + 'weather?q=Nantes,fr&appid=' + config.openWeatherMapApiKey
        , ((resGet) => {
            const {statusCode} = resGet;
            let error;
            if (statusCode !== 200) {
                error = new Error(statusCode);
            }
            if (error) {
                console.error(error.message);
                res.resume();
                return;
            }
            let rawData = '';
            resGet.on('data', (chunk) => {
                rawData += chunk;
            });
            resGet.on('end', () => {
                console.log('meteo : res->end');
                try {
                    const parsedData = JSON.parse(rawData);
                    res.json(parsedData);
                } catch (e) {
                    console.error(e.message);
                }
            });
        })).on('error', (e) => {
        console.error(`Got error: ${e.message}`);
    });
});