const mongoose = require('mongoose');
const baseModel = require('../models/baseModel');

const stationSchema = new mongoose.Schema({
    ...baseModel,
    stationName: {
        type: String,
        required: true,
    },
    stationChannel: {
        type: String,
    },
    Image: {
        type: String,
        default: 'default.jpg'
    }
})

// created unique index for stationName and StationChannel. 
stationSchema.index({ stationName: 1, stationChannel: 1 }, { unique: true })

const Stations = mongoose.model('Stations', stationSchema)

// //test Station
// const testStation = new Stations({
//   stationName: "Sajjad",
//   stationChannel: "77,8",
// });

// testStation.save().then((doc) => console.log(doc));

module.exports = Stations;