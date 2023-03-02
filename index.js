const express = require("express");
const app = express();
const { connection } = require('./config/db');
const cors = require("cors");
require("dotenv").config();
const { wordRouter } = require("./routes/words.routes");
const { userRouter } = require("./routes/user.routes");

app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);


app.use("/playzone", wordRouter);
app.use("/user", userRouter);

app.listen(process.env.port, async () => {
  try {
    await connection;
    console.log("Connected to server");
  } catch (err) {
    console.log("Something went wrong");
  }
  console.log("Server is connected to port", process.env.port);
});
