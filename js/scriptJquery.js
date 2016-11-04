$(document).ready(function (){
	alert("Carregou o Documento")
	/*$("#button").click(function (){
		let nomeUsuario = $("#nome").val();
		$("#resultado").html(nomeUsuario);
	})
	$("#nome").keyup(function (){
		let nomeUsuario = $("#nome").val();
		$("#resultado").html(nomeUsuario);
	})*/

	$("#button").click(function (){
		let idade = parseFloat($("#idade").val());
		if(idade < 18){
			$("#resultado").html("Vai brincar no parquinho da praça da igreja")
		}else if (idade >= 18 && idade <90){
			$("#resultado").html("É open-bar!!!")
		}else{
			$("#resultado").html("Vai jogar xadrez na praça ou fazer tricô")
		}
	})

})
