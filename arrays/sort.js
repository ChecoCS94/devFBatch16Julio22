"use strict";
const numeros = [4, 1, 5, 2, 3];

console.log(numeros.sort());
console.log(numeros.sort((a, b) => b - a));

const arregloNumeros = [{id: 4}, {id: 1}, {id: 5}, {id: 2}, {id: 3}];
console.log(arregloNumeros.sort((a, b) => b.id - a.id));
console.log(arregloNumeros.sort((a, b) => a.id - b.id));