// const http = require("http");
// const fs = require("fs");
// const url = require("url");
// const express = require("express");
// const app = express();
// const port = 8000;
// app.get("/", (req, res) => {
//   return res.send("Home page");
// });
// app.get("/about", (req, res) => {
//   return res.send(
//     `About us page Hello ${req.query.name} you are ${req.query.age} old`
//   );
// });

// const myServer = http.createServer(app);
// const myServer = http.createServer((req, res) => {
//   const logs = `${new Date()}: New Requesst Received  \n ${req.url} `;
//   const myUrl = url.parse(req.url, true);
//   //   console.log(myUrl);
//   fs.appendFile("log.txt", logs, (err, data) => {
//     if (err) {
//       console.log("err", err);
//     } else {
//       switch (myUrl.pathname) {
//         case "/":
//           res.end("hello to Home");
//           break;
//         case "/about":
//           const userName = myUrl.query.myName;
//           res.end(`hello  ${userName}`);
//           break;
//         default:
//           res.end("404");
//           break;
//       }
//     }
//   });
// });

// app.listen(port, () => {
//   console.log("server listening");
// });
