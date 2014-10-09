var Make = require('mongoose').model('Make');

module.exports = {
    getAllMakes:function(req, res, next){
        Make.find({}).exec(function (err, respone) {
            if (err) {
                res.status(400).send(err);
                return;
            }
            res.send(respone);
        });
    },
    addMake:function(req, res, next){
        Make.create({name: req.body.name , model: [req.body.model]}, function   (err, data) {
            if (err) {
                res.status(400).send(err);
                return;
            }
            res.status(200).end();
        });
    },
    addModel:function(req, res, next){
        console.log(req.body.name)
        Make.update({name: req.body.name },
            {$push: { 'model' : req.body.model }},{upsert:true}, function(err, data) {
                if (err) {
                    res.status(400).send(err);
                    return;
                }
                console.log(data);
                res.status(200).end();
            });
    }
}