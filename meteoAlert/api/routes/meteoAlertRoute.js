module.exports = function(app){
    var meteo = require('../controllers/meteoAlertController');
    app.route('/alert')
        .get(meteo.local_meteo);
};