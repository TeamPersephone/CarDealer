var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var adsSchema = mongoose.Schema({
    Year: String ,
    Published: Date,
    Make: {type: String, required: true},
    Model:{type: String, required: true},
    FuelType: String,
    Transmission: String,
    Description:String,
    Author: { type: Schema.Types.ObjectId, ref: 'User' }
});

var Ads = mongoose.model('Ads', adsSchema);
