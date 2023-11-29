const Traveller = require("../../database/traveller");
const hashPassword = require("../../utils/hashPassword");

const travellerSignUp = async (req, res, next) => {
	try {
        
        const traveller = req.body;
		traveller.password = await hashPassword(traveller.password);

		const newTraveller = new Traveller(req.body);
		await newTraveller.save();
		res.send(newTraveller)
	}
	catch (err) {
		next(err)
	}
}

module.exports = travellerSignUp;