const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const Schema = mongoose.Schema;

const FeedbackSchema = new Schema({
        travellerId:{
            type : mongoose.SchemaTypes.ObjectId,
            ref : "traveller"
        },
        category:{
            type : String,
            enum:["driver" , "trip"],
            default : "driver",
            required : true,
        },
        questions : {
            type : String,
            required : false,
            default : "",
        },
        answer :{
            type : String,
            required : false,
            default : "",
        },
        comments: {
            type : String,
            required : false,
        },
        rating : {
            type : Number,
            required : true,
            default : 0
        }
    });

const feedbackModel = mongoose.model("feedback", FeedbackSchema);
module.exports = feedbackModel;
