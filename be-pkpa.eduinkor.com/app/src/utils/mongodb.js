require('dotenv').config(); // this is important!

const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI);

const mongoDB = mongoose.connection;
mongoDB.on('error', console.error.bind(console, 'connection error: '));
mongoDB.once('open', () => {
  console.log('MongoDB Connected successfully');
});

// global.cache = mongoDB;
module.exports = mongoDB;
