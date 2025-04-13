// console.log("Hello World");
// const fs = require("fs");//file system

// fs.writeFile("message.txt","Hello from NodeJS", (err) => {
//     if (err) throw err;
//     console.log("The file has been saved!");
//   });
////////////////////////////////////////////////////////
// ? optional
// required
  // fs.readFile("./message.txt",'utf8', (err, data) => {
  //   if (err) throw err;
  //   console.log(data.charAt(9));
  // });
//////////////////////////////////////////////////////////
// var generateName = require("sillyname");
// var name = generateName();
// console.log(`My name is ${name}`);
//common js  type of module
// "main": "index.js",
// "type": "common js",
//////////////////////////////////////////////
// "main": "index.js",
// "type": "module",

 import sillyname from "sillyname";
  var name = sillyname();
  console.log(`My name is ${name}`);
//////////////////////////////////////////////