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
  res.sendFile(__dirname + "/public/index.html");
//   callback function
});

app.post("/submit", (req, res) => {
    const name= req.body.name;
//     res.send(
//         `<!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
// </head>
// <body>
//     <h1>Hello ${name}</h1>
// </body>
// </html>`);

  //   callback function
res.render("index.ejs", {
   name: name,
   cart:["item1", "item1", "item1"],
   content:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores, amet libero iure tempora enim ut eum culpa repellat iusto laudantium quia nam neque dolorem cumque tempore nemo tenetur quo architecto.",
   });

});

app.listen(port, () => {});
