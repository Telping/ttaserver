'use strict';


var mongoose = require('mongoose'),
  Inbox = mongoose.model('Inbox');

exports.list_all_inbox = function(req, res) {
  Inbox.find({}, function(err, inbox) {
    if (err)
      res.send(err);
    res.json(inbox);
  });
};


exports.create_an_inbox = function(req, res) {
  var new_inbox = new Inbox(req.body);
  new_inbox.save(function(err, inbox) {
    if (err)
      res.send(err);
    res.json(inbox);
  });
};


exports.read_an_inbox = function(req, res) {
  Inbox.findById(req.params.inboxId, function(err, inbox) {
    if (err)
      res.send(err);
    res.json(inbox);
  });
};


exports.update_an_inbox = function(req, res) {
  Inbox.findOneAndUpdate({_id: req.params.inboxId}, req.body, {new: true}, function(err, inbox) {
    if (err)
      res.send(err);
    res.json(inbox);
  });
};


exports.delete_an_inbox = function(req, res) {
  Inbox.remove({
    _id: req.params.inboxId
  }, function(err, inbox) {
    if (err)
      res.send(err);
    res.json({ message: 'Inbox successfully deleted' });
  });
};
