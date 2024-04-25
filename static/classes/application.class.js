class Application{
    $loggedIn;


    constructor(){
        this.$loggedIn = true;
        console.log("Testing")
    }

    updateDom(){
        const logout = document.querySelector(".logout");
        const login = document.querySelector(".login")
        const profile = document.querySelector(".profile")
        const register = document.querySelector(".register")
        if(this.$loggedIn == true ){
            login.style.display = "none"
            register.style.display = "none"

        } else {
            logout.style.display = "none";
            profile.style.display = "none"
            register.style.display
        }
    }
}



document.addEventListener("DOMContentLoaded", () => {
    const app = new Application();
    app.updateDom();
    console.log("Application started");
});