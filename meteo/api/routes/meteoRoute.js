'use strict';
module.exports = function(app){
    var meteo = require('../controllers/meteoController');
    app.route('/meteo')
        .get(meteo.local_meteo);
};