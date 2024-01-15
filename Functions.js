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

console.log("Before function calling:", myNumber);

incrementNumber(myNumber);

console.log("After function: calling", myNumber);
/*
In the provided example, the variable num inside the incrementNumber function is incremented, but it doesn't affect the value of myNumber outside the function. This behavior is due to the fact that primitive values, like numbers, are passed by value in JavaScript.
When you pass myNumber to the incrementNumber function, a copy of the value is passed to the parameter num. The increment operation num++ only affects the local variable num within the function scope. The original myNumber variable outside the function remains unchanged.*/


//example of functional programming
function greeting(){
    return "Hello, world!";
}
//it will give no result
greeting();
//we have a return statement so we have to assign it
const func_result = greeting();
console.log(func_result);
