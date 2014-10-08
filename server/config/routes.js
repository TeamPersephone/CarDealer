var auth = require('./auth'),
    controllers = require('../controllers');

module.exports = function(app) {
    app.get('/api/users', auth.isInRole('admin'), controllers.users.getAllUsers);
    app.post('/api/users', controllers.users.createUser);
    app.put('/api/users', auth.isAuthenticated, controllers.users.updateUser);

    app.get('/partials/:partialArea/:partialName', function(req, res) {
        res.render('../../public/templates/' + req.params.partialArea + '/' + req.params.partialName)
    });

    app.post('/api/login', auth.login);
    app.post('/api/logout', auth.logout);
    app.post('/api/ads' ,auth.isAuthenticated, controllers.ads.createAds);
    app.get('/api/ads' , controllers.ads.getAll);
    app.get('/api/ads/byuser/:id' , controllers.ads.getByUserId);
    app.get('/api/*', function(req, res) {
        res.status(404);
        res.end();
    });

    app.get('*', function(req, res) {
        res.render('index', {currentUser: req.user});
    });
};