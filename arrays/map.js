"use strict";

const array = [1, 2, 3, 4, 5];

const arrayNuevo = array.map((dato) => dato);

console.log(array);
console.log(arrayNuevo);

const arregloObject = [
    {id: 1, nombre: "Judy"}, 
    {id: 2, nombre: "Polo"}, 
    {id: 3, nombre: "Mata"}
];
const nuevosObjetos = arregloObject.map((dato) => ({
    ...dato,
    nombre: "Cambio de valores",
    mascotas: "Nuevos valores"
}));

console.log(nuevosObjetos);