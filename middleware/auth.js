const jwt = require('jsonwebtoken');
const dotenv = require('dotenv')
dotenv.config()
const secret = process.env.JWT_SECRET;

function generateToken(object) {
    const access_token = jwt.sign(object, secret);
    return access_token
}

function verifyToken(req, res, next) {
    const { access_token } = req.headers
    if (access_token) {
        jwt.verify(access_token, secret, (err, user) => {
            if (err) {
                err.name = 'FORBIDDEN';
                return next(err)
            }
            req.user = { id: user.id };
            next();
        })
    } else {
        next({ name: "Invalid" })
    }
}

module.exports = { verifyToken, generateToken }