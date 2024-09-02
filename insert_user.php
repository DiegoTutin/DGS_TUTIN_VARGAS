<?php
include("connection.php");
$con = connection();

$nombre = $_POST['nombre'];
$apellido = $_POST['apellido'];
$tipoDocumento = $_POST['tipoDocumento'];
$documento = $_POST['documento'];
$telefono = $_POST['telefono'];
$fechaNacimiento = $_POST['fechaNacimiento'];
$salario = $_POST['salario'];
$email = $_POST['email'];
$direccionWeb = $_POST['direccionWeb'];
$password = password_hash($_POST['password'], PASSWORD_BCRYPT); // Encriptar la contraseña

$sql = "INSERT INTO users (nombre, apellido, tipoDocumento, documento, telefono, fechaNacimiento, salario, email, direccionWeb, password) 
        VALUES ('$nombre', '$apellido', '$tipoDocumento', '$documento', '$telefono', '$fechaNacimiento', '$salario', '$email', '$direccionWeb', '$password')";
$query = mysqli_query($con, $sql);

if ($query) {
    header("Location: index.php");
} else {
    echo "Error al registrar el usuario.";
}
?>
    