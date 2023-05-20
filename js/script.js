// var name = "Nikhil";
// var name = "abcd"
// var name = "test"

const { default: axios } = require("axios");


// ES6
let name = "Nikhil";

let variable;
variable = "initialisation";

// const price = 1000;

// data type
let price = 1000;
price = "abcd";

let someVar = 123;


console.log(someVar);

// Primitive
// number 123 1.123 1_00_000 
// string "str" 'str'
// boolean true/false
// undefined
// null


// pass by refernce
// Objects
// Array
// functions

// rest/spread operator

const obj = {
    name: "Nikhil",
    id: 101
};
obj.dept = "Engg";
obj.course = "Full Stack";

// creating a copy of obj
const emp = { name: obj.name, id: obj.id };
// const emp = {...obj};
obj.id = 999;

let id1 = obj.id
let id2 = id1;
id1 = 1234;
console.log({ id1 }, { id2 });

console.log(obj.id, emp.id, obj.username);

console.log('keys', ...Object.keys(obj));
console.log('values', ...Object.values(obj));
console.log('entries', ...Object.entries(obj));

let arr = [1, true, "name"];
const employees = [[obj, emp], { name: "xyz", id: 123 }, "value"]

// const employees = [0x100,1x200,"value"]

// const arrEmp = employees[0];
// arrEmp[0]
// arrEmp[1]

// console.log(errorVar);
// let errorVar;


const copyArr = [...arr];
employees[0][1] = 123;
const copyEmp = [...employees];
employees[1].name = "updated name"
console.log(employees, copyEmp);
// const deepCopy = structuredClone(employees);
// deepCopy[0][0] = 123;
// console.log(employees);

// function sum(num1,num2){

//     if(num1%2===0){
//         let blockScope = true;
//         var fnScope = "abcd";
//         console.log('num1 is even',blockScope);
//     }
//     console.log(fnScope);
//     // console.log(blockScope);
//     return num1+num2
// }
// const sum = (num1,num2)=>{
//     return num1+num2
// }
const sum = (num1,num2)=>num1+num2;

const nums = [1,2,3,4,5,6,7,8,9,10];

// for(let i=0;i<arr.length;i++){
//     console.log(arr[i]);
// }

arr.forEach((val,i)=>{
    console.log(val,i)
});


const squares =  nums.map(val=>val**2);

const even = nums.filter(val =>val%2===0);
const odd = nums.filter(val =>val%2);

console.log(odd);

// falsy
// null
// undefined
// 0
// ""
// NaN

// truthy
// {}
// []
// anything other than falsy
