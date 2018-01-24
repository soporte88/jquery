var MyApp = {};
MyApp.init = function(){
		

		 $.validator.addMethod("numeros", function(value, element) {
			return /^[ 0-9]*$/i.test(value);
		}, "Ingrese sólo números");
	
		$("#registerForm").validate({
			rules: {
				nombre: {
					required : true
				},
				correo: {
					required: true,
					email: true,
					minlength: 7
				},
				telefono: {
					required: true,
					minlength: 10,
					numeros: true
				},
				comentario : {
					required:false
				}
			},
			messages: {
				nombre: {
					required: "Por favor ingrese su nombre"
				},
				correo: {
					required: "Por favor ingrese su correo electr&oacute;nico",
					email: "Por favor ingrese un email v&aacute;lido",
					minlength: jQuery.validator.format("El correo debe contener al menos {0} caracteres")
				},
				telefono: {
					required: "Por favor ingrese su tel&eacute;fono",
					minlength: jQuery.validator.format("El tel&eacute;fono debe contener al menos {0} caracteres")
				}
			}
		});
		
	$("#send").on("click", function(){
		$("#registerForm").validate();
		if($("#registerForm").valid()===true){
			var nombre = "Nombre: " + $("#nombre").val() + "<br />";
			var comentario = "Comentario: " + $("#comentario").val() + "<br />";
			$("#comentarios").append(nombre + comentario);
			console.log("send");
			$("#successMessage" ).show("slow").delay(7000).fadeOut("slow");
			$('#registerForm').trigger("reset");
		}
		
	});
	$("#clear").on("click", function(){
		$('#registerForm').trigger("reset");
	});
};
$(document).ready(function(){
	
	MyApp.init();
});
