const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI);

app.use('/api/auth', require('../server/routes/auth'));
app.use('/api/leads', require('../server/routes/leads'));
app.use('/api/cases', require('../server/routes/cases'));
app.use('/api/contact', require('../server/routes/contact'));

module.exports = app;