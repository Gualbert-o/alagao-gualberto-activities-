<?php
// login.php

$correctUser = "admin";
$correctPass = "1234";

$username = $_POST['username'];
$password = $_POST['password'];

if ($username === $correctUser && $password === $correctPass) {
    echo "Login successful!";
} else {
    echo "Invalid username or password.";
}
?> 