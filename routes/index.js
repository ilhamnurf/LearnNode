const express = require("express");
const router = express.Router();
const { register } = require("../controller/AuthCotroller");
const {index,detail}=require("../controller/UserControler")
const UserModel = require("../models").user;
const validationMiddleware = require("../middleware/validationMiddleware");
const { validationRegister } = require("../validators/authValidator");
// const { validationResult } = require("express-validator");

router.post("/register", validationRegister, validationMiddleware, register);

//user
router.get("/users",index)
router.get("/users/:id",detail)

module.exports = router;
