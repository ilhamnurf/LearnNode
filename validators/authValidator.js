const { check } = require("express-validator");
const UserModel = require("../models").user;
const validationRegister = [
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
  check("status")
    .isIn(["active", "nonactive"])
    .withMessage("status isn`t enum"),
  check("jenisKelamin")
    .isIn(["Laki - Laki", "Perempuan"])
    .withMessage("Only two genders"),
];

module.exports={validationRegister}