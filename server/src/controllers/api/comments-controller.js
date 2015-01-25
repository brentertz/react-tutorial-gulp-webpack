'use strict';

module.exports = function(app) {
  var comments = [
    { author: 'Brent Ertz', text: 'I like your __moves__!' },
    { author: 'Lea Ertz', text: 'I like your *style*!' }
  ];

  var CommentsController = {
    index: function(req, res, next) {
      res.status(200).json(comments);
    },

    create: function(req, res, next) {
      comments.push(req.body);
      res.status(201).json(comments);
    }
  };

  return CommentsController;
};
