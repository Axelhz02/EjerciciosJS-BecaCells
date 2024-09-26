// Dado el siguiente arreglo:
// var myArray = [1, 2, 3, 4];
// Genera la función para imprimir en consola el numero máximo y el numero
// mínimo.

var myArray = [1,2,3,4]


function MayorYMenor(myArray){
    var numeroMayor= Math.max(...myArray)
    var numeroMenor = Math.min(...myArray)

    console.log("El valor mas grande en el array es:" + numeroMayor)
    console.log("El valor mas pequeño del array es:" +numeroMenor)
}

MayorYMenor(myArray)

