<?php

require_once ("Connection.php");
session_start();
if (!isset($_SESSION['username'])) {
    header('Location: 1.1.php');
}

?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>1.3.1.2</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <link rel="stylesheet" href="../css/style.css">
    <link rel="stylesheet" href="../css/1.3.css">
    <style>
    table {
        width: 100%;
        border-collapse: collapse;
    }

    table, td, th {
        border: 1px solid black;
        padding: 5px;
    }

    th {text-align: left;}
</style>
</head>
<body>
    
    <div class="navbar-top container-fluid fixed-top">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="./1.html"><h2>Memrise</h2></a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
                    <div class='collapse navbar-collapse' id='navbarNavDropdown'>
                        <ul class='navbar-nav'>
                            <li class='nav-item dropdown active'>
                                <a class='nav-link dropdown-toggle' href='#' id='navbarDropdownMenuLink' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>
                                <?php echo $_SESSION['username']; ?>
                                </a>
                                <div class='dropdown-menu' aria-labelledby='navbarDropdownMenuLink'>
                                    
                                    <a class='dropdown-item' href='1.1.php'>Log out</a>
                                </div>
                            </li>
                        </ul>
                    </div>
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
                                    <a href="#english">English</a>
                                </li>
                                <li>
                                    <img src="https://d2rhekw5qr4gcj.cloudfront.net/uploads/language_photos/DemoFlags-02_copy.png" alt="French" style="width: 18px; height: auto">
                                    <a href="#french">French</a>
                                </li>
                                <li>
                                    <img src="https://d2rhekw5qr4gcj.cloudfront.net/uploads/category_photos/DemoFlags-09_copy.png" alt="Japanese" style="width: 18px; height: auto">
                                    <a href="#japanese">Japanese</a>
                                </li>
                                <li>
                                    <img src="https://d2rhekw5qr4gcj.cloudfront.net/uploads/language_photos/german.png" alt="German" style="width: 18px; height: auto">
                                    <a href="#german">German</a>
                                </li>
                                <li>
                                    <img src="https://d2rhekw5qr4gcj.cloudfront.net/uploads/category_photos/korean-flag.png" alt="Korean" style="width: 18px; height: auto">
                                    <a href="#korean">Korean</a>
                                </li>
                            </ul>
                        </div>
                        <!-- link-categories -->
                    </div>
                    <!-- top-categories -->

                </div>
                <div class="col-sm-9" style="margin-top: 50px">
                    
                <?php

                    $sql = "SELECT word , mean, subject FROM vocabulary";

                    $result = mysqli_query($conn, $sql);
                    echo "<table>
                    <tr>
                    <th>Word</th>
                    <th>Mean</th>
                    <th>Subject</th>
                    </tr>";
                    while($row = mysqli_fetch_array($result)) {
                        echo "<tr>";
                        echo "<td>" . $row['word'] . "</td>";
                        echo "<td>" . $row['mean'] . "</td>";
                        echo "<td>" . $row['subject'] . "</td>";
                        echo "</tr>";
                    }
                    echo "</table>";
                    mysqli_close($conn);
                    ?>
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
    <script src="../js/javascript.js"></script>
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>


</body>
</html>