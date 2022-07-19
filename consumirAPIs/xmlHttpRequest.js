"use strict";

const XMLHTTPRequest = require("xmlhttprequest").XMLHttpRequest;

let url1 = "https://pokeapi.co/api/v2/pokemon/ditto";
let url2 = "https://pokeapi.co/api/v2/pokemon/ditto";

function getData(url, callback) {
    let xhttp = new XMLHTTPRequest();

    xhttp.open("GET", url, true);

    xhttp.onreadystatechange = () => {
        if(xhttp.readyState === 4){
            if(xhttp.status === 200){
                callback(null, JSON.parse(xhttp.responseText));
                console.log('Algo');
            }else{
                console.log('Malo');
            }
        }
    }

    xhttp.send();
}

let datos1 = {};
let datos2 = {};

getData(url1, (error, data) => {
    console.log("Datos 1.", error, data);
});

getData(url2, (error, data) => {
    console.log("Datos 2.", error, data);
});