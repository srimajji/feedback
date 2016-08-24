const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const log = require('./config/logger');
const mongoose = require('mongoose');
const cors = require('cors');

const feedbackController = require('./src/controllers/feedback.controller.js');
const companyController = require('./src/controllers/company.controller.js');
const responseController = require('./src/controllers/response.controller.js');
const userController = require('./src/controllers/user.controller.js');
const authController = require('./src/controllers/auth.controller.js');
const apiController = require('./src/controllers/api.controller.js');
const app = express();

// check config values
const env = app.get('env');
const appConfig = require('./config.json')[env];
if (!appConfig) {
	log.error('Missing configuration for '+ env);
	process.exit();
}

// set up express
log.debug('Overriding Express logger');
app.set('jwtTokenSecret', appConfig.jwtTokenSecret);
app.use(morgan('combined', { 'stream': log.stream }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// set up routes
const apiVer = 'v1';
app.use('/auth', authController);
app.use('/api', apiController); // token required to use below api routes
app.use('/api/feedbacks', feedbackController);
app.use('/api/companies', companyController);
app.use('/api/responses', responseController);
app.use('/api/users', userController);
app.get('/', (req, res) => {
	res.send('Feedback server up and running');
});

// catch 404 and redirect to error handler
// app.use((req, res, next) => {
// 	const err = new Error('API not found');
// 	err.status = 404;
// 	next(err);
// });

// connect to mongo db
const uri = appConfig.mongo_uri;
mongoose.connect(uri);
const connection = mongoose.connection;
connection.on('Error connecting to mongo', console.error.bind(console));
connection.once('open', () => {
	log.info('Successfully connected to', uri);
});

const port = process.env.PORT || appConfig.port;
app.listen(port, () => {
	log.info('Environment: ' + app.get('env'));
	log.info('Server running at http://localhost:', port);
});