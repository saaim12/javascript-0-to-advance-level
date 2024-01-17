function hello(){
    console.log("Hello World");
}
//functions with parameters
function helloName(name){
    console.log("Hello " + name);
}
helloName("John");
helloName("Jane");
//call by reference
function sum(a, b) {
    return a + b;
}

function callByReference(callback, a, b) {
    return callback(a, b);
}

const result = callByReference(sum, 10, 20);
console.log(result);
//call by value
function incrementNumber(num) {
    num++;
    console.log("Inside function:", num);
}

let myNumber = 10;
incrementNumber(myNumber);
//example of functional programming
function greeting(){
    return "Hello, world!";
}
//it will give no result
greeting();
//we have a return statement so we have to assign it
const func_result = greeting();
console.log(func_result);
//arrow functions
const iseven = (num) => { return num%2===0? true: false; };
console.log(iseven(10));
//arrow functions without curly braces if it can be written in one line and also without return keyword
const iseven1 = (num) => num%2===0? true: false;
//or
const iseven2 = (num) => (num%2===0? true: false);
//a very useful method for arrays
//also example for callback
let evennumbers =[2,4,6,8,10];
console.log(evennumbers.every((num)=> num%2===0? true: false));
