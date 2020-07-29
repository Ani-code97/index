<?php

    if(isset($_POST['username'])){
        $server = 'localhost';
        $name = "root";
        $password = "";
        $con = mysqli_connect($server, $name, $password);
        if (!con) {
        	die('Connection was interrupted because '.mysqli_connect_error());
        }
        $name = $_POST['username'];
        $email = $_POST['email'];
        $pass = $_POST['password'];
        $message = $_POST['message'];
        $sql = "INSERT INTO `r.k.`.`info` (`Sno.`, `Name`, `Email`, `Password`, `Message`, `dt`) VALUES ('$name', '$email', '$pass', '$message', current_timestamp());";
		if($con->query($sql) == true){
			echo 'Login successful';
		}
		else {
			echo "ERROR: $sql <br> $con->error";
		}
        $con->close;
    }

?>