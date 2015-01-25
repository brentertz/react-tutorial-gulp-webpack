'use strict';

module.exports = function(app) {
  var CommentsController = require('../../controllers/api/comments-controller')();

  app.get('/api/comments', CommentsController.index);
  app.post('/api/comments', CommentsController.create);
};
