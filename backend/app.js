// backend/app.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./config');
const eventsRouter = require('./routes/events');
const servicesRouter = require('./routes/services');
const authRouter = require('./routes/auth');
const passport = require('passport');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(passport.initialize());

app.use('/events', eventsRouter);
app.use('/services', servicesRouter);
app.use('/auth', authRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
