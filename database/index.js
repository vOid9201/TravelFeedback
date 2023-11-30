const mongoose = require("mongoose");

const configObj = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
};


const connectToDB = async () => {
  // connect to DB and pass custom configuration
  try {
    await mongoose.connect( process.env.MONGO_URI , configObj);
  } catch (err) {
    console.log("Error in connecting to database:");
    throw err;
  }
};

module.exports = { connectToDB };
