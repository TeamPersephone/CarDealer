var Ads = require('mongoose').model('Ads');
var Make = require('mongoose').model('Make');
var User = require('mongoose').model('User');
var util = require('util'),
    fs = require('fs');

var createAd = function createAd(req, res) {
    var fstream;
    req.pipe(req.busboy);
    var ad = {};

    req.busboy.on('file', function (fieldname, file, filename) {
        var date = new Date().getTime();
        fstream = fs.createWriteStream(__dirname + '/../../public/pictures/' + date + filename);
        file.pipe(fstream);
        ad.picture = date + filename;
    });

    req.busboy.on('field', function (fieldname, val, fieldnameTruncated, valTruncated) {
        ad[fieldname] = val;
    });

    req.busboy.on('finish', function () {
        var ads = new Ads(ad);
        ads.user = req.user._id;
        ads.save(function (err, item) {
            if (err) {
                res.status(404).send('Failed to create new item: ' + err);
                return;
            }
            res.redirect('/');
        });
    });
}

module.exports = {
    createAds: createAd,
    getAll: function (req, res, next) {
        Ads.find({}).populate({
            path: 'user',
            select: 'username _id'
        }).exec(function (err, respone) {
            if (err) {
                res.status(400).send(err);
                return;
            }
            res.send(respone);
        })
    },
    getByUserId: function (req, res, next) {
        Ads.find({user: req.params.id}).populate({
            path: 'user',
            select: 'username _id'
        }).exec(function (err, respone) {
            if (err) {
                res.status(404).send("Invalid User Id");
                return;
            }
            res.send(respone);
        })
    },
    getByAdId:function(req , res , next){
        Ads.findOne({_id : req.params.id}).populate({
            path: 'user',
            select: 'username _id'
        }).exec(function (err, respone) {
            if (err) {
                res.status(404).send("Invalid Ad Id");
                return;
            }
            res.send(respone);
        })
    }
}