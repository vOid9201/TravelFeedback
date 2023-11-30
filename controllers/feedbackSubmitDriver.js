const Feedback = require("../database/feedback");
const UniqueTrips = require("../database/uniqueTrips");

module.exports = async (req, res, next) => {
  try {
    //feedback
    const body = req.body;
    //unique_travel
    const _id = req.query._id;
    //user_id
    const travellerId = req.user.user_id;

    console.log(req.body);

    const feedback = new Feedback({
      travellerId: travellerId,
      tripId : _id,
      category: "driver",
      question: "",
      answer: "",
      comments: req.body.comments,
      rating: req.body.rating,
    });

    const data = await feedback.save();
    console.log(data);
    const filter = { _id: _id };
    const update = { driverFeedback: data._id };

    await UniqueTrips.findOneAndUpdate(filter, update);
    res.send("FeedBack received");
  } catch (err) {
    console.log("Error ", err);
    next(err);
  }
};
