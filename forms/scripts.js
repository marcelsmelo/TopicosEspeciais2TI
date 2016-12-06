function validaNome(){
	let regex = /^[a-zA-Z ]{3,50}$/
	let elementoNome = document.dados.nome
	let nome = elementoNome.value
	if(regex.test(nome)){
		elementoNome.classList.remove('erro');
		elementoNome.classList.add('certo');
		return true
	}else{
		elementoNome.classList.remove('certo');
		elementoNome.classList.add('erro');
		return false
	}
}

function validaCPF(){
	let regex = /^[0-9]{3}\.[0-9]{3}\.[0-9]{3}\-[0-9]{2}$/
	let elementoCPF = document.dados.cpf
	let cpf = elementoCPF.value
	if(regex.test(cpf)){
		elementoCPF.classList.remove('erro');
		elementoCPF.classList.add('certo');
		return true
	}else{
		elementoCPF.classList.remove('certo');
		elementoCPF.classList.add('erro');
		return false
	}
}

function validaIdade(){
	let elementoIdade = document.dados.idade
	let idade = elementoIdade.value
	if(idade >= 15 && idade <= 100){
		elementoIdade.classList.remove('erro');
		elementoIdade.classList.add('certo');
		return true
	}else{
		elementoIdade.classList.remove('certo');
		elementoIdade.classList.add('erro');
		return false
	}
}

function validaPais(){
	let elementPais = document.dados.paises
	// let posicaoSelecionada = elementPais.selectedIndex
	// let elementSelecionado = elementPais.options[posicaoSelecionada]
	if(elementPais.selectedIndex != 0){
		elementPais.classList.remove('erro')
		elementPais.classList.add('certo')
		return true
	}else{
		elementPais.classList.remove('certo')
		elementPais.classList.add('erro')
		return false
	}
}

function validaSexo(){
	let valorSelecionado = document.querySelectorAll("input[name='sexo']:checked")
	let elementSexo = document.querySelector(".sexo");
	if(valorSelecionado.length > 0 ){
		elementSexo.classList.remove('erro')
		elementSexo.classList.add('certo')
		return true
	}else{
		elementSexo.classList.remove('certo')
		elementSexo.classList.add('erro')
		return false
	}
}

function validaIdioma(){
	let valorSelecionado = document.querySelectorAll("input[name='idioma']:checked")
	let elementoIdioma = document.querySelector(".idioma")
	if(valorSelecionado.length >= 2 ){
		elementoIdioma.classList.remove('erro')
		elementoIdioma.classList.add('certo')
		return true
	}else{
		elementoIdioma.classList.remove('certo')
		elementoIdioma.classList.add('erro')
		return false
	}
}

function validar(){
	let flag = true;

	if(!validaNome()){
		flag = false;
	}
	if(!validaCPF()){
		flag = false
	}
	if(!validaIdade()) {
		flag = false;
	}
	if(!validaPais()){
		flag=false;
	}
	if(!validaSexo()){
		flag=false;
	}
	if(!validaIdioma()){
		flag=false;
	}
	return flag;
}
