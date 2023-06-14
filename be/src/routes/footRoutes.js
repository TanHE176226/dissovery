const express = require('express');
const router = express.Router();

const foodController = require('../controllers/foodController');

// Route to get food by ID
router.get('/:id', foodController.getFoodById);

module.exports = router;