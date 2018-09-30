'use strict';

const mongoose = require('mongoose'),
  bcrypt = require('bcrypt'),
  Schema = mongoose.Schema;

/**
 * User Schema
 */
let UserSchema = new Schema({
  fullName: {
    type: String,
    trim: true,
    required: true
  },
  email: {
    type: String,
    unique: true,
    lowercase: true,
    trim: true,
    required: true
  },
  hash_password: {
    type: String
  },
  created: {
    type: Date,
    default: Date.now
  }
});

UserSchema.methods.comparePassword = (password, hash_password) => {
  return bcrypt.compareSync(password, hash_password);
};


mongoose.model('User', UserSchema);