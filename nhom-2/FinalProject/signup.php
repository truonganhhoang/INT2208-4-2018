<?php
$user=$_POST['user'];
$pass=$_POST['pass'];
$email=$_POST['email'];
if ((empty($user)) || (empty($pass)) || (empty($email)))
{
	echo "-1";
	exit(0);
}
$servername = "localhost";
$username = "toandx";
$password = "27081998";
$dbname = "web";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
	echo "0";
	exit(0);
} 
$sql = "SELECT user,pass,email from user";
$result = $conn->query($sql);
$res="1";
if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {
		if ($row["user"]==$user) { $res="0"; break;}	
}
} else $res="0";
if ($res=="0")
{
	echo "0";
	exit(0);
}
$sql = "INSERT INTO user (User, Pass, email)
VALUES ('".$user."','".$pass."','".$email."')";
$result=$conn->query($sql);
if ($result)
	echo "1"; else echo "0";
$conn->close();
?>