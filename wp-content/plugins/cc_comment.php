<?php
/*
Plugin Name: cc_comment
Plugin URI: http://www.elwebmaster.cl
Description: Este plugin enviara un mail
Version: 1.0
Author: Jorge Gatica
Author URI: http://www.w7.cl
*/

function cc_comment() {
	global $_REQUEST;
	
	$to = "j.gatica@yahoo.com";
	$subject = "Nuevo comentario en el blog" . $_REQUEST['subject'];
	$message = "Mensaje de; " . $_REQUEST['name'] . "por email" . $_REQUEST['email'] . "\n " . $_REQUEST['comments'];
	wp_mail($to, $subject, $message);
}

add_action("comment_post", "cc_comment");

//interfaz basica para el pluin
function cccomm_option_page() {
	
	if (check_admin_referer('cccom_admin_options-update')) {
		echo '<script type="text/javascript">alert("jorge1");</script>' ;
		update_option('cccomm_cc_email', $_POST['cc_email']);
?>
		<div id="message" class="updated">El mail se guardo correctamente</div>
<?php 
	}
?>
	<script type="text/javascript">alert("jorge2");</script>
	<div class="wrap">
		<!-- screen_icon esta funcion mostrara el icono de los elementos que se estan visualizando -->
		<?php screen_icon();?>
		<h2>Plugin CC Comment</h2> 
		<p>Bienvenido al plugin CC Comment</p>
		<form action="" method="post" id="cc-comments-email-options-form">
			<h3><label for="cc_email">Correo para enviar CC a: </label></h3>
			<input type="text" id="cc_email" name="cc_email" value="<?php echo esc_attr(get_option('cccomm_cc_email'));?>" />
			<p>
				<input type="submit" name="submit" value="Guardar email" />
			</p>
			<?php wp_nonce_field('d'); ?>
		</form>
	</div>
<?php 
}

//registrar el plugin el menu administrador
function cccom_plugin_menu() {

	//por el momento lo vamos a registrar en setting -videotutorial 5.1
	//el primer parametro es para pasar el titulo de la pagina
	//el segundo es el titulo que veremos en el menu
	//el tercero es la competencia o la finalidad de lo que haremos esto es el rol
	//el cuarto va a ser como un identificador del elemento de menu
	//el quinto es la funcion que sera llamada cccomm_option_page
	add_options_page('CC Comments Settings', 'CC Comments', 'manage_options', 'cc-comments', 'cccomm_option_page' );
}

//cuando el usuario haga click en el menu de administrador se generara la vista que definimos en cccomm_option_page
add_action('admin_menu', 'cccom_plugin_menu'); 