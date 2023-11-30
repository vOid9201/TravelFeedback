const Driver = require("../database/driver");
const Traveller = require("../database/traveller");
const UniqueTrips = require("../database/uniqueTrips");
module.exports = async (req, res, next) => {
  //Driver Id to be updated
  // uniqueTripId received
  try {
    console.log(req);
    const uniqueTripId  = req.query.uniqueTripId;
    const {driverId} = await UniqueTrips.findById(uniqueTripId);
    // console.log(_id);
    const filter = { _id: driverId };
    const update = { isAvailable: true };
    const { travelledId } = await UniqueTrips.findById(uniqueTripId);
    await Driver.findOneAndUpdate(filter, update);
    let {notification} = await Traveller.findById(travelledId);
    // console.log(data);
    console.log(notification);
    notification.push({
      tripId: uniqueTripId,
      isReaded: false,
    });
    console.log(notification);
    const filter2 = { _id: travelledId };
    const update2 = { $set : {
      notification : notification
    } };
    await Traveller.updateOne(filter2,update2);
    res.send("Trip Ended");
  } catch (err) {
    console.error("Error in ending the trip", err);
  }
  //pushing feedback to the particular traveller
};
