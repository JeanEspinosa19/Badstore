class User{
    registerUser(saveUser,saveEmail,savePassword,saveTypeUser,saveHint){
        const infoUser={
            name: saveUser,
            email: saveEmail,
            pass: savePassword,
            typeUser: saveTypeUser,
            hint: saveHint
        }
        this.saveUserLocalStorage(infoUser);
    }

    saveUserLocalStorage(infoUser){
        let userSaved;

        userSaved= this.getUserLocalStorage();

        userSaved.push(infoUser);

        localStorage.setItem('usersSaved',JSON.stringify(userSaved));
    }

    getUserLocalStorage(){
        let listUsers;

        if (localStorage.getItem('usersSaved')===null) {
            listUsers=[];
        }else{
            listUsers = JSON.parse(localStorage.getItem('usersSaved'));
        }
        
        return listUsers;
    }
}


const user = new User();


const btnregisterUser= document.getElementById('registerUser');

loadEvents();

function loadEvents(){
    btnregisterUser.addEventListener('submit',verifyUser);

}

function verifyUser(e) {
    e.preventDefault();

    let saveUser= document.getElementById('name').value;
    let saveEmail= document.getElementById('emailRegister').value;
    let savePassword= document.getElementById('passRegister').value;
    let saveTypeUser= document.getElementById('typeUser').value;
    let saveHint= document.getElementById('passHint').value;

    if(saveUser !== '' || saveEmail !== '' || savePassword !== ''){
        user.registerUser(saveUser,saveEmail,savePassword,saveTypeUser,saveHint);
        location.reload();
    }
    
}



