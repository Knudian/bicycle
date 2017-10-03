const express = require('express'),
    app = express(),
    port = process.env.PORT || 3300,
    routes = require('./api/routes/meteoAlertRoute');

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

routes(app);
app.listen(port);

module.exports = app;