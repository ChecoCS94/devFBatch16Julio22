"use strict";

// const getData = () => {
//     return fetch("https://jsonplaceholder.typicode.com/users")
//         .then((response) => {
//             return response.json();
//         })
//         .then((data) => {
//             return data;
//         })
//         .catch((error) => {
//             console.error(error);
//         })
// }

const getData = async () => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
    }
}

// const showData = async () => {
//     const data = await getData();
//     return console.log(data);
// }

async function showData(params) {
    const data = await getData();
    return console.log(data);
}

showData();