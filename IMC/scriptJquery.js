$(document).ready(function(){
	$('#button').click(function(){
		let nomeUsuario = $("#nome").val();
		let pesoUsuario = $("#peso").val();
		let alturaUsuario = $("#altura").val();
		let idadeUsuario = $("#idade").val();
		let dtNascUsuario = $("#dtNasc").val();


		let imc = pesoUsuario/(alturaUsuario*alturaUsuario);

		$("#exibeNome").html("Nome: " + nomeUsuario);
		$("#exibePeso").html("Peso: " + pesoUsuario);
		$("#exibeAltura").html("Altura: " + alturaUsuario);
		$("#exibeIdade").html("Idade: " + idadeUsuario);
		$("#exibeDtNasc").html("Data Nascimento: " + inverteData(dtNascUsuario));

		if(idadeUsuario < 16){
			$("#resultado").html("Você é novinho, não tem IMC");
			return false;
		}

		if(imc < 17){
			$("#resultado").html("IMC: "+imc+" - Muito abaixo do peso");
		}else if(imc>=17 && imc <= 18.49){
			$("#resultado").html("IMC: "+imc+" - Abaixo do peso");
		}
		else if(imc>=18.5 && imc <= 24.99){
			$("#resultado").html("IMC: "+imc+" - Peso Normal");
		}
		else if(imc>=25 && imc <= 29.99){
			$("#resultado").html("IMC: "+imc+" - SobrePeso");
		}
		else if(imc>=30 && imc <= 34.99){
			$("#resultado").html("IMC: "+imc+" - Obesidade I");
		}
		else if(imc>=35 && imc <= 39.99){
			$("#resultado").html("IMC: "+imc+" - Obesidade II (Severo)");
		}else if(imc>=40){
			$("#resultado").html("IMC: "+imc+" - Obesidade III (Mórbida)");
		}
	}
	)
});
function inverteData(date){
	let dataVetor = date.split('-');
	return dataVetor[2]+'/'+dataVetor[1]+'/'+dataVetor[0]
}
