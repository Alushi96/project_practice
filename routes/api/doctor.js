const router = require("express").Router();
const DoctorController = require("../../controllers/DoctorController");


router.route("/")
  .get(DoctorController.findAll)
  .post(DoctorController.create);


router
  .route("/:id")
  .get(DoctorController.findById)
  .put(DoctorController.update)


router.route("/signup/:id")
.put(DoctorController.signup)

module.exports = router;