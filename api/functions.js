//for making API calls
var request = require('request');
var config = require('./config');

var functions = {};

functions.training = function() { 
    return new Promise( function(resolve, reject) {
        return 'william\'s training function';
    });
}

///////////////////////////////////

module.exports = functions;
