const UniqueTrips = require("../database/uniqueTrips");

module.exports = async (req, res, next) => {
	try {
        //we are sending a driver's unique id 
        const _id = req.query._id;
        const data = await UniqueTrips.find({driverId:_id}).populate("travelledId").populate("driverFeedback");
        console.log(data);
        const num = data.length;
        console.log(data.length);
        let rating = 0;
        let newData = [];
        data.forEach(dt => {
            newData.push({
                fullName : dt.travelledId.fullName,
                feedback : dt.driverFeedback,
            })
            // rating += dt.driverFeedback.rating;
        });

        rating = rating / num;
        //rating dekhna hain 
        const body = {
            data : newData
        }
        // console.log(data , rating);
        res.send(body);
	}
	catch (err) {
		console.error("Error in fetching data for a driver ", err);
		next(err);
	}
};