const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();

router.use((req, res, next) => {
    const app = req.app;
    const token = req.body.token || req.query.token || req.headers['x-access-token'];

    if(token) {
        jwt.verify(token, app.get('jwtTokenSecret'), (err, decoded) => {
            if(err) {
                return res.status(401).json({ success: false, message: 'Token expired', expiredAt: err.expiredAt });
            } else {
                req.decoded = decoded;
                next();
            }
        });
    } else {
        return res.status(403).send({ success: false, message: 'No token provided' });
    }
});

module.exports = router;