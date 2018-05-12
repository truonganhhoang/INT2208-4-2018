<?php

    session_start();
    require_once("connection.php");
    if($_GET['act'] == "do")
    {
        $username = addslashes($_POST['username']);
        $password = md5(addslashes($_POST['password']));

        $sql_query = @mysql_query("SELECT id, username, password FROM account WHERE username='{$username}'");
        $member = @mysql_fetch_array( $sql_query );

        if ( @mysql_num_rows( $sql_query ) <= 0 )
        {
            print "Tên truy nhập không tồn tại. <a href='javascript:history.go(-1)'>Nhấp vào đây để quay trở lại</a>";
            exit;
        }
        if ( $password != $member['password'] )
        {
            print "Nhập sai mật khẩu. <a href='javascript:history.go(-1)'>Nhấp vào đây để quay trở lại</a>";
            exit;
        }
        $_SESSION['user_id'] = $member['id'];
        $_SESSION['user_admin'] = $member['admin'];
        print "Bạn đã đăng nhập với tài khoản {$member['username']} thành công. <a href='/btl/html/1.3.php'>Nhấp vào đây để vào trang chủ</a>";
    }

?>