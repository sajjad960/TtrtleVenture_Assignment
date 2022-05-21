const express = require('express');

// controller
const stationController = require('../controllers/stationController');

const router = express.Router();

router.get('/', stationController.getAllStation);
router.post('/', stationController.createStation);
router.patch('/', stationController.updateStation);
router.delete('/', stationController.deleteStation);



module.exports = router;
