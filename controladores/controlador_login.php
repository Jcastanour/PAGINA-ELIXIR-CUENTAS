<?php
session_start();
include "../modelo/conexion.php"; // Asegúrate de incluir tu archivo de conexión

if (!empty($_POST['btningresar'])) {
    if (!empty($_POST["usuario"]) && !empty($_POST["contrasena"])) {
        $usuario = $_POST["usuario"];
        $contrasena = $_POST["contrasena"];

        // Consulta SQL para obtener usuario, contraseña y estado
        $sql = $conexion->prepare("SELECT * FROM usuarios WHERE usuario = ? AND contrasena = ?");
        $sql->bind_param('ss', $usuario, $contrasena);
        $sql->execute();
        $datos = $sql->get_result()->fetch_assoc();

        if ($datos) {
            // Verificar si el estado del usuario es activo
            if ($datos['estado'] === 'Activo') {
                $_SESSION['id'] = $datos['id'];
                $_SESSION['usuario'] = $datos['usuario'];
                $_SESSION['id_cargo'] = $datos['id_cargo'];

                // Redirigir según el cargo del usuario
                if ($datos['id_cargo'] == 1) {
                    header("Location: admin.php");
                } else if ($datos['id_cargo'] == 2) {
                    header("Location: index.php");
                } else {
                    echo 'Acceso denegado';
                }
            } else {
                echo 'Cuenta inactiva. Contacte al administrador.';
            }
        } else {
            echo 'Acceso denegado. Usuario o contraseña incorrectos.';
        }

        $sql->close();
    } else {
        echo "Campos vacíos";
    }
}
