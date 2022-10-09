let userHome= document.getElementById('userHome');

let userLogged= JSON.parse(localStorage.getItem('userActived'));

if(userLogged){
userHome.innerHTML=userLogged[0].name;
}
const btnlogout= document.getElementById('logout');


function logoutSession(){
    window.location.href = "index.html";
    userLogin.userLogOutLocalStorage();
}
