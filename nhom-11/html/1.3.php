<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>1.3</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
</head>
<body>
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
        // $_SESSION['user_admin'] = $member['admin'];
    }
    
    ?>
    <div class="navbar-top container-fluid fixed-top">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="/btl/html/1.html"><h2>Memrise</h2></a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <?php 
            if ( !$_SESSION['user_id'] )
            { 
                echo "Bạn chưa đăng nhập! <a href='/btl/html/1.1.html'>Nhấp vào đây để đăng nhập</a> hoặc <a href='/btl/html/1.2.html'>Nhấp vào đây để đăng ký</a>"; 
            }
            else
            {
                $user_id = intval($_SESSION['user_id']);
                $sql_query = @mysql_query("SELECT * FROM account WHERE id='{$user_id}'");
                $member = @mysql_fetch_array( $sql_query ); 
                echo "
                    <div class='collapse navbar-collapse' id='navbarNavDropdown'>
                        <ul class='navbar-nav'>
                            <li class='nav-item active'>
                                <a class='nav-link' href='/btl/html/1.3.html'>Courses<span class='sr-only'>(current)</span></a>
                            </li>
                            
                            <li class='nav-item dropdown active'>
                                <a class='nav-link dropdown-toggle' href='#' id='navbarDropdownMenuLink' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>
                                {$member['username']}
                                </a>
                                <div class='dropdown-menu' aria-labelledby='navbarDropdownMenuLink'>
                                    <a class='dropdown-item' href='/btl/html/changeinfo.php'>Edit Profile</a>
                                    <a class='dropdown-item' href='/btl/html/1.1.html'>Log out</a>
                                </div>
                            </li>
                        </ul>
                    </div>
                    ";
                // echo "Bạn đang đăng nhập với tài khoản {$member['username']}."; 
                // echo "<br><a href='/btl/html/changeinfo.php'>Sửa thông tin</a>";
                // if ($member['admin']=="1")  echo "<br><a href='/btl/html/admin.php'>Trang quản trị</a>";
                // echo "<br><a href='/btl/html/logout.php'>Thoát ra</a>";
            }
            
            ?>
            
        </nav>
    </div>
    <div class="container" style="margin-top: 100px;">

        <div class="nav-body">
            <nav class="navbar navbar-light bg-light justify-content-between">
                <a class="navbar-brand">Courses</a>
                <form class="form-inline">
                  <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
                  <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
              </nav>
        </div>

        <div class="content-body container">

            <div class="row">
                <div class="col-sm-3" style="margin-top:20px;">
                    <div class="speak-language">
                        <h5>I speak:</h5>

                        <div class="container" style="margin-top:20px;">
                            <select class="custom-select" style="text-align:center">
                                <option value="1" selected="selected">Japan</option>
                                <option value="2">English</option>
                                <option value="3">Korean</option>
                                <option value="4">Vietnamese</option>
                            </select>
                        </div>
                    </div>
                    <!-- speak-language -->

                    <div class="top-categories" style="margin-top: 20px;">
                        <h5>Top Categories</h5>

                        <div class="link-categories">
                            <ul class="list-categories" style="list-style-type: none;">
                                <li>
                                    <img src="https://d2rhekw5qr4gcj.cloudfront.net/uploads/category_photos/en.png" alt="english" style="width: 18px; height: auto">
                                    <h6>English</h6>
                                </li>
                                <li>
                                    <img src="https://d2rhekw5qr4gcj.cloudfront.net/uploads/language_photos/DemoFlags-02_copy.png" alt="French" style="width: 18px; height: auto">
                                    <h6>French</h6>
                                </li>
                                <li>
                                    <img src="https://d2rhekw5qr4gcj.cloudfront.net/uploads/category_photos/DemoFlags-09_copy.png" alt="Japanese" style="width: 18px; height: auto">
                                    <h6>Japanese</h6>
                                </li>
                                <li>
                                    <img src="https://d2rhekw5qr4gcj.cloudfront.net/uploads/language_photos/german.png" alt="German" style="width: 18px; height: auto">
                                    <h6>German</h6>
                                </li>
                                <li>
                                    <img src="https://d2rhekw5qr4gcj.cloudfront.net/uploads/category_photos/korean-flag.png" alt="Korean" style="width: 18px; height: auto">
                                    <h6>Korean</h6>
                                </li>
                            </ul>
                        </div>
                        <!-- link-categories -->
                    </div>
                    <!-- top-categories -->

                </div>
                <div class="col-sm-9">
                    <div class="row">
                        <div class="col-md-4" style="margin-top:20px;">
                            <div class="categories">
                                <div>
                                    <img src="https://d2rhekw5qr4gcj.cloudfront.net/img/400sqf/from/uploads/course_photos/32000160516082116.jpg" alt="French1" class="img-thumbnail">
                                </div>
                                <a href="#">French 1</a>
                                <h5>French</h5>
                            </div>
                            <div class="categories">
                                    <div>
                                        <img src="https://d2rhekw5qr4gcj.cloudfront.net/img/400sqf/from/uploads/course_photos/32000160516091004.jpg" alt="French1" class="img-thumbnail">
                                    </div>
                                    <a href="#">German 2</a>
                                    <h5>German</h5>
                            </div>
                            <div class="categories">
                                    <div>
                                        <img src="https://d2rhekw5qr4gcj.cloudfront.net/img/400sqf/from/uploads/course_photos/54074000140107153433.jpg" alt="Japanese" class="img-thumbnail">
                                    </div>
                                    <a href="#">Japanese 3</a>
                                    <h5>Janpanese</h5>
                            </div>
                        </div>
                        <div class="col-md-4" style="margin-top:20px;">
                                <div class="categories">
                                        <div>
                                            <img src="https://d2rhekw5qr4gcj.cloudfront.net/img/400sqf/from/uploads/course_photos/16054981000161215151931.jpg" alt="German 1" class="img-thumbnail">
                                        </div>
                                        <a href="#">German 1</a>
                                        <h5>German</h5>
                                </div>
                                
                                <div class="categories">
                                        <div>
                                            <img src="https://d2rhekw5qr4gcj.cloudfront.net/img/400sqf/from/uploads/course_photos/11330722000170203122647.jpg" alt="Janpanese" class="img-thumbnail">
                                        </div>
                                        <a href="#">Japanese</a>
                                        <h5>Janpanese</h5>
                                </div>
                                <div class="categories">
                                        <div>
                                            <img src="https://d2rhekw5qr4gcj.cloudfront.net/img/400sqf/from/uploads/course_photos/16054981000161215152009.jpg" alt="Gernam 3" class="img-thumbnail">
                                        </div>
                                        <a href="#">German 3</a>
                                        <h5>German</h5>
                                </div>
                        </div>
                        <div class="col-md-4" style="margin-top:20px;">
                                <div class="categories">
                                        <div>
                                            <img src="https://d2rhekw5qr4gcj.cloudfront.net/img/400sqf/from/uploads/course_photos/14220649000170103192618.jpg" alt="French1" class="img-thumbnail">
                                        </div>
                                        <a href="#">Korean</a>
                                        <h5>Korean</h5>
                                </div>
                                <div class="categories">
                                        <div>
                                            <img src="https://d2rhekw5qr4gcj.cloudfront.net/img/400sqf/from/uploads/course_photos/32000160516082129.jpg" alt="French1" class="img-thumbnail">
                                        </div>
                                        <a href="#">French 2</a>
                                        <h5>French</h5>
                                </div>
                                <div class="categories">
                                        <div>
                                            <img src="https://d2rhekw5qr4gcj.cloudfront.net/img/400sqf/from/uploads/course_photos/11330722000170203122950.jpg" alt="Japanese" class="img-thumbnail">
                                        </div>
                                        <a href="#">Janpanese</a>
                                        <h5>Janpanese</h5>
                                </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    </div>

    <footer class="page-foot container" style="margin-top:100px;">
        <div class="row">
            <div class="col-md-6" style="text-align:center;">
                <h4>Contact</h4>
                <br />
                <a href="#"><i class="fab fa-facebook-square" style="font-size:40px;margin:0px 20px;"></i></a>
                <a href="#"><i class="fab fa-twitter-square" style="font-size:40px;margin:0px 20px;"></i></a>
                <a href="#"><i class="fab fa-linkedin" style="font-size:40px;margin:0px 20px;"></i></a>
            </div>
            <div class="col-md-6" style="text-align:center">
                <h4>Copyright by Memrise</h4>
            </div>
        </div>
    </footer>

    <script defer src="https://use.fontawesome.com/releases/v5.0.6/js/all.js"></script>
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>


</body>
</html>