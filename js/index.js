console.log("testing index");

/**
 * part supply for homework leccion 3
 */
function obtenerMayor(x, y) {
  // "x" e "y" son números enteros (int).
  // Devuelve el número más grande
  // Si son iguales, devuelve cualquiera de los dos
  // Tu código:
  let r = x > y || x === y ? x : y;
  return r;
}

console.log(obtenerMayor(5, 20));

function esEntero(numero) {
  // Devuelve "true" si "numero" es un entero (int/integer)
  // Ejemplo: 0.8 -> false  !
  // Ejemplo: 1 -> true
  // Ejemplo: -10 -> true
  // De lo contrario, devuelve "false"
  // Pista: Puedes resolver esto usando `Math.floor`
  // Tu código:
  let r = numero % 1;
  let n = numero - r;
  console.log(r);
  console.log(n);

  if (r > 0.5) {
    return false;
  }
  if (Math.floor(numero)) {
    return true;
  } else {
    return false;
  }
}

console.log(esEntero(-10));
function fizzBuzz(numero) {
  // Si "numero" es divisible entre 3, devuelve "fizz"
  // Si "numero" es divisible entre 5, devuelve "buzz"
  // Si "numero" es divisible entre 3 y 5 (ambos), devuelve "fizzbuzz"
  // De lo contrario, devuelve el numero
  let tree = numero % 3;
  let five = numero % 5;

  if (numero % 15 === 0) {
    return "fizbuzz";
  }
  if (tree === 0) {
    return "fizz";
  } else if (five === 0) {
    return "buzz";
  }
}

console.log(fizzBuzz(15));

function operadoresLogicos(num1, num2, num3) {
  //La función recibe tres números distintos.
  //Si num1 es mayor a num2 y a num3 y además es positivo, retornar ---> "Número 1 es mayor y positivo"
  //Si alguno de los tres números es negativo, retornar ---> "Hay negativos"
  //Si num3 es más grande que num1 y num2, aumentar su valor en 1 y retornar el nuevo valor.
  //0 no es ni positivo ni negativo. Si alguno de los argumentos es 0, retornar "Error".
  //Si no se cumplen ninguna de las condiciones anteriores, retornar false.
  if (num1 < 0 || num2 < 0 || num3 < 0) {
    return "Hay negativos";
  }
  if (num1 === 0 || num2 === 0 || num3 === 0) {
    return "Error";
  }

  if (num1 > num2 && num1 > 0) {
    return "Número 1 es mayor y positivo";
  }

  if (num3 > num1 && num3 > num2) {
    return (num3 += 1);
  }

  return false;
}

console.log(operadoresLogicos(5, 2, 3));

function esPrimo(numero) {
  // Devuelve "true" si "numero" es primo
  // De lo contrario devuelve "falso"
  // Pista: un número primo solo es divisible por sí mismo y por 1
  // Pista 2: Puedes resolverlo usando un bucle `for`
  // Nota: Los números 0 y 1 NO son considerados números primos

  let valor = true;
  if (numero === 0 || numero === 1 || numero === 4) return false;
  for (let i = 2; i < numero / 2; i++) {
    if (numero % i === 0) return (valor = false);
  }
  return valor;
}
// Nota: Los números 0 y 1 NO son considerados números primos
console.log(esPrimo(0));
console.log(esPrimo(2));
// Devuelve "true" si "numero" es primo
console.log(esPrimo(3));
// De lo contrario devuelve "falso"
console.log(esPrimo(6));

function esVerdadero(valor) {
  //Escribe una función que reciba un valor booleano y retorne “Soy verdadero”
  //si su valor es true y “Soy falso” si su valor es false.
  //Escribe tu código aquí

  if (valor === true) {
    return "Soy verdadero";
  }

  return "Soy falso";
}
let a = false;
console.log(esVerdadero(a));

function doWhile(numero) {
  //Implementar una función tal que vaya aumentando el valor recibido en 5 hasta un límite de 8 veces
  //Retornar el valor final.
  //Usar el bucle do ... while.
  let i = 0;
  do {
    i += 1;
    numero += 5;
  } while (i <= 8);
  return numero;
}
console.log(doWhile(3));

function tablaDelSeis() {
  //Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
  //La función devuelve un array con los resultados de la tabla de multiplicar del 6 en orden creciente.
  //Escribe tu código aquí
  let arrayTablaDel6 = [];
  for (let i = 0; i < 11; i++) {
    arrayTablaDel6.push(6 * i);
  }
  return arrayTablaDel6;
}

console.log(tablaDelSeis());
