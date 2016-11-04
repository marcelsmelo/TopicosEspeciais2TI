$(document).ready(function (){
	alert("Carregou minha página")
Aryel Evelin <yel.evelin@gmail.com>,
Natália Ferreira <nathalia.ferreira11@hotmail.com>,
Alef Santos <wwwalef4321@gmail.com>,
Fernando Matos <fernando.matos@ifgoiano.edu.br>,

	$("#nome").keyup(function(){
		let nomeUsuario = $("#nome").val();
		$("#resultado").html(nomeUsuario);
	})

	$("#idade").change(function(){
		let idade = parseInt($("#idade").val());
		if(idade < 18){
			$("#resultado2").html(idade + " anos - Vai brincar no parquinho da praça da igreja");
		}else{
			$("#resultado2").html(idade + " anos - Vai pra festa que é open-bar =D");
		}
	})

	$("#button").click(function (){
		let nomeUsuario = $("#nome").val();
		$("#resultado").html(nomeUsuario);

		let idade = parseInt($("#idade").val());
		if(idade < 18){
			$("#resultado2").html(idade + " anos - Vai brincar no parquinho da praça da igreja");
		}else{
			$("#resultado2").html(idade + " anos - Vai pra festa que é open-bar =D");
		}

	})

});
