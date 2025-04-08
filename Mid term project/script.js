function successfulalert(){
// document.getElementById("msg").innerHTML="successful data send";
alert("successful data send");
}
let persons =[
 
];
console.log(persons);

class person {
    constructor(email,name,phoneNumber,gender,address) {
        this.email = email;
        this.name = name;
        this.phoneNumber = phoneNumber;
        this.gender = gender;
        this.address = address;
    }   
  }
function saveData(){
    alert("in save data")
persons.push(
    new person(
        document.getElementById("email").value,
        document.getElementById("name").value,
        document.getElementById("PhoneNumber").value,
        document.getElementById("gender").value,
        document.getElementById("address").value
    ),
    
);
document.getElementById("tableBody").innerHTML +=
'<tr scope="row">'+
'<td>'+document.getElementById("email").value+'</td>'+
'<td>'+document.getElementById("name").value+'</td>'+
'<td>'+document.getElementById("PhoneNumber").value+'</td>'+
'<td>'+document.getElementById("gender").value+'</td>'+
'<td>'+document.getElementById("address").value+'</td>'+
'</tr>';
document.getElementById("card").innerHTML +=
'<div class="card" style="width: 18rem;">'+
  '<div class="card-body">'+
    '<h5 class="card-title">'+document.getElementById("name").value +'</h5>'+
   '<h6 class="card-subtitle mb-2 text-muted">'+document.getElementById("gender").value+'</h6>'+
   '<p class="card-text">'+document.getElementById("address").value+'</p>'+
   ' <a href="#" class="card-link">'+document.getElementById("email").value+'</a>'+
   ' <a href="#" class="card-link">'+document.getElementById("PhoneNumber").value+'</a>'+
  '</div>'+
'</div>';

return false;


}
console.log(persons);

function reset(){
    document.getElementById("form").reset();
}