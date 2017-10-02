'use strict';
const http = require('http');

const config = require('../../config');
exports.local_pollution = ((req, res) => {
    const APIurl =
        config.airPLUrl
        +'?debut='+config.startDate
        +'&fin='+config.endDate
        +'&ville='+config.ville;
    console.log(APIurl);
    http.get(APIurl
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
})
;