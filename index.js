const express = require("express");
const app = express();
const PORT = 8000;

const userRouter = require("./routes/user");
const { connectMongoDB } = require("./connection");
const { logReqRes } = require("./middleware");

const dbUrl =
  "mongodb+srv://atiqurrehman01m:tlNn3dkbCzc7jcKn@cluster0.qgeyfgv.mongodb.net/crudusers";
const fileName = "log.txt";
connectMongoDB(dbUrl);

// encoded body urlencoded and Json
app.use(express.urlencoded({ extended: false }));
app.use(express.json({ extended: false }));
// custom middleware
app.use(logReqRes(fileName));
// Routes
app.get("/", (req, res) => {
  res.send("api running new deploy");
});
app.use("/api/users", userRouter);

app.listen(PORT, () => {
  console.log("listening on port " + PORT);
});
