// const express = require("express");
// const app = express();
// const port = 8000;
// const myUsers = require("./MOCK_DATA.json");
// const fs = require("fs");
// const mongoose = require("mongoose");

// // connection with mongoDB
// mongoose
//   .connect("mongodb://127.0.0.1:27017/practice-db")
//   .then((success) => {
//     console.log("Connected with mongoDB");
//   })
//   .catch((error) => {
//     console.log("Error during Connected with mongoDB", error);
//   });

// // Schemas for users
// const usersSchema = new mongoose.Schema({
//   first_name: {
//     type: String,
//     required: true,
//   },
//   last_name: {
//     type: String,
//     required: true,
//   },
//   email: {
//     type: String,
//     required: true,
//     unique: true,
//   },
//   job_title: {
//     type: String,
//     required: true,
//   },
//   gender: {
//     type: String,
//     required: true,
//   },
// });
// const users = mongoose.model("users", usersSchema);

// //

// app.use(express.urlencoded({ extended: false }));
// app.use(express.json({ extended: false }));
// app.get("/allusers", (req, res) => {
//   const html = `
//       <ul>
//      ${myUsers.map((user) => `<li>${user.first_name}</li>`).join("")}
//       </ul>
//       `;
//   return res.send(html);
// });
// app.get("/api/allusers", (req, res) => {
//   if (myUsers.length > 0) {
//     return res.json(myUsers);
//   } else {
//     return res.json({ errors: "no users found" });
//   }
// });
// // app.get("/api/allusers/:id", (req, res) => {
// //   const userID = Number(req.params.id);
// //   const user = users.find((user) => user.id === userID);

// //   return res.json(user);
// // });

// app
//   .route("/api/allusers/:id")
//   .get((req, res) => {
//     const userID = Number(req.params.id);
//     const user = myUsers.find((user) => user.id === userID);
//     if (!user) return res.status(404).json({ message: "User not found" });
//     return res.json(user);
//   })
//   .patch((req, res) => {
//     const userID = Number(req.params.id);
//     const index = myUsers.findIndex((user) => user.id === userID);
//     const newData = req.body;
//     if (index !== -1) {
//       Object.assign(myUsers[index], newData);
//       fs.writeFile("./MOCK_DATA.json", JSON.stringify(myUsers), (err, data) => {
//         if (err) {
//           console.error("Error writing file:", err);
//           return;
//         } else {
//           return res.status(201).json({
//             status: "Record Updated Successfully",
//             id: userID,
//           });
//         }
//       });
//     }
//   })
//   .delete((req, res) => {
//     const userID = Number(req.params.id);
//     const user = myUsers.find((user) => user.id === userID);
//     if (user) {
//       const allNewUsers = myUsers.filter((person) => {
//         return person.id != user.id;
//       });
//       fs.writeFile(
//         "./MOCK_DATA.json",
//         JSON.stringify(allNewUsers),
//         (err, data) => {
//           if (err) {
//             throw err;
//           } else {
//             return res.json({ status: "Delete Successfully", id: user.id });
//           }
//         }
//       );
//     }
//   });
// app.post("/api/allusers", (req, res) => {
//   const body = req.body;
//   myUsers.push({ id: myUsers.length + 1, ...body });
//   fs.writeFile("./MOCK_DATA.json", JSON.stringify(myUsers), (err, data) => {
//     if (err) {
//       throw err;
//     } else {
//       return res.status(201).json({
//         Status: "User Created Successfuly",
//         id: myUsers.length,
//       });
//     }
//   });
// });
// app.listen(port, () => {
//   console.log("listening on port " + port);
// });
