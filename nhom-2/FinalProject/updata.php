<?php
//$rq="1";
//$txt="1|0||12121|0||232";
$rq=$_POST['rq'];
$txt=$_POST['txt'];
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
if ($rq=="0")
{
	$result = $conn->query("INSERT INTO subject(text) values('".$txt."')");
	$result= $conn->query("SELECT COUNT(*) as 'n' FROM subject");
	$row=$result->fetch_assoc();
	echo $row["n"];
	exit(0);
} else
{
	list($subjectid,$type1,$img1,$txt1,$type2,$img2,$txt2,$id)=explode("|",$txt);
	$result = $conn->query("INSERT INTO card(subjectid,type1,img1,txt1,type2,img2,txt2,id) values('".$subjectid."','".$type1."','".$img1."','".$txt1."','".$type2."','".$img2."','".$txt2."','".$id."');");
	echo $result;
	
}
$conn->close();
?>
