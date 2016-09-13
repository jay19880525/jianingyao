var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var exphbs = require('express-handlebars');
var errorhandler = require('errorhandler');
var staticPages = require('./routes/staticPages');
var cors = require('cors');
var app = express();


app.use(logger('dev'));
app.use('/', staticPages);
app.use(express.static(path.join(__dirname, 'public')));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  res.send('page not found');
});

// error handlers
app.use(errorhandler());

module.exports = app;
