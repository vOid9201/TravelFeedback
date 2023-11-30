//start Trips
const Driver = require("../database/driver");
const UniqueTrips = require("../database/uniqueTrips");

module.exports = async (req, res, next) => {
  //logged in user's id
  try {
    const tripId = req.query.tripId;
    const travellerId = req.user.user._id;
    console.log(travellerId);
    const availableDrivers = await Driver.find({ isAvailable: true }).exec();
    console.log(availableDrivers);
    if (availableDrivers !== null && availableDrivers.length > 0) {
      const driverId = availableDrivers[0]["_id"];
      const filter = { _id: driverId };
      const update = { isAvailable: false };
      const newUniqueTrip = new UniqueTrips({
        travelledId: travellerId,
        driverId: driverId,
        tripId: tripId,
      });
      await newUniqueTrip.save();

      await Driver.findOneAndUpdate(filter, update);

      //driver should be notified as well 
      res.send("Updated");
      // set to false
      // trip bhi create karni hain
    } else {
      res.send("No Drivers available at the moment");
    }
  } catch (err) {
    console.error("Something bad with starting trip", err);
    next(err);
  }
};
