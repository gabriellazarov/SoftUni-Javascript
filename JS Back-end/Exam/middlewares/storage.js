const tripServices = require('../services/trip')

module.exports = () => (req, res, next) => {
    req.storage = {
        ...tripServices
    };

    next();
}