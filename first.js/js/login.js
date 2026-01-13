function login () {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const error = document.getElementById('error')
    

    if (username === "Bilog" && password === "1024") {
        error.innerHTML = "Login successful";
        error.style.color = "green";
        error.style.backgroundColor = "yellow"
        error.style.visibility = "visible"; 

    } else {
        error.innerHTML = "Invalid username or password";
        error.style.visibility = "visible"; 
        error.style.color = "red";
    }
}
