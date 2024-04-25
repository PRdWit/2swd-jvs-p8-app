export class Application{
    constructor(loggedIn){
        this.loggedIn = loggedIn;
        document.addEventListener("DOMContentLoaded", () => {
            this.updateDom();
            console.log("Application started!");
        });
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
        
    }
}

class User{
    username;

    constructor(username){
        $this.username = username;

    }
}



