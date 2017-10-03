"use strict";

const config    = require('./../config'),
    express     = require('express'),
    app         = express(),
    port        = process.env.PORT || 3100,
    routes      = require('./api/routes/meteoRoute');

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

routes(app);
app.listen(port);

module.exports = app;