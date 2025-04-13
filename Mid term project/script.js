
function successfulalert() {
  // document.getElementById("msg").innerHTML="successful data send";
  alert("successful data send");
}
class person {
  constructor(email, name, phoneNumber, gender, address) {
    this.email = email;
    this.name = name;
    this.phoneNumber = phoneNumber;
    this.gender = gender;
    this.address = address;
  }
}
let persons = [];
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

window.filldata=function(){
  document
  .getElementById("tableBody")
  .getElementsByTagName("tbody")[0].innerHTML="";
   document.getElementById("card").innerHTML="";
   console.log("per"+persons);

  for(item of persons){
    const table1 = document
      .getElementById("tableBody")
      .getElementsByTagName("tbody")[0];
    const row = document.createElement("tr");
  
    const email = document.createElement("td");
    email.textContent =item.email;
  
    const nameTd = document.createElement("td");
    nameTd.textContent = item.name;
  
    const PhoneNumber = document.createElement("td");
    PhoneNumber.textContent = item.phoneNumber;
  
    const gender = document.createElement("td");
    gender.textContent =item.gender;
  
    const address = document.createElement("td");
    address.textContent = item.address;
    row.appendChild(email);
  
    row.appendChild(nameTd);
    row.appendChild(PhoneNumber);
    row.appendChild(gender);
    row.appendChild(address);
  
    table1.appendChild(row);
    document.getElementById("card").innerHTML +=
      '<div class="card" style="width: 18rem;">' +
      '<div class="card-body">' +
      '<h5 class="card-title">' +
      item.name+
      "</h5>" +
      '<h6 class="card-subtitle mb-2 text-muted">' +
      item.gender +
      "</h6>" +
      '<p class="card-text">' +
      item.address +
      "</p>" +
      ' <a href="#" class="card-link">' +
      item.email+
      "</a>" +
      ' <a href="#" class="card-link">' +
      item.PhoneNumber +
      "</a>" +
      "</div>" +
      "</div>";
  }
}
window.saveData=function(){
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

    alert("in save data");
    successfulalert();
    
    return false;
}

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
