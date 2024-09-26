var personaArr = [
    {
        "personId" : 123,
        "name" : "Jhon",
        "city" : "Melbourn",
        "phoneNo" : "1234567890"
    },
    {
        "personId" : 124,
        "name" : "Amelia",
        "city" : "Sydney",
        "phoneNo" : "1234567890"
    },
    {
        "personId" : 125,
        "name" : "Emily",
        "city" : "Perth",
        "phoneNo" : "1234567890"
    },
    {
        "personId" : 126,
        "name" : "Abraham",
        "city" : "Perth",
        "phoneNo" : "1234567890"
    }
] 

function crearTabla(datos){
    const table = document.createElement("table")

    const encabezado = table.insertRow()
    encabezado.innerHTML = "<th>personID</th><th>Name</th><th>City</th><th>PhoneNO</th>";

    datos.forEach(persona =>{
        const fila = table.insertRow();
        const celdaId = fila.insertCell();
        celdaId.textContent = persona.personId
        const celdaName = fila.insertCell();
        celdaName.textContent= persona.name
        const celdaCity = fila.insertCell();
        celdaCity.textContent = persona.city;
        const celdaPhone = fila.insertCell();
        celdaPhone.textContent = persona.phoneNo
    })
    document.body.appendChild(table);
}

crearTabla(personaArr);