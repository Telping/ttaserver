'use strict';
module.exports = function(app) {
  var jobOwnerList = require('../controllers/jobOwnerController');

  // todoList Routes
  app.route('/jobowners')
    .get(jobOwnerList.list_all_jobowners)
    .post(jobOwnerList.create_a_jobowner);


  app.route('/jobowners/:jobOwnerId')
    .get(jobOwnerList.read_a_jobowner)
    .put(jobOwnerList.update_a_jobowner)
    .delete(jobOwnerList.delete_a_jobowner);
};
