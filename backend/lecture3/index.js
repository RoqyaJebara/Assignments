// // 1. create directory
// // 2.index.js
// //init npm
// //express package
// //type module

// //package save
// //node module :local global
// //nodemon //save auto global
// import express from "express";
// import bodyParser from "body-parser";
// import {dirname} from "path";
// import {fileURLToPath} from "url";

// const __dirname = dirname(fileURLToPath(import.meta.url));//common
// const app = express();
// const port=3000;

// let userInfo={
//   email:null,
//   password:null
// }
// //should here //middleware //body parser //express.js // may more than one
// app.use(bodyParser.urlencoded({ extended: true }));//general
// //custom

// ////////////////////
// function saveToDB(req, res, next) {
//   (userInfo.email=req.body.email),
//   (userInfo.password=req.body.password);
//   next();
// }
// app.use(saveToDB);//custom middleware
// ////////////////////

// app.get("/", (req, res) => {
//   res.sendFile(__dirname + "/public/index.html");

// });
// app.post("/submit", (req, res) => {
//   console.log(req.body);
//   res.send(`<h1>Your email ${userInfo.email}and password ${userInfo.password}</h1>`);

// });

// // app.get("/", (req, res) => {//requist,response
// //   res.send("<h1>Hello, home </h1>");//resource
// // res.sendStatus(200);
// //   //landing page
// // });

// // app.get("/about", (req, res) => {//requist,response
// //   res.send("<h1>Hello, about </h1>");//resource
// // res.sendStatus(202);
// //   //landing page
// // });

// // app.post("/contact", (req, res) => {//requist,response
// //   res.send("<h1>Hello, contact </h1>");//resource
// //   res.sendStatus(201);
// //   //landing page
// // });

// // app.put("/login", (req, res) => {
// //   console.log
// //   res.sendStatus(204);
// //   res.send(
// //     "<h1>Login</h1>"+
// //     "<form>"+
// //     "<label for='email'>Email</label><br>"+
// //     "<input type='email' name='email'> <br><br>"+
// //     "<label for='password'>Password</label><br>"+
// //     "<input type='password' name='password'> <br><br>"+
// //     "<input type='submit' value='login'><br>"+
// //     "</form>");

// // });

// // app.patch("/test", (req, res) => {
// //   res.send("<h1>Hello, test </h1>");
// //   res.sendStatus(200);

// // });
// app.listen(port, () => {
//   console.log("Server run");
// });

// //midleware
// //body parser
// //proker
// //authentication
// //logs to every reqiust  backend
// //route handler /about

import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;
let userInfo = {
  email: null,
  password: null,
};
app.use(bodyParser.urlencoded({ extended: true }));

function saveToDb12(req, res, next) {
  console.log(req.body);
  console.log(userInfo.email);
  if (req.body) {
    userInfo.email = req.body["email"];
    userInfo.password = req.body["password"];
  }
  next();
}
app.use(saveToDb12);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/submit", (req, res) => {
  res.send(
    `<h1>Your email ${userInfo.email} and password ${userInfo.password} </h1>`
  );
});

app.listen(port, () => {
  console.log("Server");
});
