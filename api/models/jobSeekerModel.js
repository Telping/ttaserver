'use strict';
var mongoose = require('mongoose');
var bcrypt = require('bcrypt');
var Schema = mongoose.Schema;


var JobSeekerSchema = new Schema({
  firstName: {
    type: String,
    required: 'First name is required'
  },
  lastName: {
    type: String,
    required: 'Last name is required'
  },
  email: {
    type: String,
    required: 'Email is required'
  },
  password: {
    type: String,
    password: 'Password is required'
  },
  contactNumber: {
    type: Number,
    required: 'Contact number is definitely required. How are we supposed to contact you?'
  },
  addressLine1: {
    type: String,
    required: 'Address line 1 is required'
  },
  addressLine2: {
    type: String
  },
  postcode: {
    type: String,
    required: 'Postcode is definitely required'
  },
  createdDate: {
    type: Date,
    default: Date.now
  },
  halfDayRate: {
    type: Number
  },
  fullDayRate: {
    type: Number
  },
  hourlyRate: {
    type: Number
  },
  starRating: {
    type: Number
  },
  drivingLicense: {
    type: Boolean,
    required: 'Are you licensed to drive?',
    default: true
  },
  userType: {
    type: [{
      type: String,
      enum: ['employer', 'tradesman']
    }],
    default: ['tradesman']
  }
});

JobSeekerSchema.pre('save', function (next) {
  var jobseeker = this;
  bcrypt.hash(jobseeker.password, 10, function (err, hash){
    if (err) {
      return next(err);
    }
    jobseeker.password = hash;
    next();
  })
});

module.exports = mongoose.model('JobSeeker', JobSeekerSchema);
