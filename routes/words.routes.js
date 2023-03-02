const express = require("express");
const wordRouter = express.Router();
const { WordModel } = require("../model/word.schema");

const arr = [
  "rock",
  "paper",
  "scissor",
  "pets",
  "labrodar",
  "tree",
  "rose",
  "apple",
  "github",
  "javascript",
  "react",
  "css",
  "java",
  "html",
  "python",
  "ocean",
  "octopus",
  "fish",
  "human",
  "Monkey",
  "lion",
  "goat",
  "husky",
  "mouse",
  "Keyboard",
  "Monitor",
  "Speaker",
];

wordRouter.get("/", async (req, res) => {
  try {
    let data = arr[Math.floor(Math.random() * arr.length)];
    res.status(200).send({ msg: "Success", data });
  } catch (err) {
    res.status(400).send({ msg: "error" });
  }
});



module.exports = { wordRouter };
