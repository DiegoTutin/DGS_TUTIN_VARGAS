<?php
include("connection.php");
$con = connection();
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="style.css" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">
    <title>Registro de Usuario</title>
</head>
<body>
    <div class="users-form">
        <h1>Registrar Usuario</h1>
        <form action="insert_user.php" method="POST" id="miFormulario" onsubmit="return validarFormulario()">
            <div>
                <label for="nombre">Nombre:</label>
                <input type="text" id="nombre" name="nombre">
                <p class="error-message" id="errorNombre"></p>
            </div>
            <div>
                <label for="apellido">Apellido:</label>
                <input type="text" id="apellido" name="apellido">
                <p class="error-message" id="errorApellido"></p>
            </div>

            <div>
                <label for="tipoDocumento">Tipo de Documento:</label>
                <select id="tipoDocumento" name="tipoDocumento" onchange="cambiarTipoDocumento()">
                    <option value="cedula">Cédula</option>
                    <option value="ruc">RUC</option>
                </select>
            </div>
            <div>
                <label for="documento">Número de Documento:</label>
                <input type="text" id="documento" name="documento" maxlength="13">
                <p class="error-message" id="errorDocumento"></p>
            </div>

            <div>
                <label for="telefono">Teléfono:</label>
                <input type="text" id="telefono" name="telefono">
                <p class="error-message" id="errorTelefono"></p>
            </div>
            <div>
                <label for="fechaNacimiento">Fecha de Nacimiento:</label>
                <input type="date" id="fechaNacimiento" name="fechaNacimiento">
                <p class="error-message" id="errorFechaNacimiento"></p>
            </div>
            <div>
                <label for="salario">Salario:</label>
                <input type="number" id="salario" name="salario" min="450" max="5000">
                <p class="error-message" id="errorSalario"></p>
            </div>
            <div>
                <label for="email">Email:</label>
                <input type="email" id="email" name="email">
                <p class="error-message" id="errorEmail"></p>
            </div>
            <div>
                <label for="direccionWeb">Dirección Web:</label>
                <input type="url" id="direccionWeb" name="direccionWeb">
                <p class="error-message" id="errorDireccionWeb"></p>
            </div>
            <div class="password-container">
                <label for="password">Contraseña:</label>
                <div class="password-wrapper">
                    <input type="password" id="password" name="password">
                    <i class="fas fa-eye" id="togglePassword" onclick="mostrarContrasena()"></i>
                </div>
                <p class="error-message" id="errorPassword"></p>
            </div>
            <button type="submit">Enviar</button>
        </form>
    </div>

    <script src="validaciones.js"></script>
    <script>
        function mostrarContrasena() {
            var passwordField = document.getElementById("password");
            var togglePassword = document.getElementById("togglePassword");
            if (passwordField.type === "password") {
                passwordField.type = "text";
                togglePassword.classList.remove("fa-eye");
                togglePassword.classList.add("fa-eye-slash");
            } else {
                passwordField.type = "password";
                togglePassword.classList.remove("fa-eye-slash");
                togglePassword.classList.add("fa-eye");
            }
        }
    </script>
</body>
</html>
