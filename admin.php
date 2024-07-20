<?php
session_start();

if (empty($_SESSION['id']) || $_SESSION['id_cargo'] == 2) {
    header('location: index.php');
}

?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>admin</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <script src="https://kit.fontawesome.com/97fac4f93d.js" crossorigin="anonymous"></script>
</head>

<body>
    <h1 class="text-center p-3">admin</h1>
    <div class="container-fluid row">
        <form class="col-4 p-3">
            <h3 class="col-4">Registro clientes</h3>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Nombre</label>
                <input type="text" class="form-control" name=nombre>
            </div>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Usuario</label>
                <input type="text" class="form-control" name=usuario>
            </div>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Whatasapp</label>
                <input type="text" class="form-control" name=whatsapp>
            </div>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Contraseña</label>
                <input type="text" class="form-control" name=contrasena>
            </div>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">tipo</label>
                <input type="text" class="form-control" name=contrasena>
            </div>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Fecha</label>
                <input type="text" class="form-control" name=fecha>
            </div>
            <div class="mb-3">
                <button type="submit" class="btn btn-primary" name="btnregistrar" value="ok">Registrar</button>
            </div>
        </form>

        <div class="col-8 p-4">
            <table class="table">
                <thead class="bg-info">
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">NOMBRE</th>
                        <th scope="col">WHASTAPP</th>
                        <th scope="col">USUARIO</th>
                        <th scope="col">CONTRASEÑA</th>
                        <th scope="col">TIPO</th>
                        <th scope="col">VENCE</th>
                        <th scope="col">ESTADO</th>
                        <th scope="col">ACCIONES</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Juan Pablo</td>
                        <td>3024220918</td>
                        <td>juanp1</td>
                        <td>1234</td>
                        <td>Cliente</td>
                        <td>17/08/2024</td>
                        <td>activo</td>
                        <td>
                            <a href="" class="btn btn-small btn-warning"><i class="fa-solid fa-pen-to-square"></i></a>
                            <a href="" class="btn btn-small btn-danger"><i class="fa-solid fa-trash"></i></a>
                        </td </tr>

                </tbody>
            </table>
        </div>

    </div>

    <a href="controladores/cerrar_sesion.php">
        Cerrar sesion
    </a>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
</body>

</html>