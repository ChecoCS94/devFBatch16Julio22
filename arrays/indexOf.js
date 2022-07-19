"use strict";
const numeros = [4, 1, 5, 2, 3];

console.log(numeros.indexOf(5));

function encontrarValor(numero) {
    if(numeros.indexOf(numero) > -1){
        return "Valor encontrado";
    }
    else{
        return "Valor no encontrado";
    }
}

console.log(encontrarValor(4));