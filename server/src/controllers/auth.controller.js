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
                delete user.password;
                console.log('User logged in ', user);
                const token = jwt.sign(user, req.app.get('jwtTokenSecret'), {
                    expiresIn: 60 * 24 // expires in 24 hours
                });

                // return information
                res.json({
                    id: user._id,
                    createdAt: new Date(),
                    expiresIn: 600 * 24,
                    name: user.name,
                    username: user.username,
                    token: token
                });
            }
        });
    });

router.route('/signup')
    .post((req, res) => {
        const user = new User({
            email: req.body.email,
            username: req.body.username,
            password: req.body.password
        });
        user.save((err) => {
            if(err) {
                log.error(err);
                res.status(400).json({ error: 'User already exists' });
            } else {
                delete user.password;
                log.info('User saved successfully ', user.username);
                const token = jwt.sign(user, req.app.get('jwtTokenSecret'), {
                        expiresIn: 60 * 24 // expires in 24 hours
                    });
                res.json({
                        id: user._id,
                        expiresIn: 60 * 24,
                        name: user.name,
                        username: user.username,
                        token: token
                });
            }
        });
    });

module.exports = router;