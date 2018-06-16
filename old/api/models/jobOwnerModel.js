'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var JobOwnerSchema = new Schema({
  Organization: {
    type: String,
    required: 'Organization is required'
  },
  contactFirstName: {
    type: String,
    required: 'First name is required'
  },
  contactLastName: {
    type: String,
    required: 'Last name is required'
  },
  contactRole: {
    type: String,
    required: 'Last name is required'
  },
  email: {
    type: String,
    required: 'Email is required'
  },
  contactNumber: {
    type: Number,
    required: 'Contact number is definitely required. How are we supposed to contact you?'
  },
  about: {
    type: String
  },
  createdDate: {
    type: Date,
    default: Date.now
  },
  starRating: {
    type: Number
  }
});

module.exports = mongoose.model('JobOwner', JobOwnerSchema);
