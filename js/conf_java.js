
var incrementaAviso=50;
var incrementoNome=0;
var incrementoContacto=0;
var incrementoDataNascimento=0;

var ideia1="";
var ideia2="";

function alertaCadastrar() 
{
		confirm("Confirma os dados antes de cadastrar!\nSe estar tudo certo ignora esse aviso clicando ok\n caso não clica cancelar");
}


function alertaCancelar() {
		alert("tens a certeza que pretendes cancelar ?");

}


function verificaNomedoVoluntario(){

	var nomeVoluntario =document.getElementById('nome').value;
	
	if (nomeVoluntario=="") {
		incrementoNome=10;
		avisodeDadosIncompleto(incrementoNome);
		//incrementoNome=0;
		alert("nome não pode estar vazio");
		return false;
	}else{
		incrementoNome=-10;
		avisodeDadosIncompleto(incrementoNome);
	}
			
	return nomeVoluntario;
}


function verificaContacto(){

	var contactodoVoluntario= document.getElementById('contacto').value;

	if(contactodoVoluntario==""){
		incrementoContacto=10;
		avisodeDadosIncompleto(incrementoContacto);
		return false;

	}

	incrementoContacto=-10;
	avisodeDadosIncompleto(incrementoContacto);
	return true;
}


function calculaIdade(){

	var tamanho=0;
	var dataNascimento = document.getElementById('data_nascimento').value;
	var aux=dataNascimento.length;

	if (aux==10) {

			dataNascimento =dataNascimento.replace("-","");
			dataNascimento =dataNascimento.replace("-","");
	
			for (var i = dataNascimento.length - 1; i >= 0; i--) {
				tamanho+=1;
				if (tamanho==8) {
					break;
				}
		
			}

			if (tamanho==8) {
				incrementoDataNascimento=-10;
				pegaIdadeConvertida=calculadataAnoNascimento(dataNascimento)
				if (pegaIdadeConvertida>=16) {
					document.getElementById('idade').value=pegaIdadeConvertida;
					document.getElementById("restricao").style.color='green';
					document.getElementById('restricao').value="idade válida";	
				} else {
					document.getElementById('idade').value=pegaIdadeConvertida;
					document.getElementById("restricao").style.color='red';
					document.getElementById('restricao').value="Não pode ser dador";
				}
				
				avisodeDadosIncompleto(incrementoDataNascimento);
				return true;	
			}
					

	} else {
			incrementoDataNascimento=10;
			avisodeDadosIncompleto(incrementoDataNascimento);
			alert("data de nascimento invalida");
			return false;
	}
	
}


function calculadataAnoNascimento(dataNascimento){
	var anoActula = 2022;
	var ano="";
	var anoConvertido =0;
	var idade=0;

	for (var i = 0; i <4; i++) {
		ano+=dataNascimento[i];
	}

	anoConvertido = parseInt(ano,10);
	if(anoConvertido>0){
		idade =anoActula - anoConvertido;

	}


	return idade;

}


function avisodeDadosIncompleto(recebe){

	incrementaAviso+=recebe;
	
	var niveldoAviso = document.getElementById('aviso').value = incrementaAviso;
	return incrementaAviso;

	
}
