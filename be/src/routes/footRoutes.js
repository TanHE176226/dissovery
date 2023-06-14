const express = require('express');
const router = express.Router();

const foodController = require('../controller/foodController');

// Route to get food by ID
router.get('/all',foodController.getAllFood);
router.get('/:id',foodController.getFoodById);

module.exports = router;