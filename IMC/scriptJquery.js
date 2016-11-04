$(document).ready(function(){
	$("#button").click(function(){
		let nomeUsuario = $("#nome").val();
		let pesoUsuario = $("#peso").val();

		alert("Nome: "+nomeUsuario);
		alert("Peso: "+pesoUsuario);

		let resultado = pesoUsuario*2;
		alert("Resultado: "+resultado);

		if(resultado > 100){
			$("#resultado").html("Resultado > 100: "+resultado);
		}
		else{
			$("#resultado").html("Resultado < 100: "+resultado);
		}
	}
	);
});
