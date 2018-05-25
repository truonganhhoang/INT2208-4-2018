<?php

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
    <title>1.3</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <link rel="stylesheet" href="../css/style.css">
    <link rel="stylesheet" href="../css/1.3.css">
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
                                <?php
                                echo $_SESSION['username'];
                                ?>
                                </a>
                                <div class='dropdown-menu' aria-labelledby='navbarDropdownMenuLink'>
                                    
                                    <a class='dropdown-item' href='logout.php'>Log out</a>
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
                <div class="col-sm-9">
                    <div class="cate-detail" id="english">
                        <h2>English</h2>
                        <div class="grid">
                            <figure class="effect-marley">
                                <img src="../img/1.jpg" alt="img11"/>
                                <figcaption>
                                    <h2>Lession 1 : <span>Animal</span></h2>
                                    <p>Listen and read vocabulary about animals</p>
                                    <a href="1.3.1.2.php">View more</a>
                                </figcaption>			
                            </figure>
                            <figure class="effect-marley">
                                <img src="../img/2.jpg" alt="img12"/>
                                <figcaption>
                                    <h2>Lession 2 : <span>Job</span></h2>
                                    <p>Listen and read career vocabulary.</p>
                                    <a href="1.3.1.2.php">View more</a>
                                </figcaption>			
                            </figure>
                        </div>
                    </div>
                    <!-- cate-detail English -->
                    <div class="cate-detail" id="french">
                        <h2>French</h2>
                        <div class="grid">
                            <figure class="effect-marley">
                                <img src="../img/3.jpg" alt="img11"/>
                                <figcaption>
                                    <h2>Lession 1 : <span>Animal</span></h2>
                                    <p>Listen and read vocabulary about animals</p>
                                    <a href="1.3.1.2.php">View more</a>
                                </figcaption>			
                            </figure>
                            <figure class="effect-marley">
                                <img src="../img/4.jpg" alt="img12"/>
                                <figcaption>
                                    <h2>Lession 2 : <span>Job</span></h2>
                                    <p>Listen and read career vocabulary.</p>
                                    <a href="1.3.1.2.php">View more</a>
                                </figcaption>			
                            </figure>
                        </div>
                    </div>
                    <!-- cate-detail French -->
                    <div class="cate-detail" id="japanese">
                        <h2>Japanese</h2>
                        <div class="grid">
                            <figure class="effect-marley">
                                <img src="../img/5.jpg" alt="img11"/>
                                <figcaption>
                                    <h2>Lession 1 : <span>Animal</span></h2>
                                    <p>Listen and read vocabulary about animals</p>
                                    <a href="1.3.1.2.php">View more</a>
                                </figcaption>			
                            </figure>
                            <figure class="effect-marley">
                                <img src="../img/6.jpg" alt="img12"/>
                                <figcaption>
                                    <h2>Lession 2 : <span>Job</span></h2>
                                    <p>Listen and read career vocabulary.</p>
                                    <a href="1.3.1.2.php">View more</a>
                                </figcaption>			
                            </figure>
                        </div>
                    </div>
                    <!-- cate-detail Japanese -->
                    <div class="cate-detail" id="german">
                        <h2>German</h2>
                        <div class="grid">
                            <figure class="effect-marley">
                                <img src="../img/7.jpg" alt="img11"/>
                                <figcaption>
                                    <h2>Lession 1 : <span>Animal</span></h2>
                                    <p>Listen and read vocabulary about animals</p>
                                    <a href="1.3.1.2.php">View more</a>
                                </figcaption>			
                            </figure>
                            <figure class="effect-marley">
                                <img src="../img/8.jpg" alt="img12"/>
                                <figcaption>
                                    <h2>Lession 2 : <span>Job</span></h2>
                                    <p>Listen and read career vocabulary.</p>
                                    <a href="1.3.1.2.php">View more</a>
                                </figcaption>			
                            </figure>
                        </div>
                    </div>
                    <!-- cate-detail German -->
                    <div class="cate-detail" id="korean">
                        <h2>Korean</h2>
                        <div class="grid">
                            <figure class="effect-marley">
                                <img src="../img/9.jpg" alt="img11"/>
                                <figcaption>
                                    <h2>Lession 1 : <span>Animal</span></h2>
                                    <p>Listen and read vocabulary about animals</p>
                                    <a href="1.3.1.2.php">View more</a>
                                </figcaption>			
                            </figure>
                            <figure class="effect-marley">
                                <img src="../img/10.jpg" alt="img12"/>
                                <figcaption>
                                    <h2>Lession 2 : <span>Job</span></h2>
                                    <p>Listen and read career vocabulary.</p>
                                    <a href="1.3.1.2.php">View more</a>
                                </figcaption>			
                            </figure>
                        </div>
                    </div>
                    <!-- cate-detail Korean -->

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