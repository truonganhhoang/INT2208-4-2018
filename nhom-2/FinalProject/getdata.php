<?php
$q=$_GET['q'];
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
if ($q=="0")
{
	$result = $conn->query("SELECT COUNT(*) as 'n' from card where subjectid=".$sub);
	$row=$result->fetch_assoc();
	echo $row["n"];
	exit(0);
} else
{
	$result = $conn->query("SELECT subjectid,type1,img1,txt1,type2,img2,txt2 from card where id=".$q." and subjectid=".$sub);
	$row=$result->fetch_assoc();
	echo $row["type1"]."|".$row["img1"]."|".$row["txt1"]."|".$row["type2"]."|".$row["img2"]."|".$row["txt2"];
	exit(0);
}
$conn->close();
?>
