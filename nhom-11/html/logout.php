<?php
session_start();
if (session_destroy()) 
    echo "Thoát thành công!";
else
    echo "Không thể thoát dc, có lỗi trong việc hủy session";
 
echo '<br><a href="/btl/html/1.html">Bấm vào đây để quay lại trang chủ<br></a>';
?>