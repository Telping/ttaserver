'use strict';
module.exports = function(app) {
  var locationList = require('../controllers/locationController');

  // todoList Routes
  app.route('/locations')
    .get(locationList.list_all_locations)
    .post(locationList.create_a_location);


  app.route('/job/:locationId')
    .get(locationList.read_a_location)
    .put(locationList.update_a_location)
    .delete(locationList.delete_a_location);
};
