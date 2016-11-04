function digaOi(){
	alert("Carregou a página!");
}

function clicou(){
	let elementoNome = document.querySelector("#nome");
	let nomeUsuario = elementoNome.value;
	let resultado = document.querySelector("#result");
	resultado.innerHTML = nomeUsuario;
}
