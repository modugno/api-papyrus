const express = require('express');
const commentsController = require('../controllers/comments');

const router = express.Router();

router
  .route('/')
  .get(commentsController.get)
  .post(commentsController.create);

router
  .route('/:id')
  .get(commentsController.getById)
  .put(commentsController.update)
  .delete(commentsController.delete);

module.exports = router;
