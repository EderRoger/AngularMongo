module.exports = function(app) {

    var db = require('../libs/db_connect')();
    var Schema = require('mongoose').Schema;

    var pessoa = Schema({
        nome: String
        , email: String
    });

    return db.model('pessoa', pessoa);
};