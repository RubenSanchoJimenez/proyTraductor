<?php
header('Content-Type: application/json');

$servidorbd = "2daw.esvirgua.com";
$usuario = "user2daw_19";
$contraseña = "z~?R*g9xqKtT"; 
$basedatos = "user2daw_BD1-19";

try {
    $conexion = new PDO("mysql:host=$servidorbd;dbname=$basedatos", $usuario, $contraseña);

    $conexion->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    $sql = "SELECT nombre FROM idiomas ORDER BY nombre;";
    $stmt = $conexion->query($sql);

    $filas = $stmt->fetchAll(PDO::FETCH_ASSOC);

    $jsonResultado = json_encode($filas);

    echo $jsonResultado;

} catch (PDOException $e) {
    echo "Error de conexión: " . $e->getMessage();
}
?>
