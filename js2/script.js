function carregou(){
	alert("Oi Sumida =D");
}

function clicou(){
	let elementoNome = document.querySelector("#nome");
	let nomeUsuario = elementoNome.value;
	let resultado = document.querySelector("#resultado");
	resultado.innerHTML = nomeUsuario;
}
