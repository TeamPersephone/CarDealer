var Ads = require('mongoose').model('Ads');
var Make = require('mongoose').model('Make');

module.exports = {
    createAds: function (req, res, next) {
        var ads = new Ads();
        ads.Year = req.body.year;
        ads.Fuel = req.body.fuel;
        ads.Transmission = req.body.transmission;
        ads.Make = req.body.make;
        ads.Model = req.body.model;
        ads.Description = req.body.description;
        ads.Author = req.body.authorId;

        ads.save(function (err, item) {
            if (err) {
                res.status(404).send('Failed to create new item: ' + err);
                return;
            }
            res.send(ads);
        });
    },
    getAll:function(req ,res , next){
        Ads.find({}).exec(function(err , respone){
            if (err) {
                res.status(400).send(err);
                return;
            }
            res.send(respone);
        })
    }

}