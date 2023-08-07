const express = require('express');

const app = express();
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const cors = require('cors');
const ErrorHandler = require('./middleware/Error');

app.use(express.json());
app.use(cookieParser());
// Allow requests from your frontend domain
app.use(
  cors({
    origin: 'http://localhost:5173', // Replace with your frontend's URL
  })
);
app.use('/', express.static('uploads'));
app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));

// config
if (process.env.NODE_ENV !== 'PRODUCTION') {
  require('dotenv').config({
    path: 'config/.env',
  });
}

// import routs
const user = require('./controller/userControl');

app.use('/api/v2/user', user);

// it's for ErrorHandling
app.use(ErrorHandler);

module.exports = app;
