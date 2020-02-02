const express = require('express');
const discoveriesController = require('../controllers/discoveries');

const router = express.Router();

router
  .route('/')
  .get(discoveriesController.get)
  .post(discoveriesController.create);

router
  .route('/:id')
  .get(discoveriesController.getById)
  .put(discoveriesController.update)
  .delete(discoveriesController.delete);

module.exports = router;
