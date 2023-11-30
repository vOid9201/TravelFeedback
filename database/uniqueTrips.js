const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const uniqueTripsSchema = new Schema({
    travelledId:{
        type : mongoose.SchemaTypes.ObjectId,
        ref : "traveller"
    },
    driverId:{
        type : mongoose.SchemaTypes.ObjectId,
        ref : "driver"
    },
    tripId:{
        type : mongoose.SchemaTypes.ObjectId,
        ref : "trips"
    },
    tripFeedback : {
        type : mongoose.SchemaTypes.ObjectId,
        ref : "feedback"
    },
    driverFeedback : {
        type : mongoose.SchemaTypes.ObjectId,
        ref : "feedback"
    }
});

const uniqueTripsModel = mongoose.model("uniqueTrips", uniqueTripsSchema);
module.exports = uniqueTripsModel;