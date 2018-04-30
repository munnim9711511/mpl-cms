var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/cms');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var postRouter = require("./routes/post");
var anouncmentRouter = require("./routes/anoucment");
var galleryRouter = require("./routes/gallery");
var authRouter = require("./routes/auth");

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use("/post",postRouter);
app.use("/anouncement",anouncmentRouter);
app.use("/gallery",galleryRouter);
app.use("/auth",authRouter);

module.exports = app;
