// 4. Dado el siguiente arreglo de objetos:
// let people = [
// { name: "bob", id=1 }, { name: "john", id=2 },
// { name: "alex", id=3 }, { name: "john", id=3 }
// ];
// Genera la función para obtener el numero de veces que aparece cada nombre. 

let people = [{
    name: "bob",
    id : 1
}, {
    name: "john",
    id: 2

}, {
    name: "alex",
    id: 3
}, {
    name:"john",
    id: 3
}
]

function contadorNombre(arreglo, propiedad){
    return arreglo.reduce((contador, obj) =>{
        const valor = obj[propiedad];
        if(contador[valor]){
            contador[valor] ++;

        } else{
            contador[valor] = 1;
        }
        return contador
    },{})

}

console.log(contadorNombre(people, "name"))