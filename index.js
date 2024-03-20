const express = require("express");
const app = express();
const PORT = 9000;

const userRouter = require("./routes/user");
const { connectMongoDB } = require("./connection");

const dbUrl =
  "mongodb+srv://atiqurrehman01m:tlNn3dkbCzc7jcKn@cluster0.qgeyfgv.mongodb.net/";

connectMongoDB(dbUrl);

// encoded body urlencoded and Json
app.use(express.urlencoded({ extended: false }));
app.use(express.json({ extended: false }));
// Routes

app.use("/api/users", userRouter);

app.listen(PORT, () => {
  console.log("listening on port " + PORT);
});
