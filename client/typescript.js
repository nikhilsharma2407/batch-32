"use strict";
exports.__esModule = true;
// Strict type checking
// Compile time error detection
var value;
// value = 'abcd'
var id;
var unknownType;
id = 123;
id = 'abcd';
// id = null
// console.log(value);
var name = 'Nikhil';
// name = undefined
// name = 101
// Functions using Typescript
// function sum(num1:number, num2:number):number {
//     return num1+num2
// };
var sum = function (num1, name, num2) {
    console.log("Hello ".concat(name));
    return num1 + num2;
};
// sum();
// sum(1,2,3,4,5,6,7,8);
// sum(1);
// sum(undefined,1);
sum(1, 'Nikhil', 1);
