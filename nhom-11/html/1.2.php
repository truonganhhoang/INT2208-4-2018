<?php

require_once ('connection.php');

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>1.2</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
</head>
<body>
    <?php
    
    if(isset($_POST['btn_submit']))
    {
        $username = $_POST['username'];
        $password = $_POST['password'];
        $email = $_POST['email'];

        if($username == "" || $password == "" || $email == "")
        {
            echo "Please, fill up!!!";
        }
        else
        {
            $sql = "select * from account where username = '$username'";
            $kt = mysqli_query($conn, $sql);
            if(mysqli_num_rows($kt) > 0)
            {
                echo "";
            }
            else
            {
                $sql = "INSERT INTO account(
                    username,
                    email,
                    password
                    ) VALUES (
                    '$username',
                    '$email',
                    '$password'
                    )";
                    mysqli_query($conn, $sql);
                    header('Location: 1.1.php');
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
                        <a class="nav-link" href="./1.1.php">Log in</a>
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
    <div class="form-sign-up container" style="margin-top: 130px;">
        <form class="form-horizontal" role="form" method="POST" action="1.2.php">
            <div class="row">
                <div class="col-md-3"></div>
                <div class="col-md-6">
                    <h2>Register</h2>
                    <hr>
                </div>
            </div>
            
            <div class="row">

                <div class="col-md-3 field-label-responsive">
                    <label for="name">Username</label>
                </div>
                <div class="col-md-6">
                    <div class="form-group">
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
                                <!-- Put name validation error messages here -->
                            </span>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-3 field-label-responsive">
                    <label for="email">E-Mail Address</label>
                </div>
                <div class="col-md-6">
                    <div class="form-group">
                        <div class="input-group mb-2 mr-sm-2 mb-sm-0">
                            <div class="input-group-addon" style="width: 2.6rem"><i class="fa fa-at"></i></div>
                            <input type="text" name="email" class="form-control" id="email"
                                   placeholder="you@example.com" required autofocus>
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="form-control-feedback">
                            <span class="text-danger align-middle">
                                <!-- Put e-mail validation error messages here -->
                            </span>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-3 field-label-responsive">
                    <label for="password">Password</label>
                </div>
                <div class="col-md-6">
                    <div class="form-group has-danger">
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
                                <i class="fa fa-close"> Example Error Message</i>
                            </span>
                    </div>
                </div>
            </div>
            
            <div class="row">
                <div class="col-md-3"></div>
                <div class="col-md-6">
                    <button type="submit" class="btn btn-success" name="btn_submit"><i class="fa fa-user-plus"></i> Register</button>
                </div>
            </div>
        </form>
    </div>
    <footer class="page-foot container" style="margin-top:90px;">
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