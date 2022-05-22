const express = require('express');

// controller
const stationController = require('../controllers/stationController');

const router = express.Router();

//Station crud
router.get('/', stationController.getAllStation);
router.post('/', stationController.createStation);
router.patch('/:id', stationController.updateStation);
router.delete('/:id', stationController.deleteStation);



module.exports = router;
