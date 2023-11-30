const Feedback = require("../database/feedback");
const UniqueTrips = require("../database/uniqueTrips");

module.exports = async (req, res, next) => {
  //feedback
  try {
    const body = req.body;
    //unique_travel
    const _id = req.query._id;
    const {tripId} = await UniqueTrips.findById(_id)
    //user_id
    const travellerId = req.user.user_id;

    const feedback = new Feedback({
      travellerId: travellerId,
      tripId : tripId,
      category: "trip",
      questions: req.body.question,
      answer: req.body.answer,
      comments: req.body.comments,
      rating: req.body.rating,
    });

    const data = await feedback.save();
    const filter = { _id: _id };
    const update = { tripFeedback: data._id };

    await UniqueTrips.findOneAndUpdate(filter, update);
    res.send("feedback submitted successfully fir trip");
  } catch (err) {
    console.error("Error", err);
    next(err);
  }
};
