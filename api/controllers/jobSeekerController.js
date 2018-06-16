'use strict';

var mongoose = require('mongoose'),
  JobSeeker = mongoose.model('JobSeeker');

exports.list_all_jobseekers = function(req, res) {
  JobSeeker.find({}, function(err, jobSeeker) {
    if (err)
      res.send(err);
    res.json(jobSeeker);
  });
};

exports.create_a_jobseeker = function(req, res) {
  var new_jobseeker = new JobSeeker(req.body);
  new_jobseeker.save(function(err, jobSeeker) {
    if (err)
      res.send(err);
    res.json(jobSeeker);
  });
};

exports.read_a_jobseeker = function(req, res) {
  JobSeeker.findById(req.params.taskId, function(err, jobSeeker) {
    if (err)
      res.send(err);
    res.json(jobSeeker);
  });
};


exports.update_a_jobseeker= function(req, res) {
  JobSeeker.findOneAndUpdate({_id: req.params.jobSeekerId}, req.body, {new: true}, function(err, jobSeeker) {
    if (err)
      res.send(err);
    res.json(jobSeeker);
  });
};


exports.delete_a_jobseeker = function(req, res) {


  JobSeeker.remove({
    _id: req.params.jobSeekerId
  }, function(err, jobSeeker) {
    if (err)
      res.send(err);
    res.json({ message: 'Job Seeker successfully deleted' });
  });
};
