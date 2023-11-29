const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const Schema = mongoose.Schema;

const TravellerSchema = new Schema({
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

  // email to contact(generally personal Email)
  email: {
    type: String,
    unique: true,
  },

  password: {
    type: String,
    required: true,
  },
});

TravellerSchema.methods.isValidPassword = async function (password) {
  const user = this;
  const compare = await bcrypt.compare(password, user.password);

  return compare;
};

// create student model
const travellerModel = mongoose.model("traveller", TravellerSchema);
module.exports = travellerModel;
