function register () {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const confirmpassword = document.getElementById('confirmpassword').value;
    const fullname = document.getElementById('fullname').value;
    const error = document.getElementById('error')
    
    if (username === "" || password === "" || confirmpassword === "" || fullname === "") {
         error.innerHTML = "Please fill in all fields";
        error.style.color = "white";
        error.style.backgroundColor = "blue"
        error.style.visibility = "visible";
    }
    else if (username != "Bilog") {
        error.innerHTML = "Wrong username";
        error.style.color = "beige";
        error.style.backgroundColor = "green"
        error.style.visibility = "visible";
    }
    else if (password != "1024") {
        error.innerHTML = "Incorrect password";
        error.style.color = "black";
        error.style.backgroundColor = "gold"
        error.style.visibility = "visible";
    }
    else if (confirmpassword != password) {
        error.innerHTML = "Password does not match";
        error.style.color = "pink";
        error.style.backgroundColor = "gray"
        error.style.visibility = "visible";
    }
    else {
         error.innerHTML = "You are now registered";
        error.style.color = "green";
        error.style.backgroundColor = "yellow"
        error.style.visibility = "visible";
    }
}
