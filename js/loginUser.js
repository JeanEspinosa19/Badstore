console.log(JSON.parse(localStorage.getItem('usersSaved')));

const btnloginUser= document.getElementById('loginUser').addEventListener('submit',loginUser);

function loginUser(e) {
    e.preventDefault();

    let email= document.getElementById('emailLogin').value;
    let password= document.getElementById('passLogin').value;
    let listUsers= JSON.parse(localStorage.getItem('usersSaved'));
    let loadTypeUser= '';
    let verifyUser= '';


    listUsers.forEach(function (item) {

        if(email == item.email && password == item.pass){
            verifyUser= item.name;
            loadTypeUser=item.typeUser;
            
            if (loadTypeUser=='supplier') {
                alert('Welcome '+verifyUser);
                window.location.href="supplierHome.html";
            }
            if (loadTypeUser=='buyer') {
                alert('Sorry, the page is maintenance');
                window.location.href="index.html";
            }
        }
    });

    if (loadTypeUser == '' && verifyUser==''){
        alert("The email or password is not correct");
    }


}

