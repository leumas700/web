let createError = require('http-errors');
let express = require('express');
let path = require('path');
let cookieParser = require('cookie-parser');
let logger = require('morgan');

let index = require('./routes/index');
let p5 = require('./routes/p5');
let p5gallery = require('./routes/p5gallery');


let app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
let exphbs = require('express-handlebars');
app.engine('hbs', exphbs({
  defaultLayout: __dirname + '/views/layouts/layout.hbs',
  partialsDir: __dirname + '/views/partials',
  layoutsDir: __dirname + '/views/layouts'
}));
console.log(__dirname + '/views/layouts/');
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/p5', p5);
app.use('/p5gallery', p5gallery);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
