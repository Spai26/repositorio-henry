function agregarPropiedad(objeto, property) {
  // Agrega una propiedad al objeto (argumento "objeto") con el valor `null`
  // Devuelve el objeto
  // NOTA: El nombre de la propiedad no es "propiedad", el nombre es el valor del argumento llamado "property" (una cadena/string)
  // Tu código:
  objeto[property] = null;
  return objeto;
}

agregarPropiedad("car", "azul");

function agregarAmigo(usuario, nuevoAmigo) {
  // "usuario" tiene una propiedad llamada "amigos" que es un array
  // Agrega "nuevoAmigo" al final de ese array
  // Devuelve el objeto "usuario"
  // // Tu código:
}

const user = {
  amigos: ["Ben", "Austen", "Ryan", "Mike", "Young"],
};

user.amigos.push("test");
console.log(user.amigos);

function agregarMetodoCalculoDescuento(producto) {
  // Agregar un método (función) al objeto "producto" llamado "calcularPrecioDescuento"
  // Este método debe multiplicar el "precio" del "producto" ("producto.precio" o "producto[precio]") y "porcentajeDeDescuento" para obtener el descuento
  // El método resta el descuento del precio y devuelve el precio con descuento
  // Devuelve el objeto "producto" al final de la función
  // Ejemplo:
  // producto.precio -> 20
  // producto.porcentajeDeDescuento -> 0.2 (o simplemente ".2")
  // producto.calcularPrecioDescuento() -> 20 - (20 * 0.2)
  // Tu código:
  const storeItem2 = {
    precio: 5,
    porcentajeDeDescuento: 0.5,
  };
  let descuento = storeItem2.precio * storeItem2.porcentajeDeDescuento;
  console.log(descuento);
  storeItem2.calcularPrecioDescuento = function () {
    console.log(storeItem2.precio - descuento);
  };
}

const storeItem = {
  precio: 80,
  porcentajeDeDescuento: 0.1,
};

console.log(agregarMetodoCalculoDescuento(storeItem));
