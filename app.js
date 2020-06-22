var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors');
require('dotenv').config();

const MONGO_DB_URL = process.env.MONGO_DB_URL;
const mongoose = require('mongoose');

var indexRouter = require('./routes/index');
var dataRouter = require('./routes/data');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

app.use('/', indexRouter);
app.use('/data', dataRouter);

// connect to mongodb.
mongoose.connect(MONGO_DB_URL, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('database connected');
    }
});

module.exports = app;
