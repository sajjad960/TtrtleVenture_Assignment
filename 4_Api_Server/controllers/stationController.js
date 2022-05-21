const Stations = require('../models/stationModel')
const handleFactory = require('./handleFactory')


// Station crud is here
exports.createStation = handleFactory.createOne(Stations);
exports.getAllStation = handleFactory.getAll(Stations);
exports.updateStation = handleFactory.updateOne(Stations);
exports.deleteStation = handleFactory.deleteOne(Stations);