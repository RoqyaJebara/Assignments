class User {
  constructer(userName, password) {
    this.userName = userName;
    this.password = password;
  }
  login(password) {
    return this.password === password ? "Welcome" : "Invaled Password";
  }
}

class Admin extends User {
  constructor(userName, password, role) {
    super(userName, password);
    this.role = role;
  }

  manageUsers() {}
}
///////////////////////////////////////////
class vehicle {
  constructor(type) {
    this.type = type;
  }
  move() {
    console.log(`The ${this.type} is moving ...`);
  }
}

class Car extends vehicle {
  constructor(brand, model, year) {
    super("car");
    this.brand = brand;
    this.model = model;
    this.year = year;
  }
  start() {
    console.log(`The ${this.brand} ${this.model} is starting...`);
  }
}

class Track extends vehicle {
  constructor(brand, model, year) {
    super("Track");
    this.brand = brand;
    this.model = model;
    this.year = year;
  }
  start() {
    console.log(`The ${this.brand} ${this.model} is starting...`);
  }
}
const carObj = new Car();
const trackObj = new Track();
carObj.move();
trackObj.move();
/////////////////////////////////////////////////////////////////////////////
function changeText() {
  let p = document.getElementById("par");
  p.innerHTML = "<strong>Hello World</strong>";
  // p.textContent = "Hello World";
}
function changeText2() {
  let p = document.getElementsByClassName("title");
  console.log(p);
  for (let i = 0; i < p.length; i++) {
    p[i].textContent = "Hello";
  }
}
function changeText3() {
  let p = document.getElementsByTagName("p");
  console.log(p);
  for (let i = 0; i < p.length; i++) {
    p[i].textContent = "Hello";
  }
}
function changeText4() {
  let p = document.querySelector(".title");
  p.textContent = "Hello World";
}
function changeText5() {
  let p = document.querySelectorAll(".title");
  for (let i = 0; i < p.length; i++) {
    p[i].textContent = "Hello";
  }
}

function changeColor() {
  let p = document.getElementById("par");
  p.style.color = "red";
}
function resetColor() {
  let p = document.getElementById("par");
  p.style.color = "black";
}
function showKey(event) {
  console.log(event);
}
function changeColor1() {
  let selectedcolor = document.getElementById("select").value;
  document.body.style.color = selectedcolor;
}

function onfocus() {
  document.getElementById("name").style.backgroundColor = "red";
}
function onblur() {
  document.getElementById("name").style.backgroundColor = "Yellow";
}
function validate() {
  let username = document.getElementById("username").value;
  if (username === "") {
    document.getElementById("errorMessage").textContent = "Invalid username";
    return false;
  }
  return true;
}
