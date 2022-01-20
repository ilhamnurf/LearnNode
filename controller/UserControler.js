const UserModel = require("../models").user;

const index = async (req, res) => {
  //   res.send("ok");

  try {
    const users = await UserModel.findAll({
      attributes: ["id", "name", "email", "status", "jenisKelamin"],
    });
    console.log(users);

    return res.json({
      status: "Succses",
      msg: "Daftar user di temukan",
      data: users,
    });
  } catch (err) {
    console.log(err);
    return res.status(403).json({
      status: "fail",
      msg: "ada kesalahan",
    });
  }
};
const detail = async (req, res) => {
  try {
    const { id } = req.params;
    const users = await UserModel.findByPk(id);
    if (users === null) {
      return res.json({
        status: "Fail",
        msg: "Daftar User Tidak Ditemukan",
      });
    }
    return res.status(200).json({
      status: "Succses",
      msg: "Daftar User Di Temukan ",
      data:users
    });
  } catch (err) {
    console.log(err);
    return res.status(403).json({
      status: "fail",
      msg: "ada kesalahan",
    });
  }
};

module.exports = { index, detail };
