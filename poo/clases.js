"use strict"

class Animal{
    constructor(especie, sonido, color){
        this.especie = "Especie general",
        this.color = "Color general",
        this.sonido = "Sonido general"
    }

    emitirSonido(){
        return console.log("Estoy emitiendo sonidos...");
    }
}

const jirafa = new Animal("Jirafa", "...", "amarillo");
const leon = new Animal("León", "ñénguele", "naranja");

