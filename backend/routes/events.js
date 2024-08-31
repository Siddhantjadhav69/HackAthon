// backend/routes/events.js
const express = require('express');
const router = express.Router();
const Event = require('../models/Event');
const auth = require('../middleware/auth');

router.get('/', async (req, res) => {
  const events = await Event.find();
  res.json(events);
});

router.post('/', auth, async (req, res) => {
  const newEvent = new Event(req.body);
  await newEvent.save();
  res.json(newEvent);
});

module.exports = router;
