function copia() {
	var textoCopiado = document.querySelector("#textoMudado");
	textoCopiado.select();
	document.execCommand("Copy");
	alert("Texto copiado para área de transferência!");
}

function criptografar (){

	var textoEntrada = document.querySelector("#textoEntrada").value; 
	var textoCriptografado= "";

			
	for(var i=0; i < textoEntrada.length; i++){

				

		if( textoEntrada[i] == "a"){

			textoCriptografado += "ai";
		}
					
		if( textoEntrada[i] == "e"){

			textoCriptografado += "enter";
		}

		if( textoEntrada[i] == "i"){

			textoCriptografado += "imes";
		}

		if( textoEntrada[i] == "o"){

			textoCriptografado += "ober";
		}

		if( textoEntrada[i] == "u"){

			textoCriptografado += "ufat";
		}

		if( textoEntrada[i] != "a" && textoEntrada[i] != "e" && textoEntrada[i] != "i" && textoEntrada[i] != "o" && textoEntrada[i] != "u" ){

			textoCriptografado += textoEntrada[i];
		}
	}

	document.querySelector('#textoMudado').style.visibility = 'visible';
	document.querySelector('#imagem-detetive').style.display = 'none';
	document.querySelector('#nenhumTexto').style.display = 'none';
	document.querySelector('#textoMudado').innerHTML = textoCriptografado; 
}

function descriptografar() {

	let textoEntrada = document.querySelector("#textoEntrada").value; //faz a leitura do input
	let textoDescriptografado="";

	for(var i=0; i < textoEntrada.length; ){
		textoDescriptografado=textoEntrada.replace("ai","a");
		textoEntrada=textoDescriptografado;

		textoDescriptografado=textoEntrada.replace("enter","e");
		textoEntrada=textoDescriptografado;

		textoDescriptografado=textoEntrada.replace("imes","i");
		textoEntrada=textoDescriptografado;

		textoDescriptografado=textoEntrada.replace("ober","o");
		textoEntrada=textoDescriptografado;

		textoDescriptografado=textoEntrada.replace("ufat","u");
		textoEntrada=textoDescriptografado;
		i++;
	}
	document.querySelector('#textoMudado').style.visibility = 'visible';
	document.querySelector('#imagem-detetive').style.display = 'none';
	document.querySelector('#nenhumTexto').style.display = 'none';
	document.querySelector('#textoMudado').innerHTML = textoDescriptografado; 
}		