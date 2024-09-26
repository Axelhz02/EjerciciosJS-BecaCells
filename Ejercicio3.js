// 3. Dado el siguiente arreglo de objetos:
// var people = [{
//  id: 1,
//  name: "John",
//  age: 28
// }, {
//  id: 2,
//  name: "Jane",
//  age: 31
// }, {
// id: 3,
//  name: "Peter",
// age: 55 }];
// Genera la función en javascript que filtre a las personas menores de 35 años.

var people = [{
    id: 1,
    name: "John",
    age: 28
}, {
    id:2,
    name: "Jane",
    age: 31
},{
    id:3,
    name:"Peter",
    age:55

}]

function filtrarMenores35(people){
    filtradoObj = people.filter((n) => {
        return n.age < 35
    })

    console.log(filtradoObj)
}

filtrarMenores35(people);