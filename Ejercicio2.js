// 2. Teniendo el siguiente arreglo:
// var numbers = [5, 32, 43, 4];
// Y la siguiente función:
// numbers.filter(function(n) { return n % 2 !== 0; });
// Agrega una variable para alojar el resultado de la función filter() y explica cual
// es el resultado.

var numbers = [5,32,43,4]

var resultado = numbers.filter(function(n){
    return n %2 !== 0;
})

console.log(resultado)
// El restultado es [5,43], porque filter lo que hace es regresar todos los valores que cumplan con la funcion que pongamos, en este caso dice que va a sacar el resto de la division entre dos y va a mostrar todos los que sean diferentes a 0, osea que no son pares