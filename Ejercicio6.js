// 6. Teniendo el siguiente objeto:
// var object = {
//  key1: 10,
//  key2: 3,
//  key3: 40,
//  key4: 20
// };
// Generar la función para pasar cada elemento ‘key’ a un arreglo y ordenarlos
// según su valor.

var object ={
    key1: 10,
    key2: 3,
    key3: 40,
    key5: 20
}
console.log(object)

function ordenarArray(object) {
    let objAArray = Object.entries(object);
    console.log("Array antes de ordenar:", objAArray);
    
    let arrayOrdenado = objAArray.sort((a, b) => a[1] - b[1]);
    
    console.log("Array ordenado:", arrayOrdenado);

    let objetoOrdenado = Object.fromEntries(arrayOrdenado);
    console.log("Objeto ordenado:", objetoOrdenado);
}

ordenarArray(object);