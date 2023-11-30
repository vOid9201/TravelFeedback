module.exports = {
  auth: require("./auth"),
  addTrip : require("../controllers/createTrip"),
  startTrip : require("../controllers/startTrip"),
  endTrip : require("../controllers/endTrip"),
  feedbackForDriver : require("../controllers/feedbackSubmitDriver"),
  feedbackForTrip : require("../controllers/feedbackSubmitTrip"),
  overallFeedbackDriver : require("../controllers/overallFeedbackForADriver"),
  overallFeedbackTrip : require("../controllers/overallFeedbackForSpecificTrip"),
  allFeedbackByTraveller : require("../controllers/allFeedbackIndividualTraveller"),
  allFeedbackOfTrips : require("../controllers/allFeedbackAllTrip")
};
