
function validate() {
  let username = document.getElementById("username").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("pass").value;
  let confirmpass = document.getElementById("confirmpass").value;
  if (username === "") {
    document.getElementById("errorMessage").textContent = "Invalid username";
  
  }
  if (email === "") {
    document.getElementById("errorEmail").textContent = "Invalid email";
   }
   else{
    document.getElementById("errorEmail").textContent = "";

   }
  if (password === "") {
    document.getElementById("errorpass").textContent = "Invalid password";
     }else{
      document.getElementById("errorpass").textContent = "";
     }
  if (confirmpass === "" || confirmpass !== password) {
    document.getElementById("errorconfirmpass").textContent = "Invalid confirmpass";
      }else{
        document.getElementById("errorconfirmpass").textContent = "";
      }
  if(username === "" || email === "" || password === "" || confirmpass === "" || confirmpass !== password){
    return false;
  }
  return true;

}