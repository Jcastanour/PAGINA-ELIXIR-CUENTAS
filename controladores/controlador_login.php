<?php 

session_start();


if(!empty($_POST['btningresar'])){
    if (!empty($_POST["usuario"]) and !empty($_POST["contrasena"])){
        $usuario = $_POST["usuario"];
        $contrasena = $_POST["contrasena"];
        echo $usuario;
        echo $contrasena;
        $sql= $conexion->query("SELECT * FROM usuarios where usuario = '$usuario' and contrasena = '$contrasena'");
        $datos = $sql->fetch_array();
        
        if ($datos){
            $_SESSION['id'] = $datos['id'];
            $_SESSION['usuario'] = $datos['usuario'];
            if ($datos['id_cargo'] == 1){
            header("location: admin.php"); 
        } else if ($datos['id_cargo'] == 2){
            header("location: principal.php"); 
        }
        } else {
            echo 'acceso denegado';
        }

    }
    else{
        echo "Campos vacios";
    }
}

?>