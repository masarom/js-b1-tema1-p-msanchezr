//T1: Casos específicos de funciones / Casos específics de funcions
//U4: Definición de funciones dentro de funciones / Definició de funcions dins de funcions
/** 
  -- CASTELLANO --
  EJERCICIO 1.4.1 ENUNCIADO:
  Crea una función llamada [reverseArray] de manera que reciba un número indeterminado de valores enteros y que nos devuelva 
  este Array en sentido inverso.
  Por ejemplo: la llamada a la función reverseArray(4,7,21,3); nos debería devolver el Array [3,21,7,4]
  -- CATALÀ --
  EXERCICI 1.4.1 ENUNCIAT:
  Crea una funció anomenada [reverseArray] de manera que rebi un nombre indeterminat de valors sencers
  i que ens torni aquest Array en sentit invers.
  Per exemple: la crida a la funció reverseArray(4,7,21,3); ens hauria de tornar l'Array [3,21,7,4]
*/
console.log(reverseArray(4,7,21,3)); //This will return [3,21,7,4]

//Escribe aquí tu solución / escriviu aquí la vostra solució:


function reverseArray(...nums) {
  let result = [];

  /* for  (let i = 0; i < nums.length; i++) {
    result.unshift(nums[i]);
  } */
  nums.map((num) => result.unshift(num));

  return result;
}

/**
 * TEST
 * The purpose of this code is purely for TESTING PURPOSES, 
 * if you run this code outside of this environment, 
 * please comment or remove the following lines
 */
export function tests() {
  return reverseArray;
}