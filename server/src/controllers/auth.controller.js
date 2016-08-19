const express = require('express');
const jwt = require('jsonwebtoken');
const log = require('winston');

const router = express.Router();

const User = require('../models/user.model.js');

router.route('/')
    .post((req, res) => {
        const username = req.body.username;
        const password = req.body.password;
        User.findOne(
            {
                username: username
            }, (err, user) => {
            
            if(err) {
                log.error(err);
                res.status(400).json({ message: 'Not a valid id' });
            }

            if(!user) {
                res.status(400).json({ message: 'User not found' });
            } else if (user.password !== password) {
                res.status(400).json({ message: 'Authention failed. Wrong password' });
            } else {
                const token = jwt.sign(user, req.app.get('jwtTokenSecret'), {
                    expiresIn: 60 * 24 // expires in 24 hours
                });

                // return information
                res.json({
                    success: true,
                    message: 'This token will expires in 24 hours',
                    id: user._id,
                    name: user.name,
                    username: user.username,
                    jwtToken: token
                });
            }
        });
    });

module.exports = router;