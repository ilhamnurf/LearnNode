const express = require("express");

const router = express.Router();
const UserModel = require("../models").user;
const bcrypt = require('bcrypt');
router.get("/", (req, res) => {
  res.json({
    status: "ok",
  });
});

router.post("/register", async (req, res) => {
  try {
    let body = req.body;
    body.password=await bcrypt.hashSync(body.password),10;
    const users = await UserModel.create(body);
    console.log(users);

    res.json({
      status:"succses",
      msg:"register berhasil"
    });
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
