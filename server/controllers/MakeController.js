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
    }
}