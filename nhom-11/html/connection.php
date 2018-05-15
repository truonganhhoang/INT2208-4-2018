<?php

$host="localhost";
$username="root";
$password="";
$db_name="memrise";
$table_name="account";

@mysql_connect("{$host}", "{$username}", "{$password}") or die("Không thể kết nối database");
@mysql_select_db("{$db_name}") or die("Không thể chọn database");

?>