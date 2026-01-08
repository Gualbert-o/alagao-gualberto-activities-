function login () {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    if((username == "Bilog") && (password == "1024")) {
        alert("Login successful");
    }
    else {
        alert ("Username or Password is incorrect");
    }
}