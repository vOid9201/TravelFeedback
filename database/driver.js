const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const Schema = mongoose.Schema;

const DriverSchema = new Schema({
  fullName: {
    type: String,
    required: true,
  },

  gender: {
    type: String,
    required: true,
  },

  contactNo: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
  },

  password: {
    type: String,
    required: true,
  },

  //checker of availability
  isAvailable : {
    type : Boolean,
    required : true,
    default: true,
  },

  numberOfTrips : {
    type : Number,
    required : true,
    default: 0,
  },
  averageRating : { 
    type : Number,
    required : true,
    default : 0,
  },
  feedbacks : [{
    type : mongoose.SchemaTypes.ObjectId,
    ref: "feedback",
  }]
});


 DriverSchema.methods.isValidPassword = async function (password) {
  const user = this;
  const compare = await bcrypt.compare(password, user.password);

  return compare;
};

// create student model
const driverModel = mongoose.model("driver", DriverSchema);
module.exports = driverModel;
