const express = require("express");
const router = express.Router();
const services = require("./services");

router.get("/", services.serverStart);

router.post("/newUser", services.queryUser);
router.post("/logUser", services.logUser);

router.get("/classes", services.getClasses);
router.post("/getUser", services.getUser);
router.post("/joinClass", services.joinClass);
router.post("/leaveClass", services.leaveClass);

module.exports = router;
