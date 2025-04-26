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
 
  res.render("index.ejs",  {
    title: "EJS Tags",
    seconds: new Date().getSeconds(),
    items: ["apple", "banana", "cherry"],
    htmlContent: "<strong>This is some strong text</strong>",
  });
});
// to kill port
// netstat -ano | findstr :3000
// taskkill /PID 28424 /F 

app.listen(port, () => {});
