<?php

require_once("connection.php");

if($_GET['act'] == "do")
{
    $username = addslashes($_POST['username']);
    $password = addslashes(md5($_POST['password']));
    $confirmpassword = addslashes(md5($_POST['confirmpassword']));
    $email = addslashes($_POST['email']);
    $name = addslashes($_POST['name']);
    $birthday = addslashes($_POST['birthday']);
    if(!$username || !$_POST['password'] || !$_POST['confirmpassword'] || !$email || !$name || !$birthday)
    {
        print "Xin vui lòng nhập đầy đủ các thông tin. <a href='javascript:history.go(-1)'>Nhấp vào đây để quay trở lại</a>";
        exit;
    }
    if ( mysql_num_rows(mysql_query("SELECT username FROM account WHERE username='$username'"))>0)
    {
        print "Username này đã có người dùng, Bạn vui lòng chọn username khác. <a href='javascript:history.go(-1)'>Nhấp vào đây để quay trở lại</a>";
        exit;
    }
    if ( mysql_num_rows(mysql_query("SELECT email FROM account WHERE email='$email'"))>0)
    {
        print "Email này đã có người dùng, Bạn vui lòng chọn Email khác. <a href='javascript:history.go(-1)'>Nhấp vào đây để quay trở lại</a>";
        exit;
    }
    if ( $password != $confirmpassword )
    {
        print "Mật khẩu không giống nhau, bạn hãy nhập lại mật khẩu. <a href='javascript:history.go(-1)'>Nhấp vào đây để quay trở lại</a>";
        exit;
    }
    @$a=mysql_query("INSERT INTO account (username, password, email, name, birthday) VALUES ('{$username}', '{$password}', '{$email}', '{$name}', '{$birthday}')");
    // Thông báo hoàn tất việc tạo tài khoản
    if ($a)
        print "Tài khoản {$username} đã được tạo. <a href='login.php'>Nhấp vào đây để đăng nhập</a>";
    else
        print "Có lỗi trong quá trình đăng kí, Vui lòng liên hệ BQT";
}

?>