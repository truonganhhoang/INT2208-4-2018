<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>1.1</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
</head>
<body>
    <?php
    session_start();
    require_once("connection.php");

    if (isset($_POST["btn_submit"])) {
		
		$username = $_POST["username"];
		$password = $_POST["password"];
		
		$username = strip_tags($username);
		$username = addslashes($username);
		$password = strip_tags($password);
		$password = addslashes($password);
		if ($username == "" || $password =="") {
			echo "Require";
		}else{
			$sql = "select * from account where username = '$username' and password = '$password' ";
            $query = mysqli_query($conn,$sql);

            $sql_admin = "select * from account where username = '$username' and password = '$password' and id = 1";
            $query_admin = mysqli_query($conn, $sql_admin);

            $num_rows = mysqli_num_rows($query);
            $num_rows_admin = mysqli_num_rows($query_admin);
			if ($num_rows==0) {
				echo "Username error!";
            }
            elseif($num_rows == 1 && $num_rows_admin == 1)
            {
                $_SESSION['admin'] = $username;
                header('Location: admin.php');
            }
            
            elseif($num_rows == 1 && $num_rows_admin ==0)
            {
				$_SESSION['username'] = $username;
                header('Location: 1.3.php');
			}
		}
	}
    
    ?>
    <div class="navbar-top container-fluid fixed-top">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="./1.html"><h2>Memrise</h2></a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
                <ul class="navbar-nav">
                    <li class="nav-item active">
                        <a class="nav-link" href="./1.3.php">Courses<span class="sr-only">(current)</span></a>
                    </li>
                    
                    <li class="nav-item active">
                        <a class="nav-link" href="./1.2.php">Sign up</a>
                    </li>
                    <li class="nav-item dropdown active">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Language
                        </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <a class="dropdown-item" href="#">Vietnamese</a>
                            <a class="dropdown-item" href="#">Korean</a>
                            <a class="dropdown-item" href="#">French</a>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
    <div class="form-log-in container" style="margin-top: 190px;">
        <form class="form-horizontal" role="form" method="POST" action="1.1.php">
            <div class="row">
                <div class="col-md-3"></div>
                <div class="col-md-6">
                    <h2>Please Login</h2>
                    <hr>
                </div>
            </div>
            <div class="row">
                <div class="col-md-3"></div>
                <div class="col-md-6">
                    <div class="form-group has-danger">
                        <label class="sr-only" for="email">E-Mail Address</label>
                        <div class="input-group mb-2 mr-sm-2 mb-sm-0">
                            <div class="input-group-addon" style="width: 2.6rem"><i class="fa fa-user"></i></div>
                            <input type="text" name="username" class="form-control" id="username"
                                   placeholder="Username" required autofocus>
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="form-control-feedback">
                        <span class="text-danger align-middle">
                            <i class="fa fa-close"></i> Example error message
                        </span>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-3"></div>
                <div class="col-md-6">
                    <div class="form-group">
                        <label class="sr-only" for="password">Password</label>
                        <div class="input-group mb-2 mr-sm-2 mb-sm-0">
                            <div class="input-group-addon" style="width: 2.6rem"><i class="fa fa-key"></i></div>
                            <input type="password" name="password" class="form-control" id="password"
                                   placeholder="Password" required>
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="form-control-feedback">
                        <span class="text-danger align-middle">
                        <!-- Put password error message here -->    
                        </span>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-3"></div>
                <div class="col-md-6" style="padding-top: .35rem">
                    <div class="form-check mb-2 mr-sm-2 mb-sm-0">
                        <label class="form-check-label">
                            <input class="form-check-input" name="remember"
                                   type="checkbox" >
                            <span style="padding-bottom: .15rem">Remember me</span>
                        </label>
                    </div>
                </div>
            </div>
            <div class="row" style="padding-top: 1rem">
                <div class="col-md-3"></div>
                <div class="col-md-6">
                    <button type="submit" name = "btn_submit" class="btn btn-success"><i class="fa fa-sign-in"></i> Login</button>
                    <a class="btn btn-link" href="/password/reset">Forgot Your Password?</a>
                </div>
            </div>
        </form>
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