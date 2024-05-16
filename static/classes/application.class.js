export class Application{
    constructor(loggedIn){
        this.loggedIn = loggedIn;
        document.addEventListener("DOMContentLoaded", () => {
            this.updateDom();
            console.log("Application started!");
        });

        const loginBtn = document.querySelector(".login");
        loginBtn.addEventListener("click", this.login());

        const logoutBtn = document.querySelector(".logout");
        logoutBtn.addEventListener("click", this.logout());
    }

    updateDom(){
        const logout = document.querySelector(".logout");
        const login = document.querySelector(".login")
        const profile = document.querySelector(".profile")
        const register = document.querySelector(".register")

        if(this.loggedIn){
            login.style.display = "none"
            register.style.display = "none"

        } else {
            logout.style.display = "none";
            profile.style.display = "none"
            register.style.display
        }
    }

    login(){
        const dialog = document.getElementById("login-dialog");
        dialog.showModal();

        const email = document.getElementById("login-email").value;
        const password = document.getElementById("login-password").value;

        new User(email, password);
    }

    logout() {
        
    }
}

class User{
    username;
    password;

    constructor(username, password){
        this.username = username;
        this.password = password;
    }
}



