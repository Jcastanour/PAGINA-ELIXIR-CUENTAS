<?php 
session_start();

if(empty($_SESSION['id'])){
  header('location: login.php');
}

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>admin</title>
</head>
<body>
    admin

    <a href="controladores/cerrar_sesion.php">
        Cerrar sesion
    </a>
</body>
</html>