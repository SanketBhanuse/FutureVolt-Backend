const mongoose = require('mongoose');

const loadDataSchema = new mongoose.Schema({
    Date: String,
    Time: String,
    Weekday: String,
    Temperature: Number,
    Condition: String,
    Humidity: Number,
    Wind_Speed: Number,
    Holiday: Boolean,
    Event: String,
    Load: Number,
}, { collection: 'data' });  // <-- Important!

module.exports = mongoose.model('LoadData', loadDataSchema);
