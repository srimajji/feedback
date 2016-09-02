const express = require('express');
const log = require('winston');
const router = express.Router();

const User = require('../models/user.model.js');

router.route('/')
	.get((req, res) => {
		User.find((err, users) => {
			if (err) {
				log.error(err);
				res.send(500);
			} else {
				res.json(users);
			}
		});
	});

router.route('/setup')
	.get((req, res) => {
		const sri = new User({
			name: 'Sri Majji',
			username: 'srimajji',
			password: 'password',
			admin: true
		});

		//save sample user
		sri.save((err) => {
			if (err) {
				throw err;
			}

			log.info('User saved successfully');
			res.json({ success: true });
		});
	});

module.exports = router;