const express = require('express');
const router = express.Router();

const foodController = require('../controllers/foodController');

// Route to get food by ID
router.get('/all',foodController.getAllFood);
router.get('/:id',foodController.getFoodById);
router.get('/SearchById/:id',foodController.searchByName);


module.exports = router;