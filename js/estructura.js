//Clase "Juego"
var Juego = function (){
	//url de las imagenes
	this.horca		=	"img/horca.png";
	this.cabeza		=	"img/cabeza.png";
	this.cuerpo		=	"img/cuerpo.png";
	this.piernas	=	"img/piernas.png";
	this.brazos		=	"img/brazos.png";
	this.cara		=	"img/cara.png";
	this.vivo		=	"img/vivo.png";

	//textos
	this.letra		=	document.getElementById("letra");
	this.pista		=	document.getElementById("pista");

	//numero de intentos
	this.intentos 	= 	0;
	this.posicion	=	-1;

	//palabra despues tiene q ser una funcion
	this.palabra = "A";
	this.generarpalabra();

	this.tmp = new Array(this.palabra.length-1);

	this.mostrar();
	this.dibujar();
}

//Comprobar el numero de intentos
Juego.prototype.dibujar = function(){

	// Dibujando
	this.insertar(this.horca);

	var pista = this.pista.innerHTML.indexOf('_');

	if (this.intentos > 0 && pista != -1) {
		//1er intento
		this.insertar(this.cabeza);
		no_es_la_letra();
		
		if (this.intentos > 1) {
			//2do intento
			this.insertar(this.cuerpo);

			if (this.intentos > 2) {
				//3er intento
				this.insertar(this.piernas);

				if (this.intentos > 3) {
					//4to intento
					this.insertar(this.brazos);

					if (this.intentos > 4) {
						//5to y ultimo intento
						this.insertar(this.cara);
						this.muerte();
					}
				}
			}
		}
	}
	this.intentos ++;
}

function no_es_la_letra() {
  setTimeout(function() {
    alert('No existe la "LETRA" en la Palabra...   :(');
  }, 10);
}

//Cuando ya estes muerto
Juego.prototype.muerte = function (){
	setTimeout(function() {
		alert('Que pena...  :(\nESTAS MUERTO!!!');
		this.pista.innerHTML = 'La palabra era: "' + ahorcado.palabra + '"';
	}, 10);
}

//Cuando ganas
Juego.prototype.ganaste = function (){
	var pista = this.pista.innerHTML.indexOf('_');
	if (pista == -1 && this.intentos <= 5)  {
		this.dibujar();
		this.insertar(this.vivo);
		this.pista.innerHTML = "GANASTE... Fuck yeah!!!"
	};
}

//mostrar las imagenes
Juego.prototype.insertar = function (url){
	//comprobando si es "horca" u  otro...
	var x, y;
	if (url == this.horca) {
		x = 0;		y = 0;
	}else if (url == this.vivo) {
		x = 145;		y = 200;
	}else{
		x = 203;	y = 150;
	}
	
	var canvas = document.getElementById("canvas");
	canvas.width = canvas.width;
	
	//insertando
	var dibujo = new Image();
	dibujo.src = url;
	dibujo.onload = cargado;
	function cargado () {
		contexto.drawImage(dibujo, x, y);
	}

}

//mostrar la pista
Juego.prototype.mostrar = function (){
	var ancho = this.palabra.length-1;
	for (var i = 0; i <= ancho; i++) {
		if (this.posicion == -1) {
			this.tmp[i] = '_';
		};
		if (this.posicion == i) {
			this.tmp[i] = this.letra.value;
		};
	};

	this.pista.innerHTML = this.tmp.join('');
}

//genero la palabra
Juego.prototype.generarpalabra = function() {

	var temporal = (Math.floor((Math.random() * ntotpalabra) + 1)) - 1;
	this.palabra = datos[temporal].letras;


	var categoria = document.getElementById('categoria');
	categoria.innerHTML = datos[temporal].categoria;
};