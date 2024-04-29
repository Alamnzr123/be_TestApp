function errorHandler(err, req, res) {
    let status;
    let message;
    console.log(err);
    switch (err.name) {
        case 'validation error':
            status = 400;
            message = 'validation error'
            break;
        case 'FORBIDDEN':
            status = 403;
            message = 'Unauthorized';
            break;
        case 'Invalid':
            status = 401;
            message = 'Invalid email/password';
            break;
        case 'NOTFOUND':
            status = 404;
            message = 'NOTFOUND';
            break;
        default:
            status = 500;
            message = 'Internal Server Error';
            break;
    }
    res.status(status).json({ message })
}

module.exports = errorHandler