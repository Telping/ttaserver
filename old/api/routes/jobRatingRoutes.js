'use strict';
module.exports = function(app) {
  var jobRatingList = require('../controllers/jobRatingController');

  // todoList Routes
  app.route('/jobratings')
    .get(jobRatingList.list_all_jobratings)
    .post(jobRatingList.create_a_jobrating);


  app.route('/jobratings/:jobRatingId')
    .get(jobRatingList.read_a_jobrating)
    .put(jobRatingList.update_a_jobrating)
    .delete(jobRatingList.delete_a_jobrating);
};
