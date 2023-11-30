const Traveller = require("../database/traveller");
const UniqueTrips = require("../database/uniqueTrips");
module.exports = async (req, res, next) => {
	try {
        //we are sending a Traveller id 
        const _id = req.query._id;
        const data = await UniqueTrips.find({"travelledId" : _id}).populate("tripFeedback").populate("driverFeedback").populate("driverId").populate("tripId");

		// console.log(data);
		// const newData = [];
		// data.forEach(dt=>{
		// 	console.log(dt.tripId);
		// 	newData.push({
		// 		trip:{
		// 			starting : dt.tripId.startingLocation,
		// 			destination : dt.tripId.destination,
		// 			feedback :  {
		// 				question : dt.tripFeedback.questions,
        //             	answer : dt.tripFeedback.answer,
		// 				comments : dt.tripFeedback.comments,
        //             	rating : dt.tripFeedback.rating
		// 			}
		// 		},
		// 		driver : {
		// 			fullName : dt.driverId.fullName,
		// 			feedback : {
		// 				comments : dt.driverFeedback.comments,
		// 				rating : dt.driverFeedback.rating
		// 			}
		// 		},
		// 	})
		// })

		// // console.log(newData);
        // //send the data distinctly for category wise :D  
        res.send(data);
	}
	catch (err) {
		console.error("Error in fetching data for a Trip ", err);
		next(err);
	}
};