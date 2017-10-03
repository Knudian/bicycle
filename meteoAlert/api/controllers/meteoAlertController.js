'use strict';
const http = require('http');
const convert = require('xml-js');
const config = require('../../config');
exports.local_meteo = ((req, res) => {
    console.log(config.alertUri);
    http.get(config.alertUri
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
                    const parsedData = convert.xml2json(rawData, {compact : true});
                    res.json(JSON.parse(parsedData).CV.DV.find(data => data._attributes.dep == 44));
                } catch (e) {
                    console.error(e.message);
                }
            });
        })).on('error', (e) => {
        console.error(`Got error: ${e.message}`);
    });
})
;