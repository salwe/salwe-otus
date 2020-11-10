const jwt = require('jsonwebtoken');
const config = require('config');

module.exports = function(req, res, next) {
    const token = req.headers['x-access-token'] || req.headers['authorization'];
    if (!token) return res.status(401).send('Access denied. No token provided');

    try {
        req.user = jwt.verify(token, config.get('privatekey'));
        next();
    } catch (err) {
        res.status(400).send('Invalid token');
    }
};