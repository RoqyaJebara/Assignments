// let x = 3;
// let y = 4;

// let operation = "+";
// let result = 0;
// if ((operation = "+")) {
//   result = x + y;
// } else if (operation === "-") {
//   result = x - y;
// } else if (operation === "*") result = x * y;
// else if (operation === "/") result = x / y;
// else result = null;

// console.log("if " + result);

// switch (operation) {
//   case "+":
//     result = x + y;
//     break;
//   case "-":
//     result = x - y;
//     break;
//   case "*":
//     result = x * y;
//     break;
//   case "/":
//     result = x / y;
//     break;
//   default:
//     result = null;
// }
// console.log("switch " + result);

// let x=document.getElementById("num1");
// let y = document.getElementById("num2");
// let operation = document.getElementById("operation");
// let result = 0;
// if ((operation = "+")) {
//   result = x + y;
// } else if (operation === "-") {
//   result = x - y;
// } else if (operation === "*") result = x * y;
// else if (operation === "/") result = x / y;
// else result = null;



function calculate(){
    let x=parseInt(document.getElementById("num1").value) ;
let y = parseInt(document.getElementById("num2").value);
let operation = document.getElementById("operation").value;
let result = 0;
    switch (operation) {
        case "+":
          result = x + y;document.getElementById("result").innerHTML=result+"";
          break;
        case "-":
          result = x - y;document.getElementById("result").innerHTML=result+"";
          break;
        case "*":
          result = x * y;document.getElementById("result").innerHTML=result+"";
          break;
        case "/":
          result = x / y;document.getElementById("result").innerHTML=result+"";
          break;
        default:
          result = null;document.getElementById("result").innerHTML=result+"";
          break;
      }
}
