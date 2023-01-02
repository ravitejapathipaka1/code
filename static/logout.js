
let logoutbtn = document.getElementById('logoutbtn');
let loginpage=document.getElementById('loginpage');
let unique = setTimeout(logoutbtn.onclick=function(){
    window.location='index.html'
},5000)

loginpage.addEventListener('mousemove', function(event){
    clearInterval(unique)
})