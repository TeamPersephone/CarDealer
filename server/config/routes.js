var auth = require('./auth'),
    controllers = require('../controllers'),
    path = require('path');

module.exports = function (app) {
    app.post('/api/users', controllers.users.createUser);

    app.get('/partials/:partialArea/:partialName', function (req, res) {
        res.render('../../public/templates/' + req.params.partialArea + '/' + req.params.partialName)
    });

    app.post('/api/login', auth.login);
    app.post('/api/logout', auth.logout);
    app.post('/api/ads', auth.isAuthenticated, controllers.ads.createAds);
    app.get('/api/ads', controllers.ads.getAll);
    app.get('/api/makes', controllers.make.getAllMakes);
    app.post('/api/makes/addmake', auth.isInRole('admin'), controllers.make.addMake);
    app.post('/api/makes/addmodel', auth.isInRole('admin'), controllers.make.addModel);
    app.get('/api/ads/:id', controllers.ads.getByAdId);
    app.get('/api/search', controllers.ads.search);
    app.put('/api/remove/:id',auth.isInRole('admin'), controllers.ads.remove);
    app.get('/api/ads/byuser/:id', controllers.ads.getByUserId);
    app.get('/picture/:pictureName', function (req, res) {
        res.sendFile(path.resolve('public/pictures/' + req.params.pictureName));
    });
    app.get('/api/*', function (req, res) {
        res.status(404);
        res.end();
    });

    app.get('*', function(req, res) {
        res.render('index', {currentUser: req.user});
    });
};