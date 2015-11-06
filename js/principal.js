//Varibles Glovales
var contexto;
var ahorcado;
var posicion = -1;

//funcion principal
function inicio(){

	//definiciones del canvas
	var canvas = document.getElementById("canvas");
	contexto = canvas.getContext("2d");
	canvas.width = 500;
	canvas.height = 500;

	//creando objeto de la clase Juego
	ahorcado = new Juego();

	var boton = document.getElementById("boton");
	boton.addEventListener("click", clickeado);

	//detectar cuando se preciona una tecla
	document.onkeyup = presionado;
}


//cuando se clikea en el boton
function clickeado(){

	//Si la caja de texto no esta vacio
	if (ahorcado.letra.value != '' && ahorcado.letra.value.length == 1) {
		//esciste la letra introducida?
		existe();

		//si ganaste
		ahorcado.ganaste();
	}else{
		alert('Escribe una sola "LETRA"');
	};

	//Limpio y focalizo
	ahorcado.letra.value = "";
	document.getElementById("letra").focus();
}

//detectar si es el enter el que fue precionado
function presionado(evObject){
	if (evObject.keyCode == 13) {
		clickeado();
	};
}

//Existe la letra en la palabra???
function existe (argument) {
	var igual = false;
	var t = ahorcado.letra.value;
	t = t.toUpperCase();
	for (var i = 0; i <= (ahorcado.palabra.length-1); i++) {
		if (ahorcado.palabra[i] == t) {
			igual = true;

			//si esxiste entonces mostrar la pista
			ahorcado.posicion = i;
			ahorcado.mostrar();
		};
	};

	//Muestro la letra o dibujo al Juego
	if (!igual) {
		ahorcado.dibujar();
		igual = false;
	};
}