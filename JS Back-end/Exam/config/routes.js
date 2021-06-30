const homeController = require('../controllers/homeController');
const authController = require('../controllers/authController');
const tripController = require('../controllers/tripController');


module.exports = (app) => {
    app.use('/user', authController);
    app.use('/trip', tripController);

    app.use('/', homeController);
};