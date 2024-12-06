<?php

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "feedbackDB"; 

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $conn->real_escape_string($_POST['name']);
    $email = $conn->real_escape_string($_POST['email']);
    $comments = $conn->real_escape_string($_POST['comments']);

    $sql = "INSERT INTO feedback (name, email, comments) VALUES ('$name', '$email', '$comments')";

    if ($conn->query($sql) === TRUE) {
        echo "Thank you for your feedback!";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
}

$conn->close();
?>
