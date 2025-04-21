
import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;
let userInfo = {  
  password: null,
};
app.use(bodyParser.urlencoded({ extended: true }));
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});
function saveToDb(req, res, next) {
  console.log(req.body);
  console.log(userInfo.password);
  if (req.body) { 
    userInfo.password = req.body["password"];  }
    else{
      userInfo.password = null;
    }
 next(); 
} 
  
app.use(saveToDb);

app.post("/submit", (req, res) => {
  if(req.body["password"]==="12345"){      
    res.sendFile(__dirname + "/public/secrets.html");
  }  
  else{
    res.redirect("/");
  } }
);

app.listen(port, () => {
  console.log("Server");
});

// to kill port
// netstat -ano | findstr :3000
// taskkill /PID 31612 /F 