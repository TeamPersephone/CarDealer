var mongoose = require('mongoose') ,
    Schema = mongoose.Schema;

var makeSchema = mongoose.Schema({
    Name: String,
    Model: [String]
});

var Make = mongoose.model('Make', makeSchema);

module.exports.seedInitialMake = function () {
    Make.find({}).exec(function (err, collection) {
        if (err) {
            console.log('Cannot find makes: ' + err);
            return;
        }

        if (collection.length === 0) {


            Make.create({
                    name: 'Audi',
                    Model: ['A3' , 'A4' , 'S4' , 'S8' , 'R8' , 'Q7']
                },
                {
                    name: 'BMW',
                    Model: ['320' , '520' , 'X5' , 'Z4']
                }
                ,
                {
                    name: 'Mercedes',
                    Model: ['A170' , 'S500' , 'CLS320' , 'C230']
                }
            );

            console.log('Makes added to database...');
        }
    });
};