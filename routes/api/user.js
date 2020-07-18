const router = require("express").Router();
const UserController = require("../../controllers/UserController");


router.route("/")
  .get(UserController.findAll)
  .post(UserController.create);


router
  .route("/:id")
  .get(UserController.findById)
  .put(UserController.update)

module.exports = router;