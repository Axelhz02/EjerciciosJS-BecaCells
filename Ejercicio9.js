const ubiCoordenadas = document.getElementById("parrafo")
const teclado= document.getElementById("tecla")
document.addEventListener("mousemove", function(event){
    var x = event.clientX
    var y = event.clientY

    ubiCoordenadas.textContent= "Posicion X: " + x + "Posicion Y: " + y ;

});

document.addEventListener("keydown", function(event){
    teclado.textContent="Tecla: " + event.key
})