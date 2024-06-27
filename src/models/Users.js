// models/User.js

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  surname: String,
  email: String,
  dob: String, // or Date type if storing dates directly in MongoDB
  username: {
    type: String,
    unique: true,
  },
  password: String,
});

const User = mongoose.model('User', userSchema);

module.exports = User;
