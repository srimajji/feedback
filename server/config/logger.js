const winston = require('winston');

winston.emitErrs = true;

var log = new winston.Logger({
	transports: [
		new winston.transports.Console({
			level: 'info',
			handleExceptions: true,
			json: false,
			colorize: true,
			timestamp: function () {
				return (new Date()).toISOString();
			},
			formatter: function (options) {
				// Return string will be passed to logger.
				return options.timestamp() + ' ' + options.level.toUpperCase() + ' ' + (undefined !== options.message ? options.message : '') +
					(options.meta && Object.keys(options.meta).length ? '\n\t' + JSON.stringify(options.meta) : '');
			}
		})
	],
	exitOnError: false
});

module.exports = log;
module.exports.stream = {
	write: function (message, encoding) {
		log.info(message);
	}
};
