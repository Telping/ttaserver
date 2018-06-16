'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var LocationSchema = new Schema({
  name: {
    type: String
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
  county: {
    type: String
  },
  XCoordinate: {
    type: String
  },
  YCoordinate: {
    type: String
  }
});

module.exports = mongoose.model('Location', LocationSchema);
