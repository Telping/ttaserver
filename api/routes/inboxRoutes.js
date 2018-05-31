'use strict';
module.exports = function(app) {
  var inboxList = require('../controllers/inboxController');

  // todoList Routes
  app.route('/inbox')
    .get(inboxList.list_all_inbox)
    .post(inboxList.create_an_inbox);


  app.route('/inbox/:inboxId')
    .get(inboxList.read_an_inbox)
    .put(inboxList.update_an_inbox)
    .delete(inboxList.delete_an_inbox);
};
