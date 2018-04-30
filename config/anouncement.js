const mongoose = require('mongoose');

var Schema = mongoose.Schema;

var anouncmentdb = new Schema({
    title:String,
    sub_heading:String,
    lang:String,
    content:String,
    catogary:String,
    visible:Boolean,
    date_posted:{ type: Date, default: Date.now },
    published_by:String,
    department:String
});

var ANOUNC = mongoose.model('anounce', anouncmentdb);

module.exports = ANOUNC;