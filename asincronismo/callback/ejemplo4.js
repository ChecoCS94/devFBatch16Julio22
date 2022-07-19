function hola(nombre) {
    setTimeout(() => {
        return console.log("Hola" + nombre);
    }, 1500);
}

function adios(nombre) {
    setTimeout(() => {
        return console.log("Adiós" + nombre);
    }, 1000);
}

hola("Samy");
adios("Samy");