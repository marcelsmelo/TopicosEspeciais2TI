function validar(){
	let nomeUsuario = document.querySelector("#nome").value;
	let pesoUsuario = document.querySelector("#peso").value;
	let alturaUsuario = document.querySelector("#altura").value;
	let idadeUsuario = document.querySelector("#idade").value;
	let dtNascUsuario = document.querySelector("#dtNasc").value;


	let imc = pesoUsuario/(alturaUsuario*alturaUsuario);

	document.querySelector("#exibeNome").innerHTML = "Nome: " + nomeUsuario;
	document.querySelector("#exibePeso").innerHTML = "Peso: " + pesoUsuario;
	document.querySelector("#exibeAltura").innerHTML = "Altura: " + alturaUsuario;
	document.querySelector("#exibeIdade").innerHTML = "Idade: " + idadeUsuario;
	document.querySelector("#exibeDtNasc").innerHTML = "Data Nascimento: " + inverteData(dtNascUsuario);

	if(idadeUsuario < 16){
		document.querySelector("#resultado").innerHTML = "Você é novinho, não tem IMC";
		return false;
	}

	if(imc < 17){
		document.querySelector("#resultado").innerHTML = "IMC: "+imc+" - Muito abaixo do peso";
	}else if(imc>=17 && imc <= 18.49){
		document.querySelector("#resultado").innerHTML = "IMC: "+imc+" - Abaixo do peso";
	}
	else if(imc>=18.5 && imc <= 24.99){
		document.querySelector("#resultado").innerHTML = "IMC: "+imc+" - Peso Normal";
	}
	else if(imc>=25 && imc <= 29.99){
		document.querySelector("#resultado").innerHTML = "IMC: "+imc+" - SobrePeso";
	}
	else if(imc>=30 && imc <= 34.99){
		document.querySelector("#resultado").innerHTML = "IMC: "+imc+" - Obesidade I";
	}
	else if(imc>=35 && imc <= 39.99){
		document.querySelector("#resultado").innerHTML = "IMC: "+imc+" - Obesidade II (Severo)";
	}else if(imc>=40){
		document.querySelector("#resultado").innerHTML = "IMC: "+imc+" - Obesidade III (Mórbida)";
	}
	return false;
}


function inverteData(date){
	let dataVetor = date.split('-');
	return dataVetor[2]+'/'+dataVetor[1]+'/'+dataVetor[0]
}



function validaNome(){
	let nome = document.dados.nome.value;
	let regex = /^[a-zA-Z ]{3,20}$/;
	if(regex.test(nome)){
		document.dados.nome.classList.remove("erro")
		document.dados.nome.classList.add("certo")
	}else{
		document.dados.nome.classList.remove("certo")
		document.dados.nome.classList.add("erro")
	}

}
