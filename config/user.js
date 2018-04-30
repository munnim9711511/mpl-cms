const mongoose = require('mongoose');

var user = mongoose.Schema;

var userdb = new Schema({
    userName:String,
    userPass:String,
    email:String,
    Department:String,
    fullName:String
});

var USER = mongoose.model('user', postdb);

module.exports =USER;