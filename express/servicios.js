console.log("Hola servicios.");

const url = "http://localhost:3000/destino"

fetch((url))
    .then((response) => response.json)
    .then((response) => {
        console.log(response);
    })
    .catch((error) => {
        console.log(error);
    })