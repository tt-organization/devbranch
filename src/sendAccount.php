<?php

$mysqli = mysqli_connect("localhost", "mattgoo1_mike_w", "youaremyfavorite", "mattgoo1_Truck_Tracker");
$fname = $_POST['firstName'];
$lname = $_POST['lastName'];
$email = $_POST['email'];
$pass = $_POST['password'];
$tel = $_POST['phone'];

//Create Salt
$salt = random_bytes(8);

//encrypt pass
$pass = crypt($pass, $salt);

$stmt = $mysqli->prepare("INSERT INTO Users (First_Name, Last_Name, Email, Password, Phone, Salt) VALUES (?, ?, ?, ?, ?, ?)");
    $stmt->bind_param("ssssss", $fname, $lname, $email, $pass, $tel, $salt);
    $stmt->execute();
    $result = $stmt->get_result();
    // if($result) {
    //     echo "Successfully Added!";
    // } else {
    //     echo "Error adding to database";
    // }

?>