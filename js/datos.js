//Estrcutura de las Palabras
var datos = [];
var ntotpalabra = 0;
var Formato = function (){
	this.categoria;
	this.elemento = 0;
	this.letras;
}
var Palabra = new Formato();

//declaracion de las Palabras
Formato.prototype.agregar = function(c,l){


	//todas las palabras a mayuscula
	l 		= 	l.toUpperCase();


	//Calcular el numero de palabras
	//y la posicion de las coma ( , )
	var numpalabra = 1;
	var posicion = [];
	for(var i = 0; i < l.length; i++){ 
		if (l[i] == ','){
		  posicion[numpalabra] = i;
		  numpalabra++;
		}
	}

	ntotpalabra += numpalabra;
	

	//primera palabra
	datos[this.elemento] = new Formato();
	datos[this.elemento].letras = l.substring(0,posicion[1]);
	datos[this.elemento].categoria = c;
	this.elemento++;

	if (numpalabra > 1) {

		//ultima palabra
		datos[this.elemento] = new Formato();
		datos[this.elemento].letras = l.substring(posicion[numpalabra-1]+1,l.length);
		datos[this.elemento].categoria = c;
		this.elemento++;

		if (numpalabra > 2) {
			
			//demas palabras
			for (var i = 2; i <= numpalabra-1; i++){
				datos[this.elemento] = new Formato();
				datos[this.elemento].letras = l.substring(posicion[i-1]+1,posicion[i]);
				datos[this.elemento].categoria = c;
				this.elemento++;
				
			}
		};
	};
};