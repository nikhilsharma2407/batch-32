// Strict type checking
// Compile time error detection
let value: number;
value = 'abcd'

let id: number | string | boolean;

let unknownType: any;

id = 123
id = 'abcd'
// id = null

// console.log(value);

let name = 'Nikhil'

// name = undefined
// name = 101
// Functions using Typescript

// function sum(num1:number, num2:number):number {
//     return num1+num2
// };

const sum = (num1: number, num2: number): number => {
    console.log(`Hello ${name}`)
    return num1 + num2
}


// sum();
// sum(1,2,3,4,5,6,7,8);
// sum(1);
// sum(undefined,1);
sum(1, 1);


// optional paramerter in function
const addThreeNumber = (num1: number, num2: number, num3?: number) => {
    const sum = num1 + num2
    if (num3) {
        return sum + num3
    }
    return sum;
}

addThreeNumber(1, 1, 1)
addThreeNumber(1, 1)

// // Wrong appraoch
// const add = (arg1:number|string, arg2:number|string)=>{
//     return <any>arg1+arg2
// }


// Write a fn , should take two strings or two numbers are return their sum or concatenation
type StrOrNum = number | string

const add = <T extends StrOrNum>(arg1: T, arg2: T): T => {
    return <any>arg1 + arg2
}


// add(1,'2')
// add('1',2)
// add('1','2')
// // add<string>(1,2)

// add<boolean>(false,true);

interface IAddress{
    city:string
}

interface IUser {
    readonly id: string;
    title: string;
    firstName: string;
    lastName: string;
    picture: string;
    address?: IAddress
    fullName?: string
}

const user: IUser = {
    "id": "60d0fe4f5311236168a109ca",
    "title": "ms",
    "firstName": "Sara",
    "lastName": "Andersen",
    "picture": "https://randomuser.me/api/portraits/women/58.jpg"
}

// enum are string constatnts

enum ACTIONS {
    LOGIN = 'LOGIN',
    SIGNUP = 'SIGNUP',
    ADD_FRIEND = 'ADD_FRIEND',
    REMOVE_FRIEND = 'REMOVE_FRIEND',
    MESSAGE = 'MESSAGE',
    RESET_PASSWORD = 'RESET_PASSWORD',
    LOADING = 'LOADING',
    LOGOUT = 'LOGOUT',
    newProp = 'newProp'
}


export { }