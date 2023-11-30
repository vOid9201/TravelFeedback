const UniqueTrips = require("../database/uniqueTrips");
const Feedback = require("../database/feedback");
module.exports = async (req, res, next) => {
  try {
    const data = await Feedback.find({ category: "trip" }).populate("travellerId");
    console.log(data);
    const newData = [];
    data.forEach(dt=>{
			// console.log(dt.tripId);
			newData.push({
        feedback : {
          questions : dt.questions,
          answer : dt.answer,
          comments : dt.comments,
          rating : dt.rating
        }
			})
		})
    res.send(newData);
  } catch (err) {
    console.log("", err);
    next(err);
  }
};
