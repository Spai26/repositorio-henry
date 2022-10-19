let myArray = [
  "domingo",
  "lunes",
  "martes",
  "miercoles",
  "jueves",
  "viernes",
  "sabado",
];

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un  array (pasado por parametro)
  // Tu código:
  return array[0];
}
console.log(devolverPrimerElemento(myArray));

function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  return array.length - 1;
}
console.log(devolverUltimoElemento(myArray));

function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  return array.length;
}
console.log(obtenerLargoDelArray(myArray));

let arrayEnteros = [1, 2, 3];
function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  let aux = [];
  for (let i = 0; i < array.length; i++) {
    aux[i] = array[i] + 1;
  }
  return aux;
}
console.log(incrementarPorUno(arrayEnteros));
function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  var nuevoArray = [];
  for (var i = 0; i < array.length; i++) {
    nuevoArray[i] = array[i] + 1;
  }

  return nuevoArray;
}

console.log(incrementarPorUno(arrayEnteros));

function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  let ultimo = array.push(elemento);
  return ultimo;
}

let ar = [1, 2];

agregarItemAlFinalDelArray(ar, 2);
ar.push(4);
console.log(ar);

function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  let first = array.unshift(elemento);
  return first;
}

agregarItemAlComienzoDelArray(ar, 4);
console.log(ar);

function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  for (let i = 0; i < array.length; i++) {
    if (array[i] === elemento) {
      return true;
    }
  }
  return false;
}

console.log(arrayContiene(ar));

function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente.
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario.
  //Escribe tu código aquí
  if (numeroDeDia === 1 || numeroDeDia === 7) {
    return "Es dia laboral";
  } else {
    return "Es fin de semana";
  }
}

console.log(diaDeLaSemana(7));
let text = ["hello", "world"];
function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  let combinado;
  for (let i = 0; i < palabras.length; i++) {
    combinado = palabras.join(" ", palabras);
  }
  return combinado;
}

console.log(dePalabrasAFrase(text));

let newar = [1, 2];
function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  let valor = 0;
  let test = 0;
  for (let i = 0; i < numeros.length; i++) {
    test = numeros[i];
    console.log(test);

    valor += numeros[i];
    console.log(valor);
  }
  return valor;
}
console.log(agregarNumeros(newar));

function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  let valor = 0;
  let promedio = 0;
  for (let i = 0; i < resultadosTest.length; i++) {
    valor += resultadosTest[i];
    console.log(valor);

    promedio = valor / resultadosTest.length;
  }
  return promedio;
}

function cuentoElementos(arreglo) {
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí
  let c = 0;
  for (let i = 0; i < arreglo.length; i++) {
    if (arreglo[i] > 18) {
      c += 1;
    }
  }
  return c;
}
function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:

  //a  = valor anterior
  //b = valor actual
  //c = indice
  //d = vector
  let indice = 0;
  let max = numeros.reduce(function (a, b, c) {
    //
    indice = c;
    console.log(c);
    return Math.max(a, b);
  });
  return max;
}

function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí

  let dameNine = n.toString();
  if (dameNine.charAt(0) === "9") return true;
  return false;
}
console.log(empiezaConNueve(899));

function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí

  let igual = pro[0];
  for (let i = 0; i < arreglo.length; i++) {
    console.log(igual);
    console.log(arreglo[i]);
    if (igual !== arreglo[i]) {
      return false;
    }
  }
  return true;
}
let pro = [20, 20];
console.log(todosIguales(pro));

function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
  let aux = [];
  for (let i = 0; i < array.length; i++) {
    if (
      array[i] === "Marzo" ||
      array[i] === "Noviembre" ||
      array[i] === "Enero"
    ) {
      aux.push(array[i]);
    }
  }
  if (aux.length < 3) {
    return "No se encontraron los meses pedidos";
  } else {
    return aux;
  }
}

let month = [
  "Octubre",
  "Agosto",
  "Marzo",
  "Abril",
  "Mayo",
  "Enero",
  "Julio",
  "Febrero",
  "Septiembre",
  "Diciembre",
  "Noviembre",
  "Junio",
];
console.log(mesesDelAño(month));

function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
  let aux = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] > 100) {
      aux.push(array[i]);
    }
  }
  return aux;
}

let numero = [24, 55, 42, 100, 152, 132, 183, 200];
console.log(mayorACien(numero));

function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
  let c = numero;
  let j = 0;
  let aux = [];
  for (let i = 0; i < 10; i++) {
    c += 2;
    j += i;
    if (c === i) {
      break;
    } else {
      aux.push(c);
    }
  }

  if (j < 10) {
    return "Se interrumpió la ejecución";
  } else {
    return aux;
  }
}

function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:

  let array = [];
  let contador = numero;
  for (let i = 0; i < 10; i++) {
    if (i === 5) {
      //continue;
    } else {
      contador = contador + 2;
      array.push(contador);
    }
  }
  return array;
}
console.log(continueStatement(50));
console.log(continueStatement(-4));
