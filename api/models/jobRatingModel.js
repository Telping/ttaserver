'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var jobRatingSchema = new Schema({
  feedback: {
    type: String,
    required: 'Kindly enter some feedback'
  },
  starRating: {
    type: Number,
    required: 'Kindly enter a star rating'
  }
});

module.exports = mongoose.model('JobRatings', jobRatingSchema);
