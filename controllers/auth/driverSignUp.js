const Driver = require("../../database/driver");
const hashPassword = require("../../utils/hashPassword");

const driverSignUp = async (req, res, next) => {
	try {
        
        const drivers = req.body;
		console.log(req.body);
		drivers.password = await hashPassword(drivers.password);

		const newDriver = new Driver(req.body);
		await newDriver.save();
		res.send(newDriver)
	}
	catch (err) {
		next(err)
	}
}

module.exports = driverSignUp;