//npm init
//type =module
//npm install express body-parser ejs
// nodemon index.js

import express from "express";
import bodyParser from "body-parser";
import { dirname, parse } from "path";
import { fileURLToPath } from "url";
const colors=
[
    { "id": 1, "color": "Red", "value": "#FF0000" },
    { "id": 2, "color": "Green", "value": "#00FF00" },
    { "id": 3, "color": "Blue", "value": "#0000FF" },
    { "id": 4, "color": "Yellow", "value": "#FFFF00" },
    { "id": 5, "color": "Cyan", "value": "#00FFFF" },
    { "id": 6, "color": "Magenta", "value": "#FF00FF" },
    { "id": 7, "color": "Black", "value": "#000000" },
    { "id": 8, "color": "White", "value": "#FFFFFF" }
  ]
  const app = express();
  const port = 3000; 

app.use(bodyParser.urlencoded({ extended: true }));

let lastId =8;

app.get("/colors", (req, res) => {
  res.json(colors);
});

app.get("/random", (req, res) => {  
const randomNumber = Math.floor(Math.random() * colors.length);
res.json( colors[randomNumber]);   
});
//colors/5
app.get("/colors/:id", (req, res) => {
const Id = parseInt(req.params.id);
const colorObj = colors.find((color) => color.id === Id);
res.json(colorObj);
});
//filter?color=green
app.get("/filter", (req, res) => {
const Qcolor = req.query.color;
const listOfFilteredColor = colors.filter((color) => color.color === Qcolor);
res.json(listOfFilteredColor);
});  

app.post("/colors", (req, res) => {
  lastId++;
const newColor = {
id: lastId,  
color: req.body.color, 
value: req.body.value,
};
colors.push(newColor);
res.status(200).json(newColor);
});

app.put("/colors/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const updatedColor = {
        id: id,
        color: req.body.color,
        value: req.body.value,
    };
    
    const colorindex = colors.findIndex((color) => color.id === id);
   colors[colorindex]=updatedColor;
    res.json(updatedColor);
    });


    app.patch("/colors/:id", (req, res) => {
        const id = parseInt(req.params.id);
        const colorindex = colors.findIndex((color) => color.id === id);

        const colorObj = colors[colorindex];        
         const updatedColor = {
            id: id,
            color: req.body.color||colorObj.color,
            value: req.body.value||colorObj.value,
        };
        
       colors[colorindex]=updatedColor;
        res.json(updatedColor);
        });
    
// app.delete("/colors/:id", (req, res) => {
app.listen(port, () => {});

// to kill port
// netstat -ano | findstr :3000
// taskkill /PID 22632 /F 
//ctrl c