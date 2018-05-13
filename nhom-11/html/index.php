<?php 
session_start();
require_once("connection.php"); 
if ( !$_SESSION['user_id'] )
{ 
    echo "Bạn chưa đăng nhập! <a href='/btl/html/1.1.html'>Nhấp vào đây để đăng nhập</a> hoặc <a href='/btl/html/1.2.html'>Nhấp vào đây để đăng ký</a>"; 
}
else
{
    $user_id = intval($_SESSION['user_id']);
    $sql_query = @mysql_query("SELECT * FROM account WHERE id='{$user_id}'");
    $member = @mysql_fetch_array( $sql_query ); 
    echo "Bạn đang đăng nhập với tài khoản {$member['username']}."; 
    echo "<br><a href='/btl/html/changeinfo.php'>Sửa thông tin</a>";
    if ($member['admin']=="1")  echo "<br><a href='/btl/html/admin.php'>Trang quản trị</a>";
    echo "<br><a href='/btl/html/logout.php'>Thoát ra</a>";
} 
?>