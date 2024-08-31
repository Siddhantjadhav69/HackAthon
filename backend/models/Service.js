// backend/models/Service.js
const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
  name: String,
  description: String,
  location: { type: { type: String }, coordinates: [Number] },
  contact: String,
});

module.exports = mongoose.model('Service', serviceSchema);
