/**
 * Created by zcui on 12/17/14.
 */
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/photo_app');
module.exports = mongoose;