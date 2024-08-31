// backend/models/Event.js
const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  name: String,
  description: String,
  location: { type: { type: String }, coordinates: [Number] },
  date: Date,
  organizer: String,
});

module.exports = mongoose.model('Event', eventSchema);
