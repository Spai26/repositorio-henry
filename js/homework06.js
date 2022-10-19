class Person {
  constructor(nombre, apellido) {
    this.nombre = nombre;
    this.apellido = apellido;
  }
}

String.prototype.reverse = function () {
  let newCadena = "";
  //hola 4
  for (let i = this.length - 1; i >= 0; i--) {
    console.log(i);
    newCadena = newCadena + this.charAt(i);
    console.log(this.charAt[i])
  }
  return newCadena;
};
const str = "Hello";
console.log( str.reverse());
