const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

function Signin(){
    var email = document.getElementById("email").value
    var password = document.getElementById("password").value
    if(email === "chhea.chhouy@student.passerellesnumeriques.org" && password === "chhea@2025"){
        alert("Login Successful");
    }else if(email !== "chhea.chhouy@student.passerellesnumeriques.org"){
        alert("Error : Email is incorrect");
    }else if(password !== "chhea@2025"){
        alert("Error : Password is incorrect");
    }else{
        alert("Error : Email and Password are incorrect");
    }
}
function Signup(){
    var email = document.getElementById("email").value
    var password = document.getElementById("password").value
    var username = document.getElementById("name").value
    if(email === "" && password === "" && username === ""){
        alert("Error : Please fill in all fields");
    }else{
        alert("Registration Successful");
    }
}