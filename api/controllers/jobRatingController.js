'use strict';


var mongoose = require('mongoose'),
  JobRating = mongoose.model('JobRatings');

exports.list_all_jobratings = function(req, res) {
  JobRating.find({}, function(err, jobRating) {
    if (err)
      res.send(err);
    res.json(jobRating);
  });
};


exports.create_a_jobrating = function(req, res) {
  var new_jobrating = new JobRating(req.body);
  new_jobrating.save(function(err, jobRating) {
    if (err)
      res.send(err);
    res.json(jobRating);
  });
};


exports.read_a_jobrating = function(req, res) {
  JobRating.findById(req.params.jobRatingId, function(err, jobRating) {
    if (err)
      res.send(err);
    res.json(jobRating);
  });
};


exports.update_a_jobrating = function(req, res) {
  JobRating.findOneAndUpdate({_id: req.params.jobRatingId}, req.body, {new: true}, function(err, jobRating) {
    if (err)
      res.send(err);
    res.json(jobRating);
  });
};


exports.delete_a_jobrating = function(req, res) {
  JobRating.remove({
    _id: req.params.jobId
  }, function(err, jobRating) {
    if (err)
      res.send(err);
    res.json({ message: 'Job Rating successfully deleted' });
  });
};
