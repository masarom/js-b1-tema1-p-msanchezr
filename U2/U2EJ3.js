//T1: Casos específicos de funciones / Casos específics de funcions
//U2: Recursividad / Recursivitat
/** 
	-- CASTELLANO --
	EJERCICIO 1.2.3 ENUNCIADO:
	Define el cuerpo de una función recursiva denominada [oddNumbers] que recibiba un número y un Array vacío como parámetro y rellene este Array 
	recibido como parámetro con todos los números impares que hay entre cero y el número recibido (con este incluido) como parámetro. 
	Por ejemplo siendo myArray un Array vacío, la llamada a la función oddNumbers(7, myArray) devolvería myArray con los valores [7, 5, 3, 1] 
	-- CATALÀ --
	EXERCICI 1.2.3 ENUNCIAT:
	Defineix el cos d'una funció recursiva anomenada [oddNumbers] que rebi un nombre i un Array buit com a paràmetre i empleni aquest Array
	rebut com a paràmetre amb tots els números senars que hi ha entre zero i el nombre rebut (amb aquest inclòs) com a paràmetre.
	Per exemple sent myArray un Array buit, la crida a la funció oddNumbers(7, myArray) tornaria myArray amb els valors [7, 5, 3, 1]
*/
//Do not modify this code:
let myArray = new Array();
oddNumbers(7, myArray);

//Escribe aquí tu solución / escriviu aquí la vostra solució:

/* function oddNumbers(n, array) {
	for (let i = n; i > 0; i--){
		if (i % 2 !== 0) {
			array.push(i);
		}
	}
	return array;
} */

function oddNumbers(n, array) {
	if (n <= 0) {
		return array;
	} else if (n % 2 !== 0) {
		array.push(n);
	}
	//     oddNumbers(7, [])
	//     oddNumbers(6, [7])
	//     oddNumbers(5, [7, 5])
	//     oddNumbers(4, [7, 5])
	//     oddNumbers(3, [7, 5, 3])
	//     oddNumbers(2, [7, 5, 3])
	//     oddNumbers(1, [7, 5, 3, 1])
	//     oddNumbers(0, [7, 5, 3, 1])
	return oddNumbers(n - 1, array);
}


/**
 * TEST
 * The purpose of this code is purely for TESTING PURPOSES, 
 * if you run this code outside of this environment, 
 * please comment or remove the following lines
 */
export function tests() {
    return oddNumbers;
}