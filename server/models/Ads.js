var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var adsSchema = mongoose.Schema({
    Year: String ,
    Make: {type: String, required: true},
    Model:{type: String, required: true},
    Fuel: String,
    Transmission: String

});

var Ads = mongoose.model('Ads', adsSchema);
