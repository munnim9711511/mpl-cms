const mongoose = require('mongoose');

var Schema = mongoose.Schema;

var gallerydb = new Schema({
    title:String,
    sub_heading:String,
    lang:String,
    pic_name:String,
    pic_location:String,
    visible:Boolean,
    date_posted:{ type: Date, default: Date.now },
    published_by:String,
    department:String
});

var GALLERYDB = mongoose.model('gallery', gallerydb);

module.exports =GALLERYDB;