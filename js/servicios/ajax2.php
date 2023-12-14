<?php
header('Content-Type: application/json');

$servidorbd = "2daw.esvirgua.com";
$usuario = "user2daw_19";
$contraseña = "z~?R*g9xqKtT"; 
$basedatos = "user2daw_BD1-19";

try {
    $conexion = new PDO("mysql:host=$servidorbd;dbname=$basedatos", $usuario, $contraseña);

    $conexion->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // Obtener el cuerpo de la solicitud POST como JSON y decodificarlo
    $json = file_get_contents('php://input');
    $data = json_decode($json, true);

    // Verificar si la decodificación del JSON fue exitosa
    if ($data === null) {
        throw new Exception('Error al decodificar el JSON.');
    }

    // Acceder a los datos del arreglo asociativo
    $texto = $data['campo1'];

    // Utilizar declaraciones preparadas para evitar inyección de SQL
    $stmt = $conexion->prepare("INSERT INTO almacenados (texto) VALUES (:texto)");
    $stmt->bindParam(':texto', $texto, PDO::PARAM_STR);
    $stmt->execute();

    // Puedes devolver una respuesta JSON indicando el éxito si lo deseas
    echo json_encode(['success' => true]);

} catch (PDOException $e) {
    // Puedes devolver una respuesta JSON con el error si lo deseas
    echo json_encode(['success' => false, 'error' => 'Error de conexión: ' . $e->getMessage()]);
} catch (Exception $e) {
    echo json_encode(['success' => false, 'error' => $e->getMessage()]);
}

