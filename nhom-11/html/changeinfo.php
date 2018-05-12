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
    //----Noi dung thong bao sau khi sua
    $success='Sửa thành công <a href="/git/memrise-btl/html/1.1.html">Quay lại</a>';
    $notsuccess='Sửa ko thành công';
    echo "<b>Đang Sửa tài khoản {$member['username']}</b>.<br>"; 
 
 
 
    if ($_GET['do']=="change") {
        $name = addslashes( $_POST['name'] );
        $birthday = addslashes($_POST['birthday']);
        $username = addslashes($_POST['username']);
        $email = addslashes($_POST['email']);
        $passwordcurrent = md5( addslashes( $_POST['passwordcurrent'] ) );
        $passwordnew = md5( addslashes( $_POST['passwordnew'] ) );
        $passwordretype = md5( addslashes( $_POST['passwordretype'] ) );
        $sql="
        UPDATE `account` SET
        `name` = '".$name."',
        `birthday` = '".$birthday."',
        `username` = '".$username."',
        `email` = '".$email."' WHERE `id` =$user_id LIMIT 1 ;";
 
 
        if ($change=mysql_query($sql))
            echo $thanhcong;
        else
            echo $kothanh;
 
        if ($_POST['password']!="") {
            $sqlx="UPDATE `account` SET `password` = '".$passwordnew."' WHERE `id` = '$user_id' LIMIT 1 ;";
            $suapass=mysql_query($sqlx);
            if ($suapass) 
                echo "(Đã đổi pass) ";
            else
                echo "(Chưa đổi pass) ";
        }
    }

} 

?>