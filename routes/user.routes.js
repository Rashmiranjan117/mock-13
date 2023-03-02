const { UserModel } = require("../model/user.model");

const express = require("express");
const userRouter = express.Router();

userRouter.post("/", async (req, res) => {
  let {name,difficulty,score} = req.body;
  // console.log(data);
  try {
    let user = await new UserModel({name,difficulty,score});
    await user.save();
    console.log(user)
    res.send({ msg: "User Registered" });
  } catch (err) {
    res.send({ msg: "Something went wrong", err });
  }
});

userRouter.get("/", async (req, res) => {
  try {
    let data = await UserModel.find();
    res.send(data);
  } catch (err) {
    res.send({ msg: "Something went wrong", err });
  }
});

module.exports = { userRouter };
