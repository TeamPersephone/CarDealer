var Ads = require('mongoose').model('Ads');
var Make = require('mongoose').model('Make');
var User = require('mongoose').model('User');

module.exports = {
    createAds: function (req, res, next) {
        console.log(req.body);
        var ads = new Ads(req.body);
        ads.save(function (err, item) {
            if (err) {
                res.status(404).send('Failed to create new item: ' + err);
                return;
            }
            res.send(ads);
        });
    },
    getAll:function(req ,res , next){
        Ads.find({}).populate({
            path: 'user',
            select: 'username _id'
        }).exec(function(err , respone){
            if (err) {
                res.status(400).send(err);
                return;
            }
            res.send(respone);
        })
    },
    getByUserId:function(req,res,next){
        Ads.find({user: req.params.id}).populate({
            path: 'user',
            select: 'username _id'
        }).exec(function(err , respone){
            if (err) {
                res.status(400).send("Invalid User Id");
                return;
            }
            res.send(respone);
        })
    }

}