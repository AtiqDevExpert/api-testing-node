const express = require("express");
const app = express();
const PORT = 8000;

const userRouter = require("./routes/user");
const { connectMongoDB } = require("./connection");
const { logReqRes } = require("./middleware");

const dbUrl = "mongodb://127.0.0.1:27017/practice-db";
const fileName = "log.txt";
connectMongoDB(dbUrl);

// encoded body urlencoded and Json
app.use(express.urlencoded({ extended: false }));
app.use(express.json({ extended: false }));
// custom middleware
app.use(logReqRes(fileName));
// Routes
app.use("/api/users", userRouter);

app.listen(PORT, () => {
  console.log("listening on port " + PORT);
});
