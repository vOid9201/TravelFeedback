const router = require("express").Router();
const auth = require("../controllers/auth");

router.post("/traveller/signin", auth.traveller_signin);
router.post("/traveller/signup", auth.traveller_signup);
router.post("/driver/signin", auth.driver_signin);
router.post("/driver/signup", auth.driver_signup);
router.post("/manager/signin", auth.manager_signin);
router.post("/manager/signup", auth.manager_signup);

module.exports = router;
