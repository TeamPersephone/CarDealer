var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var adsSchema = mongoose.Schema({
    year: String ,
    published: Date,
    make: {type: String, required: true},
    model:{type: String, required: true},
    fuelType: String,
    transmission: String,
    description:String,
    user: { type: Schema.Types.ObjectId, ref: 'User' }
});

var Ads = mongoose.model('Ads', adsSchema);