const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const Schema = mongoose.Schema;

const ManagerSchema = new Schema({
  fullName: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
//   role : {
//     type : String,
//     default : "",
//   },
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
});

ManagerSchema.methods.isValidPassword = async function (password) {
  const user = this;
  const compare = await bcrypt.compare(password, user.password);

  return compare;
};

// create student model
const managerModel = mongoose.model("manager", ManagerSchema);
module.exports = managerModel;
