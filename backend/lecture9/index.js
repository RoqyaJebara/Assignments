//npm init
//type =module
//npm install express body-parser ejs
// nodemon index.js


import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;


app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
 
  res.render("index.ejs"
)});

app.post("/submit", (req, res) => {
  const fullName = req.body.fname + " " + req.body.lname;
  const numbersOfLetters = req.body.fname.length+req.body.lname.length;
  res.render("index.ejs", {   
    numbersOfLetters: numbersOfLetters,    fullName: fullName,
  });
});
// to kill port
// netstat -ano | findstr :3000
// taskkill /PID 16756 /F 

app.listen(port, () => {});
