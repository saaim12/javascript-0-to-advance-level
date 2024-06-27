//Closures are a fundamental part of JavaScript that enable powerful and flexible programming patterns.
// By understanding how closures capture their lexical environment,
// you can leverage them to create private variables, implement partial application,
 //build function factories, and manage state in event handlers.
 //Closures are functions that have access to variables in their lexical scope, even after the function's execution has ended.
 // This means that a closure can access variables from its outer function, even if the outer function has returned.
 //Closures are created when a function is defined inside another function.

 // Example of a closure:
 function outerFunction() {
    let outerVariable = "Hello, ";
    function innerFunction() {
      console.log(outerVariable + "world!");
    }
   return innerFunction;
}
let greet = outerFunction();
console.log(greet()); // Output: Hello, world