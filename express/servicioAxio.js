const axios = require("axios");
const url = "http://localhost:3000/destino"

axios
    .get(url)
    .then((response) => {
        console.log("response: ", response);
    }).catch((error) => {
        console.log(error);
    });