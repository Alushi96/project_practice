const router = require("express").Router();
const userRoutes = require("./user");
const loginRoute = require("./login");
const doctorRoute = require("./doctor");


router.use("/user", userRoutes);
router.use("/login", loginRoute);
router.use("/doctor", doctorRoute);

module.exports = router;