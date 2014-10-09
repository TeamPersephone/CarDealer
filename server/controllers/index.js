var usersController = require('../controllers/UsersController'),
    AdsController = require('../controllers/AdsController'),
    MakeController = require('../controllers/MakeController');

module.exports = {
    users: usersController,
    ads: AdsController,
    make: MakeController
};