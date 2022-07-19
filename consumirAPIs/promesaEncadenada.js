"use strict";

const promise = new Promise((resolve, reject) => {
    const number = Math.floor(Math.random() * 10);

    setTimeout(() => {
        number > 3 ? resolve(number) : reject("El número es menor a 3.");
    }, 1000);
})

function suma(numero1, numero2) {
    return numero1 + numero2;
}

function multi(numero1, numero2) {
    return numero1 * numero2;
}

promise.then((numero) => {
    console.log(`El número inicial es: ${numero}`);
    return suma(numero, 5);
}).then((valorSumado) => {
    return multi(valorSumado, 10);
}).then((valorMultiplicado) => {
    console.log(`El valor final es: ${valorMultiplicado}`);
}).catch((error) => {
    console.log(error);
});