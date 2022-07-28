
let mongoose = require('mongoose');

// Create a model class
let concertModel = mongoose.Schema(
    {
        item: String,
        qty: Number,
        tags: [],
        status: String,
        size: {
            h: Number,
            w: Number,
            uom: String
        }
    },
    {
        collection: "concert"
    }
);

module.exports = mongoose.model('Concert', concertModel);