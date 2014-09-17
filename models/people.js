module.exports = function(app) {

    var db = require('../libs/db_connect')();
    var Schema = require('mongoose').Schema;

    var people = Schema({
        name: String
        , email: String
    });

    return db.model('people', people);
};