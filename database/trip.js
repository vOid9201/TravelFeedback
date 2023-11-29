const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TripsSchema = new Schema({
    startingLocation : {
        type : String,
        required : true,
    },
    destination : {
        type : String,
        required : true,
    },
    uniqueId : {

    },
    feedbacks :[{
        type : mongoose.SchemaTypes.ObjectId,
        ref: "feedback",
    }],
    price : {
        type:Number,
        required : true,
    },
    rating:{
        type:Number,
        required : true,
    }
});

const tripsModel = mongoose.model("trips", TripsSchema);
module.exports = tripsModel;