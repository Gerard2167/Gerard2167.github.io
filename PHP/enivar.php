<?php
$destino = 'gerardm.2410@gmail.com';
$nombre = $_POST['nombre'];
$email = $_POST['email'];
$mensaje = $_POST['mensaje'];
$contenido = "Nombre: " . $nombre . "\nEmail: " . $email . "\nMensaje: " . $mensaje;
$header = 'From: ' . $email . "\r\n" . 'Reply-To: ' . $email . "\r\n" . 'X-Mailer: PHP/' . phpversion();
mail($destino, 'Formulario de contacto', $contenido, $header);
header('Location: gracias.html');
?>