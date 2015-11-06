/*
Pautas
	-Escribe las palabras que vas a agregar sin "Tildes"
	-Primero escribe la categoria y despues las palabras
	-Si quieres agregar palabras con otra categoria vuelves a repetir " Palabra.agregar(...); "
	-No olvidarse poner una coma ( +','+ ) despues de cada palabra, excepto en la ultima

Ejemplo para gregar palabras:

	Palabra.agregar(
		'Categoria',
		'palabra 1'	+ ',' + 	//<--- Si tiene	+','+
		'palabra2'	+ ',' +		//<--- Si tiene	+','+
		'palabra3'	+ ',' +		//<--- Si tiene	+','+
		'palabra4'				//<--- NO tiene	+','+
	);
*/

Palabra.agregar(
	'Hadware',
	'Computadora'	+ ',' +
	'Teclado'		+ ',' +
	'Mouse'			+ ',' +
	'PlacaMadre'	+ ',' +
	'TarjetaVideo'	+ ',' +
	'TarjetaSonido'	+ ',' +
	'Pantalla'
);

Palabra.agregar(
	'Sowftware',
	'CorelDraw'		+ ',' +
	'Photoshop'		+ ',' +
	'EsetNod32'		+ ',' +
	'AutoCAD'
);