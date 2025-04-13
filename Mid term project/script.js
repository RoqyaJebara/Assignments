
function successfulalert() {
  // document.getElementById("msg").innerHTML="successful data send";
  alert("successful data send");
}


let persons = [];
console.log(persons);

class person {
  constructor(email, name, phoneNumber, gender, address) {
    this.email = email;
    this.name = name;
    this.phoneNumber = phoneNumber;
    this.gender = gender;
    this.address = address;
  }
}
function saveData() {
  
  
  persons.push(
    new person(
      document.getElementById("email").value,
      document.getElementById("name").value,
      document.getElementById("PhoneNumber").value,
      document.getElementById("gender").value,
      document.getElementById("address").value
    )
  );
  console.log(persons);
 
  const table = document
    .getElementById("tableBody")
    .getElementsByTagName("tbody")[0];
  const row = document.createElement("tr");

  const email = document.createElement("td");
  email.textContent = document.getElementById("email").value;

  const nameTd = document.createElement("td");
  nameTd.textContent = document.getElementById("name").value;

  const PhoneNumber = document.createElement("td");
  PhoneNumber.textContent = document.getElementById("PhoneNumber").value;

  const gender = document.createElement("td");
  gender.textContent = document.getElementById("gender").value;

  const address = document.createElement("td");
  address.textContent = document.getElementById("address").value;
  row.appendChild(email);

  row.appendChild(nameTd);
  row.appendChild(PhoneNumber);
  row.appendChild(gender);
  row.appendChild(address);

  table.appendChild(row);
  document.getElementById("card").innerHTML +=
    '<div class="card" style="width: 18rem;">' +
    '<div class="card-body">' +
    '<h5 class="card-title">' +
    document.getElementById("name").value +
    "</h5>" +
    '<h6 class="card-subtitle mb-2 text-muted">' +
    document.getElementById("gender").value +
    "</h6>" +
    '<p class="card-text">' +
    document.getElementById("address").value +
    "</p>" +
    ' <a href="#" class="card-link">' +
    document.getElementById("email").value +
    "</a>" +
    ' <a href="#" class="card-link">' +
    document.getElementById("PhoneNumber").value +
    "</a>" +
    "</div>" +
    "</div>";
    alert("in save data");
  return false;
}
console.log(persons);

function reset() {
  document.getElementById("form").reset();
}
window.onload=function(){
  let nav_form=document.getElementById("nav-form-tab");
  let nav_table=document.getElementById("nav-table-tab"); 
  let form=document.getElementById("form");
  let table=document.getElementById("table");

  console.log(nav_form);
console.log(nav_table);

window.formTrue= function (){
  nav_form.setAttribute("aria-selected","true");
  nav_form.setAttribute("class","nav-link active");
  form.setAttribute("class","tab-pane fade page1 show active ");
  nav_table.setAttribute("aria-selected","false");
  nav_table.setAttribute("class","nav-link ");
  table.setAttribute("class","tab-pane fade page2");

}
window.tableTrue= function (){
  nav_table.setAttribute("aria-selected","true");
  nav_table.setAttribute("class","nav-link active");
  table.setAttribute("class","tab-pane fade page2 show active ");
  nav_form.setAttribute("aria-selected","false");
  nav_form.setAttribute("class","nav-link ");
  form.setAttribute("class","tab-pane fade page1");
}
}
function viewTable(){
  // alert("viewTable");
  document.getElementById("view1").style.display="block";
  document.getElementById("view2").style.display="none";

  }
  function viewCards(){
    // alert("viewCards");
    document.getElementById("view2").style.display="block";
    document.getElementById("view1").style.display="none";

    }
