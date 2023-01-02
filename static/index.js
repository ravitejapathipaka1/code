let signupForm = document.getElementById("signupForm");

let UserName=document.getElementById("UserName");
let Password = document.getElementById("Password");

let usernameErrMsg = document.getElementById("usernameErrMsg");
let passwordErrMsg = document.getElementById("passwordErrMsg");

let loginbtn=document.getElementById("loginbtn");

UserName.addEventListener("blur", function(event){
    if(event.target.value===""){
        usernameErrMsg.textContent="*Required";
    } else{
        usernameErrMsg.textContent="";
    }
})
Password.addEventListener("blur", function(event){
    if(event.target.value===""){
        passwordErrMsg.textContent="*Required";
    } else{
        passwordErrMsg.textContent="";
    }
})

loginbtn.onclick = function(){
    if (UserName.value==="Ravi" && Password.value==="1234"){
        window.location='success.html';
        alert('Login Successfully')
    } else{
        alert('Enter Correct Username and Password')
    }
}

