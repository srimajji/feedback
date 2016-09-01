const express = require('express');
const jwt = require('jsonwebtoken');
const log = require('winston');

const router = express.Router();

const User = require('../models/user.model.js');

const jwtTokenExpiration = 60 * 24;

function generateJwtToken (payload, secret) {
    return jwt.sign(payload, secret, { expiresIn: jwtTokenExpiration });
}

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
                log.info('User logged in ', user.name);
                const tokenPayload = {
                    userId: user._id,
                    name: user.name,
                    username: user.username,
                    useragent: req.get('User-Agent'),
                    admin: user.admin || false
                }
                const token = generateJwtToken(tokenPayload, req.app.get('jwtTokenSecret'));
                // return information
                res.json({
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
                log.info('User saved successfully ', user.username);
                const tokenPayload = {
                    userId: user._id,
                    name: user.name,
                    username: user.username,
                    useragent: req.get('User-Agent'),
                    admin: user.admin || false
                }
                const token = generateJwtToken(tokenPayload, req.app.get('jwtTokenSecret'));
                res.json({
                    token: token
                });
            }
        });
    });

module.exports = router;