'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var jobSchema = new Schema({
  jobid: {
    type: String
  },
  title: {
    type: String,
    required: 'Kindly enter the title of the job'
  },
  description: {
    type: String,
    required: 'Kindly enter a description of the job'
  },
  Created_date: {
    type: Date,
    default: Date.now
  },
  status: {
    type: [{
      type: String,
      enum: ['open', 'inprogress', 'completed']
    }],
    default: ['open']
  }
});

module.exports = mongoose.model('Jobs', jobSchema);
