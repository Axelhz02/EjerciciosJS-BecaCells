// //Tiene dos arreglos de String, ‘clientes’ y ‘empleados’, y deseas combinarlas para
// crear una arreglo de contactos. ¿Qué método sería el más adecuado para esta
// tarea? Prueba todas las opciones y describe el resultado.
// a. concat
// b. join
// c. push
// d. splice 

const clientes =["Axel", "Rene", "Jorge"];
const empleados = ["Michael", "Dwight", "Jim"]
const resultadoConConcat = clientes.concat(empleados)
const resultadoConJoin = clientes.join(empleados)
const resultadoConPush = clientes.push(empleados)
const resultadoConSplice = clientes.splice(empleados)

console.log(resultadoConConcat)
console.log(resultadoConJoin)
console.log(resultadoConPush)
console.log(resultadoConSplice)

/// La respuesta correcta es la A) ya que asi muestra correctamente el arreglo con los strings de los dos arreglos