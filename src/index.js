let express = require('express');
const mongoose = require('mongoose');
const logger = require('morgan');
const helmet = require('helmet');

let app = express();
let port = process.env.PORT || 3000;

const databaseURI = process.env.DB_URI || require('./config/keys').mongoRemoteURI;

app.use(logger('dev'));
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => res.send('Welcome to Express'));

app.listen(port, function() {
    console.log("Running Photo Selector BE on Port "+ port);
});
