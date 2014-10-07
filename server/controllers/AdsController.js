var Ads = require('mongoose').model('Ads');
var Make = require('mongoose').model('Make');

module.exports = {
   createAds: function(req, res, next){
       var ads = new Ads();
       ads.Year = req.body.year;
       ads.Fuel = req.body.fuel;
       ads.Transmission  = req.body.transmission;
       ads.Make = req.body.make;
       ads.Model = req.body.model;

       ads.save(function(err, item) {
           if (err) {
               res.status(404).send('Failed to create new item: ' + err);
               return;
           }
               res.send(ads);



       });
   }

}