const jwt = require('jsonwebtoken');
require('dotenv').config();

function isAuthenticated(req, res, next) {
    // Check for the presence of an authorization header
    const authHeader = req.headers.authorization;
    if (!authHeader) {
        return res.status(401).json({ message: 'Unauthorized - No token provided' });
    }

    // Extract the token from the header
    const token = authHeader.split(' ')[1];

    // Check if token exists after splitting
    if (!token) {
        return res.status(401).json({ message: 'Unauthorized - Invalid token format' });
    }

    try {
        // Verify the token using the JWT library and the secret key
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decodedToken;
        next();
    } catch (err) {
        console.error('JWT verification error:', err.message);
        return res.status(401).json({ message: 'Unauthorized - Invalid token' });
    }
}

module.exports = isAuthenticated;