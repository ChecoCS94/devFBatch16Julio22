"use strict";

const numeros = [1, 2, 3, 4, 5];

let numero2 = numeros.reduce((a, b) => a + b);

console.log(numero2);

const arregloNumeros = [{id: 1}, {id: 2}, {id: 3}, {id: 4}, {id: 5}];

let arregloNumero2 = arregloNumeros.reduce((a, b) => {
    return a + b.id;
}, 0);

console.log(arregloNumero2);