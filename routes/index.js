const express = require("express");
const router = express.Router();
const { register } = require("../controller/AuthCotroller");
const { check } = require("express-validator");
const UserModel = require("../models").user;
const bcrypt = require("bcrypt");

const { validationResult } = require("express-validator");

router.get("/", (req, res) => {
  res.json({
    status: "ok",
  });
});

router.post(
  "/register",

  check("name").isLength({ min: 1, max: 5 }).withMessage("Name is required"),
  check("email")
    .isEmail()
    .withMessage("E-mail must be valid")
    .custom((value) => {
      return UserModel.findOne({ where: { email: value } }).then((user) => {
        if (user) {
          return Promise.reject("E-mail is already use sir!");
        }
      });
    }),
  check("password")
    .isLength({ min: 8 })
    .withMessage("Password must be 8 or more characters"),
    check("status").isIn(['active','nonactive'])
    .withMessage('status isn`t enum'),
    check("jenisKelamin").isIn(['Laki - Laki','Perempuan'])
    .withMessage('Only two genders'),
  
  async (req, res) => {
    const errors = validationResult(req);

    const payload = req.body;

    payload.password = await bcrypt.hashSync(payload.password, 10);
    if (!errors.isEmpty())
      return res.status(422).json({
        errors: errors.mapped(),
      });

    try {
      let body = req.body;
      (body.password = await bcrypt.hashSync(body.password)), 10;
      const users = await UserModel.create(body);
      console.log(users);

      res.json({
        status: "succses",
        msg: "register berhasil",
      });
    } catch (err) {
      console.log(err);
    }

    res.send(payload);
  }
);

module.exports = router;
