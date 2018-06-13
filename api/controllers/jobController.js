'use strict';


var mongoose = require('mongoose'),
  Job = mongoose.model('Jobs');

exports.list_all_jobs = function(req, res) {
  Job.find({}, function(err, job) {
    if (err)
      res.send(err);
    res.json(job);
  });
};

exports.create_a_job = function(req, res) {
  var new_job = new Job(req.body);
  new_job.save(function(err, job) {
    if (err)
      res.send(err);
    res.json(job);
  });
};

exports.read_a_job = function(req, res) {
  Job.findById(req.params.jobId, function(err, job) {
    if (err)
      res.send(err);
    res.json(job);
  });
};

exports.update_a_job = function(req, res) {
  Job.findOneAndUpdate({_id: req.params.jobId}, req.body, {new: true}, function(err, job) {
    if (err)
      res.send(err);
    res.json(job);
  });
};

exports.delete_a_job = function(req, res) {
  Job.remove({
    _id: req.params.jobId
  }, function(err, job) {
    if (err)
      res.send(err);
    res.json({ message: 'Job successfully deleted' });
  });
};
