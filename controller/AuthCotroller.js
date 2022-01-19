const UserModel = require("../models").user;
const bcrypt = require("bcrypt");
const { validationResult } = require("express-validator");

const register = async (req, res) => {
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
};

module.exports = { register };
