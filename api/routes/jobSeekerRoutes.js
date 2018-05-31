'use strict';
module.exports = function(app) {
  var jobSeekerList = require('../controllers/jobSeekerController');

  // todoList Routes
  app.route('/jobseekers')
    .get(jobSeekerList.list_all_jobseekers)
    .post(jobSeekerList.create_a_jobseeker);


  app.route('/jobseekers/:jobSeekerId')
    .get(jobSeekerList.read_a_jobseeker)
    .put(jobSeekerList.update_a_jobseeker)
    .delete(jobSeekerList.delete_a_jobseeker);
};
