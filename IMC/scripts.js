function clicar(){
	let nomeUsuario = document.querySelector("#nome").value;
	let pesoUsuario = document.querySelector("#peso").value;

	alert("Nome: "+nomeUsuario);
	alert("Peso: "+pesoUsuario);

	let resultado = pesoUsuario*2;
	alert("Resultado: "+resultado);

	if(resultado > 100){
		document.querySelector("#resultado").innerHTML = "Resultado > 100: "+resultado;
	}
	else{
		document.querySelector("#resultado").innerHTML = "Resultado < 100: "+resultado;
	}
}
