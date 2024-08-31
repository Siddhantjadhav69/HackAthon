// backend/routes/services.js
const express = require('express');
const router = express.Router();
const Service = require('../models/Service');
const auth = require('../middleware/auth');

router.get('/', async (req, res) => {
  const services = await Service.find();
  res.json(services);
});

router.post('/', auth, async (req, res) => {
  const newService = new Service(req.body);
  await newService.save();
  res.json(newService);
});

module.exports = router;
