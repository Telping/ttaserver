'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var inboxSchema = new Schema({
  hasMessages: {
    type: Boolean,
    default: false
  },
  Created_date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Inbox', inboxSchema);
