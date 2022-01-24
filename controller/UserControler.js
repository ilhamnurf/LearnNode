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

const detailByEmail = async(req,res) => {
  
  try {
    const email = req.params.email;
    const users = await UserModel.findOne({
      where:{
        email: email,
      }
    })
    
    if (users === null) {
      return res.json({
        status: "Fail",
        msg: "Daftar User Tidak Ditemukan",
      });
    }
    return res.json({
      status: "Succses",
      msg: "Daftar User Di Temukan ",
      data: users,
    });
    res.send(email)    
  } catch (err) {
    return res.status(403).json({
      status: "fail",
      msg: "ada kesalahan",
    });
  }
}
const destroy= async (req,res) =>{
  try {
    const {id} = req.params;
    const users = await UserModel.destroy({
      where:{
        id: id,
      }
    })
    
    if (users === 0) {
      return res.json({
        status: "Fail",
        msg: "User Tidak Ditemukan",
      });
    }
    return res.json({
      status: "Succses",
      msg: "User Di hapus ",
      data: users,
    });
    res.send(email)    
  } catch (err) {
    return res.status(403).json({
      status: "fail",
      msg: "ada kesalahan",
    });
  }
}

const update = async (req,res) =>{
  try {
    const {id} = req.params;
    const {name} = req.body;
    const user = await UserModel.findByPk(id);
    if (users === 0) {
      return res.json({
        status: "Fail",
        msg: "User Tidak Ditemukan",
      });
    }
    
    await UserModel.update({
      name:name,
    },
    {
      where:{
        id:id,
      }
    }
    )
  } catch (err) {
    return res.status(403).json({
      status: "fail",
      msg: "ada kesalahan",
    });
  }

  
}

module.exports = { index, detail ,detailByEmail ,destroy ,update };
