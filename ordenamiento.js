// Obtener números por el usuario
const numeros = prompt('Ingresa tus números:');

// Verificar si el ususario ingreso los números separados por coma o por espacios
const coma = numeros.includes(',');

let arregloNumeros = [];

// Separar por coma o por espacios
if (coma) {
  arregloNumeros = numeros.split(',').map(num => +num); // Transformar valores a numeros
} else {
  arregloNumeros = numeros.split(' ').map(num => +num);
}

// Verificar que todos los valores sean numeros
const invalid = arregloNumeros.filter(num => isNaN(num));

if (invalid.length > 0) {
  alert('Ingresaste valores invalidos, solo puedes ingresar números');
} else {
  console.log(arregloNumeros.sort((a, b) => a - b));
  alert('Ve la consola para ver el arreglo ordenado')
}
