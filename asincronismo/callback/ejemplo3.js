function hola(nombre, callback) {
    setTimeout(() => {
        return callback(nombre);
    }, 1500);
}

hola("Samanta", (nombre) => {
        return console.log(`Hola ${nombre}`)
    }
)

hola("Número 1", (nombre) => {
        return console.log(`${nombre} dice: yo iré solo porque soy bárbaro.`);
    }
)