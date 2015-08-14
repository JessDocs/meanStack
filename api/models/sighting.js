var mongoose = require('mongoose');

var sightingSchema = new mongoose.Schema({
    name: {type: String, lowercase: true, require: true},
    order: {type: String, lowercase: true, maxlength: 20},
    status: {
        type: String,
        lowercase: true, 
        enum: [
            'extinct',
            'extinct in the wild',
            'endangered',
            'vulneragle',
            'conservation dependent',
            'least concern',
            'near threatened'
        ]
    }
});

module.exports = mongoose.model('Sighting', sightingSchema)