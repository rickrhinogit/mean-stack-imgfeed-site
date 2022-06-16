const express = require("express");

const UserController = require("../controllers/user")

// const req = require("express/lib/request");
// const user = require("../models/user");

const router = express.Router();

router.post("/signup", UserController.createUser);
router.post("/login", UserController.userLogin);

module.exports = router;