const Manager = require("../../database/manager");
const hashPassword = require("../../utils/hashPassword");

const managerSignUp = async (req, res, next) => {
	try {
        
        const manager = req.body;
		manager.password = await hashPassword(manager.password);

		const newManager = new Manager(req.body);
		await newManager.save();
		res.send(newManager);
	}
	catch (err) {
		next(err)
	}
}

module.exports = managerSignUp;