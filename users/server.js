//dependencies
var express = require('express');
var morgan = require('morgan');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var passport = require('passport');
var flash = require('connect-flash');
var MongoStore = require('connect-mongo')(session);



var morgan = require('morgan');
var app = express();

var port = process.env.PORT || 8080;


app.listen(port);
console.log('server running on: ' + port);
