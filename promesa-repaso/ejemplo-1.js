"use strict";

let x = 10;
const promesa = new Promise((resolve, reject) => {
    if (x === 10){
        return resolve("La promesa se cumplió.");
    }
    return reject("La promesa NO se cumplió.");
});


//Manejar la respuesta de la promesa
promesa
    .then((response) => {
        console.log(response);
        return 18;
    })
    .then((response) => {
        let respuesta = response * 2;
        console.log(respuesta);
    })
    .then(() => {
        console.log("Esta es la última parte de la promesa.");
    })
    .catch((error) => {
        console.error(error);
    });