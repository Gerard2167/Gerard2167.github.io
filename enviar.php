<?php 
	$nombre = $_POST['nombre'];
	$email = $_POST['skylimitpa@gmail.com'];
	$asunto = 'Formulario Rellenado';
	$mensaje = "Nombre: ".$nombre."<br> Email: $email<br> Mensaje:".$_POST['mensaje'];


	if(mail('tuEmail', $asunto, $mensaje)){
		echo "Correo enviado";
	}
 ?>