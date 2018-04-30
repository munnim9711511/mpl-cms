const mongoose = require('mongoose');

var user = mongoose.Schema;

var postdb = new Schema({
    title:String,
    subtitle:String,
    datePosted:String,
    post:String,
    by:String,
    department:String
});

var POSTDB = mongoose.model('post', postdb);

module.exports =POSTDB;