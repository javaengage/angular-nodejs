const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
    name: { type: String, required: true },
    venue: { type: String, required: true },
    time : { type: String, required: true },
    location: {
        type: { type: String },
        coordinates: [Number]
    },
    user_id : {type : mongoose.Schema.Types.ObjectId, required : true}
}, { timestamps: true });

eventSchema.index({ "location": "2dsphere" });


const Event = mongoose.model('Event', eventSchema);

module.exports = Event;