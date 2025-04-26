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
  const today = new Date();
  const day = today.getDay(); // 0-6 (0 is Sunday, 1 is Monday, etc.)
let type="a weekday";
let adv = "It's time to work"
if (day === 5 || day === 6) {
    type = "a weekend";
    adv = "It's time to have some fun";
  }
  res.render("index.ejs", {
    type: type,
    adv: adv,
  });
});

// to kill port
// netstat -ano | findstr :3000
// taskkill /PID 22632 /F 

app.listen(port, () => {});
