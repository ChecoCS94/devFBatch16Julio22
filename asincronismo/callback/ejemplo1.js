//Callback es cuando una función de orden mayor recibe y ejecuta otra función que tiene como parámetro

function ordenMayor(otraFuncion) {
    return otraFuncion();
}

const suma = (a, b) => {
    return a + b;
}

const calculadora = (a, b, operacion) => {
    return operacion(a, b);
}

console.log(calculadora(5, 8, suma));