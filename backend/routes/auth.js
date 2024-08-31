// backend/routes/auth.js
const express = require('express');
const router = express.Router();
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

passport.use(new LocalStrategy({ usernameField: 'username' }, async (username, password, done) => {
  try {
    const user = await User.findOne({ username });
    if (!user || !(await user.matchPassword(password))) {
      return done(null, false, { message: 'Incorrect username or password' });
    }
    return done(null, user);
  } catch (error) {
    return done(error);
  }
}));

router.post('/register', async (req, res) => {
  const { username, password } = req.body;
  const newUser = new User({ username, password });
  await newUser.save();
  res.json({ message: 'User registered successfully' });
});

router.post('/login', passport.authenticate('local', { session: false }), (req, res) => {
  const token = jwt.sign({ id: req.user._id, username: req.user.username }, 'secretkey');
  res.json({ token });
});

module.exports = router;
