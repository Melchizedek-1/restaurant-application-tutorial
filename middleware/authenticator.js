const jwt = require('jsonwebtoken');
const { jwtSecret } = require('../config/keys');

exports.authenticateJWT = (req, res, next) => {
    const token = req.cookies.token;
    
    if (!token) {
        return res.status(401).json({
            errorMessage: 'No token. Authoriation denied',
        });
    }

    try {
        const decoded = jwt.verify(token, jwtSecret);
        req.user = decoded.user;
    } catch (err) {
        console.log('jwt error: ', err);
        res.status(401).json({
            errorMessage: 'Invalid token',
        });
    }

};