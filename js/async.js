// Async JS
const axios = require('axios');
// setTimeout
// Callback
// Promises

// {
    // state: pending, settled - fullfilled/rejected
    // value
// }

// Async await

// setTimeout(() => {
//     console.log("Timeout");
// }, 5000);

// const promise = Promise.resolve("some value");

// console.log(promise.then(value=>console.log(value)));


// const data = fetch('https://jsonplaceholder.typicode.com/users');
// data.then(val=>console.log(val))
// data.then(val=>val.json().then(data=>console.log(data)))

const dataPromise = axios.get('https://jsonplaceholder.typicode.com/users');

console.log(dataPromise.then(val=>console.log(val.data)));

console.log("some other work");
