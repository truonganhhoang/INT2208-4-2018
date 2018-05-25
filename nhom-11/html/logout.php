<?php session_start(); 
 
if (isset($_SESSION['username']) || isset($_SESSION['admin'])){
    session_destroy(); // xóa session login
}
header('Location: 1.1.php');
?>