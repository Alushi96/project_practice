const router = require("express").Router();
const UserController = require("../../controllers/UserController");
const DoctorController = require("../../controllers/DoctorController");


router.route("/")
  .post(UserController.login);

router.route("/doctor")
  .post(DoctorController.login);

module.exports = router;