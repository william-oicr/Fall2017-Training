var functions = require('./functions');
var config = require('./config');

var LogRoutes = require('express-log-routes');
var logRoutes = new LogRoutes();

const routes = require('express').Router();


//API Functions

var getTraining = function (req, res) {
    functions.training().then((data) => {
        res.send(data).status(200);
    }).catch((reason) => {
        this.body = reason;
        this.status = 400;
    });
}

// API ENDPOINTS

////////////////////////////////////////

routes.get('/training', getTraining);

////////////////////////////////////////

logRoutes({
  router: routes,
  baseUri: 'localhost:3000' 
});

module.exports = routes;
