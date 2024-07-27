<?php
session_start();

if (!empty($_SESSION['id'])) {
  header('location: index.php');
}

?>

<!DOCTYPE html>
<html lang="es">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Generador de Plantillas</title>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="src/css/styles.css?v=1.1" />
</head>

<body>
  <div class="wrapper">
    <header>
      <img src="src/images/Logo.png" />
      <h1>Iniciar sesion</h1>
    </header>
    <div class="contenedor-formulario">
      <form action="" method="POST">
        <?php
        include "modelo/conexion.php";
        include "controladores/controlador_login.php"
        ?>
        <p>Usuario: <br><input type="text" placeholder="Ingrese usuario" name="usuario"></p>
        <p>Contraseña: <br><input type="password" placeholder="Ingrese contraseña" name="contrasena"></p>
        <input type="submit" class="button" value="Ingresar" name="btningresar">
      </form>
    </div>

  </div>
  </div>

  <script src="src/js/scriptelixir.js"></script>
</body>

</html>