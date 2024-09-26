const li1= document.getElementById("C1")
const li2= document.getElementById("C2")
const li3= document.getElementById("C3")

li1.addEventListener("click", ()=>{
    var valueID = li1.getAttribute("id")
    var valueDataID = li1.getAttribute("data-id")
    var valueDataDialCode = li1.getAttribute("data-dial-code")
    alert(
        "Elemento seleccionado:\n" +
        "ID elemento: " + valueID + "\n" +
        "ISO ID: " + valueDataID + "\n" +
        "Dial Code: " + valueDataDialCode
    );
})
li2.addEventListener("click", ()=>{
    var valueID = li2.getAttribute("id")
    var valueDataID = li2.getAttribute("data-id")
    var valueDataDialCode = li2.getAttribute("data-dial-code")
    alert(
        "Elemento seleccionado:\n" +
        "ID elemento: " + valueID + "\n" +
        "ISO ID: " + valueDataID + "\n" +
        "Dial Code: " + valueDataDialCode
    );
})
li3.addEventListener("click", ()=>{
    var valueID = li3.getAttribute("id")
    var valueDataID = li3.getAttribute("data-id")
    var valueDataDialCode = li3.getAttribute("data-dial-code")
    alert(
        "Elemento seleccionado:\n" +
        "ID elemento: " + valueID + "\n" +
        "ISO ID: " + valueDataID + "\n" +
        "Dial Code: " + valueDataDialCode
    );
})