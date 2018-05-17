<?php

require_once("connection.php");
session_start();
if (!isset($_SESSION['admin'])) {
    header('Location: 1.1.php');
}

?>


<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>ADMIN</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
</head>
<body>
    <div class="navbar-top container-fluid fixed-top">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="../html/1.html"><h2>Memrise</h2></a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
                <ul class="navbar-nav">
                    <li class="nav-item active">
                        <a class="nav-link" href="../html/1.3.html">Courses<span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item dropdown active">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <?php
                            echo $_SESSION['admin'];
                            ?>
                        </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            
                            <a class="dropdown-item" href="logout.php">Logout</a>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
    <!-- navbar-top -->

    <div class="page-head container" style="margin-top: 100px">
        <div class="row">

                <div style = "background-color : honeydew" class="col-md-3">
                        <form action="admin.php" method="post">
                        
                        <h5>Add word : </h5>
                        <input type="text" name = "word" placeholder="Word">
                        <br>
                        <h5>Mean : </h5>
                        <input type="text" name = "mean" placeholder = "Mean">
                        <br>
                        <h5>Subject : </h5>
                        <input type="text" name = "subject" placeholder = "Subject"><br><br>
                        <button type="submit" name = "btn_submit" class="btn btn-success">Add</button>
                        </form>
                    </div>    
                        <?php
                        if(isset($_POST['btn_submit']))
                        {
                            $word = $_POST['word'];
                            $mean = $_POST['mean'];
                            $subject = $_POST['subject'];
                            if($word == "" || $mean == "" || $subject == "")
                            {
                                echo "Please, fill up.";
                            }
                            else
                            {
                                $sql = "select * from vocabulary where word = '$word'";
                                $kt = mysqli_query($conn, $sql);
                                if(mysqli_num_rows($kt)>0)
                                {
                                    
                                }
                                else
                                {
                                    $sql = "INSERT INTO vocabulary(
                                        word,
                                        mean,
                                        subject
                                        ) VALUES (
                                        '$word',
                                        '$mean',
                                        '$subject'
                                        )";
                                        mysqli_query($conn, $sql);
                                }
                            }
                        }
                        
                        ?>
                    <!-- <div class="col-md-3" style="background-color: #FFF">
                        <h5>Edit word</h5>
                        <input type="text" name="edit-word" placeholder="Word.">
                        <br>
                        <h5>Mean : </h5>
                        <input type="text" name = "edit-mean" placeholder = "Mean">
                        <br>
                        <h5>Subject : </h5>
                        <input type="text" name = "edit-subject" placeholder = "Subject">
                        <br> <br>
                        <button type="submit" name = "btn-submit-edit" class="btn btn-success">Edit</button>
                    </div>
                    <div class="col-md-3" style="background-color: honeydew">
                        <form action="admin.php" method="post">
                            <h5>Delete word</h5>
                            <input type="text" name="delete" placeholder="Word.">
                            <br><br>
                            <button type="submit" name = "btn_submit_del" class="btn btn-success">Delete</button>
                        </form>
                        
                    </div> -->
                </div>
                <!-- add word -->

        </div>
        
    

    <footer class="page-foot container" style="margin-top:40px;">
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
    <!-- footer -->
    <script defer src="https://use.fontawesome.com/releases/v5.0.6/js/all.js"></script>
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
</body>
</html> 