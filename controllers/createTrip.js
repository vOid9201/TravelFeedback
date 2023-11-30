const Trip = require("../database/trip");

module.exports = async (req, res, next) => {
  try {
    const data = req.body;
    const trip = new Trip({
        startingLocation : data.startingLocation,
        destination : data.destination,
        price : data.price,
        rating : data.rating
    });
    await trip.save();
    res.send("Succesfully Added");
  } catch (err) {
    console.error("Error in adding a Trip", err);
    next(err);
  }
};
