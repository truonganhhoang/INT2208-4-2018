<?php
$user=$_POST['user'];
$pass=$_POST['pass'];
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
} 

$sql = "SELECT user,pass from user";
$result = $conn->query($sql);
$res="0";

if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {
	if ($row["user"] == $user && $row["pass"]==$pass) { 
		$res="1"; 
		break;
	}
   }
		
}
echo $res;
$conn->close();
?>
