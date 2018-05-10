<?php
$sub=$_GET['sub'];
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
$result = $conn->query("SELECT count(*) as 'n' from subject where text='".$sub."'");
$row=$result->fetch_assoc();
if ($row["n"]==0) echo "-1"; else
{
	$result = $conn->query("SELECT subjectid as 'n' from subject where text='".$sub."'");
	$row=$result->fetch_assoc();
	echo $row["n"]; 
}
$conn->close();
?>
