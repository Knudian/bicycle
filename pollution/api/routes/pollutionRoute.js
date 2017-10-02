'use strict';
module.exports = function(app){
    var pollution = require('../controllers/pollutionController');
    app.route('/pollution')
        .get(pollution.local_pollution);
};