
var mongoose = require('../dbconnection/connection');
var schema = new mongoose.Schema({
  name: String,
  path: String
});

module.exports = mongoose.model('Photo', schema);

