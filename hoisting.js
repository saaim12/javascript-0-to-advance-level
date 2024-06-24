//hoisting in java script
// Hoisting is a behavior in JavaScript where variable and function declarations are moved (or "hoisted") to the top of their containing
// scope 
// during the compilation phase, before the code is executed. This means that you can use variables and functions in your code even before they are declared in the source code.
// However, it's important to note that only the declarations are hoisted, not the initializations. Let's look at examples for both variables and functions:
//there are two type of contexts in javascript global context and execution context
//when a function is declared it is scanned by global context and made avaliable
//but when a variale is declared it is scanned by gobal context and made unavaliable and undefined
//examples
//this is possible because gloabl context scanned and made it avliable
hello();
function hello(){
    console.log("Hello World");
}
//this is not possible beacue global context scanned it and made it undefined it is making it avaliable but also making it undefined 
console.log(name);
var name="saaim" ;
//but it gives and error in function assigned to a variable
hello2(name);
var hello2 = function(name){
    console.log("Hello "+ name);
}
console.log(y); // ReferenceError: Cannot access 'y' before initialization
let y = 10;
console.log(y); // 10

// Hoisting for let:

// Variables declared with let are hoisted to the top of their block (or function) scope.
// However, unlike var, they are not initialized during the hoisting phase.
//  This results in the creation of a "temporal dead zone" where the variable exists, but you cannot access it before the declaration.
console.log(x); // ReferenceError: Cannot access 'x' before initialization
let x = 5;
console.log(x); // 5

//same as
// Hoisting for const:

// Variables declared with const also hoist to the top of their block (or function) scope.
// Like let, they are not initialized during hoisting, and the temporal dead zone applies.
// Additionally, const variables must be assigned a value during the declaration and this assignment is not hoisted.
console.log(z); // ReferenceError: Cannot access 'y' before initialization
const z = 10;
console.log(z); // 10

console.log(hello2); // Output: undefined

