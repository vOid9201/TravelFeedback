const UniqueTrips = require("../database/uniqueTrips");

module.exports = async (req, res, next) => {
	try {
        //we are sending a Trip's unique id 
        const _id = req.query._id;
        const data = await UniqueTrips.find({tripId:_id}).populate("travelledId").populate("tripFeedback");

        // const num = data.length;
        // let rating = 0;
        // let newData = [];
        // data.forEach(dt => {
        //     newData.push({
        //         fullName : dt.travelledId.fullName,
        //         feedback : {
        //             question : dt.tripFeedback.questions,
        //             answer : dt.tripFeedback.answer,
        //             comments : dt.tripFeedback.comments,
        //             rating : dt.tripFeedback.rating
        //         },
        //         rating : dt.driverFeedback.rating
        //     })
        //     rating += dt.tripFeedback.rating;
        // });

        // rating = rating / num;
        // //rating dekhna hain 
        // // console.log(data , rating);
        // const body = {
        //     data : newData,
        //     rating : rating
        // }
        res.send(data);
        //rating dekhna hain 
        // res.send(data);
	}
	catch (err) {
		console.error("Error in fetching data for a Trip ", err);
		next(err);
	}
};