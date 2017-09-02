var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var uniqueValidator = require('mongoose-unique-validator');

var ProductSchema = new Schema({
    barCode: { type: String },
    description: { type: String },    
});


module.exports.Product = mongoose.model('Product', ProductSchema);
