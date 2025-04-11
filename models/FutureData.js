const mongoose = require('mongoose');

const futureDataSchema = new mongoose.Schema({
    Date: String,
    Time: String,
    Weekday: String,
    Temperature: Number,
    Condition: String,
    Humidity: Number,
    Wind_Speed: Number,
    Holiday: Boolean,
    Event: String,
    Load: Number,  // Keeping the exact same field name as original
}, { collection: 'FutureData' });  // Only changing the collection name

module.exports = mongoose.model('FutureData', futureDataSchema);