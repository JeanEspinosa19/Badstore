class UserLogin{
    loginUser(user){
        const infoUser={
            name: user
        }
        this.saveLoginUserLocalStorage(infoUser);
    }

    saveLoginUserLocalStorage(infoUser){
        let userLoginSaved;

        userLoginSaved= this.userLoggedLocalStorage();

        userLoginSaved.push(infoUser);

        localStorage.setItem('userActived',JSON.stringify(userLoginSaved));
    }

    userLoggedLocalStorage(){
        let userActive;

        if (localStorage.getItem('userActived')===null) {
            userActive=[];
        }else{
            userActive = JSON.parse(localStorage.getItem('userActived'));
        }
        
        return userActive;
    }
    userLogOutLocalStorage(){
        let logoutUser;
        logoutUser= localStorage.removeItem('userActived')[0];
        return  logoutUser;

    }
}
const userLogin = new UserLogin();



