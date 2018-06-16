'use strict';


var mongoose = require('mongoose'),
  JobOwner = mongoose.model('JobOwner');

exports.list_all_jobowners = function(req, res) {
  JobOwner.find({}, function(err, jobOwner) {
    if (err)
      res.send(err);
    res.json(jobOwner);
  });
};




exports.create_a_jobowner = function(req, res) {
  var new_jobowner = new JobOwner(req.body);
  new_jobowner.save(function(err, jobOwner) {
    if (err)
      res.send(err);
    res.json(jobOwner);
  });
};


exports.read_a_jobowner = function(req, res) {
  Task.findById(req.params.taskId, function(err, jobOwner) {
    if (err)
      res.send(err);
    res.json(jobOwner);
  });
};


exports.update_a_jobowner= function(req, res) {
  Task.findOneAndUpdate({_id: req.params.jobOwnerId}, req.body, {new: true}, function(err, task) {
    if (err)
      res.send(err);
    res.json(jobOwner);
  });
};


exports.delete_a_jobowner = function(req, res) {


  jobOwner.remove({
    _id: req.params.jobOwnerId
  }, function(err, jobOwner) {
    if (err)
      res.send(err);
    res.json({ message: 'Job Owner successfully deleted' });
  });
};
