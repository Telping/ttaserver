'use strict';

var mongoose = require('mongoose'),
  Location = mongoose.model('Location');

exports.list_all_locations = function(req, res) {
  Location.find({}, function(err, location) {
    if (err)
      res.send(err);
    res.json(location);
  });
};

exports.create_a_location = function(req, res) {
  var new_location = new Location(req.body);
  new_location.save(function(err, location) {
    if (err)
      res.send(err);
    res.json(location);
  });
};

exports.read_a_location = function(req, res) {
  Task.findById(req.params.locationId, function(err, location) {
    if (err)
      res.send(err);
    res.json(location);
  });
};

exports.update_a_location= function(req, res) {
  Task.findOneAndUpdate({_id: req.params.locationId}, req.body, {new: true}, function(err, location) {
    if (err)
      res.send(err);
    res.json(location);
  });
};

exports.delete_a_location = function(req, res) {
  Location.remove({
    _id: req.params.locationId
  }, function(err, location) {
    if (err)
      res.send(err);
    res.json({ message: 'Location successfully deleted' });
  });
};
