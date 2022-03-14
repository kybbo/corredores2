function cuatroCaracteres(){
	var valor = document.getElementById("nombre");
	if(valor.value.length<4){
		valor.style.background="#eb5959";
		return false;
	}else{
		valor.style.background="#6ff292";
		return true;
	}
}



function ValidateEmail(inputText)
{
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
var imeil = document.getElementById("correo");
if(inputText.value.match(mailformat))
{
imeil.style.background="#6ff292";
document.form1.text1.focus();
return true;
}
else
{
imeil.style.background="#eb5959";
document.form1.text1.focus();
return false;
}
}


var cont=0;
function crearCampo(){
	if(cont==0){
	var newInput = document.createElement("input");
  newInput.type = "number";
  newInput.id = "r351";
  	
  var currentInput = document.getElementById("newInput");
  document.body.insertBefore(newInput, currentInput);

}

  cont=cont+1;
}

function quitarCampo(){
	var elem = document.getElementsByTagName("input")[4];
  elem.parentNode.removeChild(elem);
  cont=0;
}


function mensaje(){
	if(ValidateEmail(document.getElementsByTagName("input")[0])==false && cuatroCaracteres()==false){
		alert("Los campos email y nombre son incorrectos");
		
	}
	if(ValidateEmail(document.getElementsByTagName("input")[0])==false && cuatroCaracteres()==true){
	alert("Falta el campo email");
	}
	if(cuatroCaracteres()==false && ValidateEmail(document.getElementsByTagName("input")[0])==true){
	alert("Falta el campo nombre");
	}
	if(ValidateEmail(document.getElementsByTagName("input")[0])==true){
	if(cuatroCaracteres()==true){
	
	if(document.getElementsByTagName("input")[4]==null){
	alert("Te llamas "+document.getElementById("nombre").value+" con email "+
		document.getElementById("correo").value)		
	}if(document.getElementsByTagName("input")[4]!=null){
		if(document.getElementsByTagName("input")[4].value<1){
			alert("El campo de kilómetros está vacío. Si no ha corrido nunca, selecciona el no");
		}else{
	alert("Te llamas "+document.getElementById("nombre").value+" con email "+
		document.getElementById("correo").value+" y has corrido carreras de "+
		document.getElementsByTagName("input")[4].value+" km");
	}
	}	
}
}

}

