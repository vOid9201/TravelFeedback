const mongoose = require("mongoose");

const configObj = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
};


const connectToDB = async () => {
  // connect to DB and pass custom configuration
  try {
    await mongoose.connect( "mongodb+srv://sarthak2e2974f:sarthak9201@user-management.epdzkbr.mongodb.net/?retryWrites=true&w=majority", configObj);
  } catch (err) {
    console.log("Error in connecting to database:");
    throw err;
  }
};

module.exports = { connectToDB };
