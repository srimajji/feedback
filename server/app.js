const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const log = require('./config/logger');
const mongoose = require('mongoose');
const cors = require('cors');

const feedbackController = require('./src/controllers/feedback.controller.js');
const companyController = require('./src/controllers/company.controller.js');
const responseController = require('./src/controllers/response.controller.js');

const app = express();

// set up express
log.debug('Overriding Express logger');
app.use(morgan('combined', { 'stream': log.stream }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// set up routes
const apiVer = 'v1';
app.use('/api/feedbacks', feedbackController);
app.use('/api/companies', companyController);
app.use('/api/responses', responseController);

// catch 404 and redirect to error handler
// app.use((req, res, next) => {
// 	const err = new Error('API not found');
// 	err.status = 404;
// 	next(err);
// });

// connect to mongo db
const uri = 'mongodb://localhost:27017/feedback';
mongoose.connect(uri);
const connection = mongoose.connection;
connection.on('Error connecting to mongo', console.error.bind(console));
connection.once('open', () => {
	log.info('Successfully connected to', uri);
});

const port = 3000;
app.listen(port, () => {
	log.info('Environment: ' + app.get('env'));
	log.info('Server running at http://localhost:', port);
});