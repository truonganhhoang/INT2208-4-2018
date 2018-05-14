<<<<<<< HEAD
<?php

    if ( 0 < $_FILES['file']['error'] ) {
        //echo 'Error: ' . $_FILES['file']['error'] . '<br>';
		echo "-2";
		return;
    } 
	if (file_exists("uploads/".$_FILES['file']['name']))
	{
		echo "-1";
		return;
	}
	if (($_FILES["file"]["type"] == "image/png") || ($_FILES["file"]["type"] == "image/jpg") || ($_FILES["file"]["type"] == "image/jpeg"))
    {
        move_uploaded_file($_FILES['file']['tmp_name'], 'uploads/' . $_FILES['file']['name']);
		echo $_FILES['file']['name'];
    } else
	echo "0";

?>
=======
<?php

    if ( 0 < $_FILES['file']['error'] ) {
        //echo 'Error: ' . $_FILES['file']['error'] . '<br>';
		echo "-2";
		return;
    } 
	if (file_exists("uploads/".$_FILES['file']['name']))
	{
		echo "-1";
		return;
	}
	if (($_FILES["file"]["type"] == "image/png") || ($_FILES["file"]["type"] == "image/jpg") || ($_FILES["file"]["type"] == "image/jpeg"))
    {
        move_uploaded_file($_FILES['file']['tmp_name'], 'uploads/' . $_FILES['file']['name']);
		echo $_FILES['file']['name'];
    } else
	echo "0";

?>
>>>>>>> c65cf1a6cb3051a59e512043cd98683b2d07b006
