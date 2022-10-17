console.log("I'm first folder js for the index.   I'm Worked !!! ");

let modulo = 21 % 5;
console.log(modulo);

function suma(x, y) {
  return x + y;
}

console.log(suma(10, 5));

function sonIguales(x, y) {
  return x === y;
}

console.log(sonIguales(10, 10));

function tienenMismaLongitud(str1, str2) {
  // Devuelve "true" si las dos strings tienen la misma longitud
  // De lo contrario, devuelve "false"
  // Tu código:
  return str1.length === str2.length;
}

let firstText = "I'm love javascript";
let twoText = "welcome to javascript";

console.log(tienenMismaLongitud(firstText, twoText));

function menosQueNoventa(num) {
  // Devuelve "true" si el argumento de la función "num" es menor que noventa
  // De lo contrario, devuelve "false"
  // Tu código:
  return num < 90;
}

let n = 23;
console.log(menosQueNoventa(23));

function esPar(num) {
  // Devuelve "true" si "num" es par
  // De lo contrario, devuelve "false"
  // Tu código:

  return num % 2 !== 0;
}

let par = 3;

console.log(esPar(20));

function elevarAlCuadrado(num) {
  // Devuelve el valor de "num" elevado al cuadrado
  // ojo: No es raiz cuadrada!
  // Tu código:
  return Math.pow(num, 3);
}

console.log(elevarAlCuadrado(par));

function elevar(num, exponent) {
  // Devuelve el valor de "num" elevado al exponente dado en "exponent"
  // Tu código:
  return Math.pow(num, exponent);
}

console.log(elevar(par, 3));

function redondearNumero(num) {
  // Redondea "num" al entero más próximo y devuélvelo
  // Tu código:
  let r = num % 1;
  let e = num - r;
  let redondear = r >= 0.5 ? e + 1 : e;
  return redondear;
}

let redondear = 223.7;
console.log(redondearNumero(redondear));

function esPositivo(numero) {
  //La función va a recibir un entero. Devuelve como resultado una cadena de texto que indica si el número es positivo o negativo.
  //Si el número es positivo, devolver ---> "Es positivo"
  //Si el número es negativo, devolver ---> "Es negativo"
  //Si el número es 0, devuelve false
  if (num > 0) {
    return "Es positivo";
  } else if (num === 0) {
    return false;
  } else {
    return "Es Negativo";
  }
}

let num = 0;
console.log(esPositivo(num));

function agregarSimboloExclamacion(str) {
  // Agrega un símbolo de exclamación al final de la string "str" y devuelve una nueva string
  // Ejemplo: "hello world" pasaría a ser "hello world!"
  // Tu código:
  return str.concat("!");
}

function esVocal(letra) {
  //Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”.
  //Verificar si el usuario ingresó un string de más de un carácter, en ese caso, informarle
  //que no se puede procesar el dato mediante el mensaje "Dato incorrecto".   !
  // Si no es vocal, tambien debe devolver "Dato incorrecto".
  //Escribe tu código aquí
  if (letra.length > 1) {
    return "Dato incorrecto";
  }
  //vocales a e i o u
  if (
    letra === "a" ||
    letra === "e" ||
    letra === "i" ||
    letra === "o" ||
    letra === "u"
  ) {
    return "Es vocal";
  } else {
    return "Dato incorrecto";
  }
}

let w = "anidado";
let y = "word";

console.log(esVocal("A"));
