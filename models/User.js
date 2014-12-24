/**
 * Created by zcui on 12/17/14.
 */
var mongoose = require('../dbconnection/connection');

var schema = new mongoose.Schema({

    username :String,
    password :String
});

module.exports = mongoose.model('User',schema);