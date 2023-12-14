<?php
    header('Content-Type: application/json');

    $servidorbd = "2daw.esvirgua.com";
    $usuario = "user2daw_19";
    $contraseña = "z~?R*g9xqKtT"; 
    $basedatos = "user2daw_BD1-19";

    try {
        $conexion = new PDO("mysql:host=$servidorbd;dbname=$basedatos", $usuario, $contraseña);

        $conexion->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

        $sql = "SELECT texto FROM contenedor";
        $stmt = $conexion->query($sql);

        $fila = $stmt->fetch(PDO::FETCH_ASSOC);

        $jsonResultado = json_encode($fila);

        echo $jsonResultado;

    } catch (PDOException $e) {
        echo "Error de conexión: " . $e->getMessage();

    }

