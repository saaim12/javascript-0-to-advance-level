/*in java script
{

} 
this is scope */
var name="saiim"
console.log(name);
//in case of a function
function greet(){
    var name="sahal"
    console.log(name);
}

greet();
//if i comment line no 10 then it will give result:saiim because it will see its outer scope
//another example
greet1();
function greet1(){
    var name="saboor"
    console.log(name);
    greet2();
    function greet2(){
        var name="lala"
        console.log(name); //it will give result:lala but if i comment line no 23 it will give me result:saboor from souter scope
    }
}

let a=2;
let b=5;
function sum(){
    return a+b;
}

console.log(sum());
//another example

const myVar = "global";

function outerFunction() {
    const myVar = "outer";

    function innerFunction() {
        const myVar = "inner";
        
        // Accessing variables with the same name in different scopes
        console.log(myVar);  // "inner" (from innerFunction scope)
    }

    innerFunction();
    console.log(myVar);  // "outer" (from outerFunction scope)
}

outerFunction();
console.log(myVar);  // "global" (from global scope)
//this phenomenon is called lexical scoping a function inside a function can access its outer function attributes but
// not the other way around
//but a function inside could not access outside attributes
//chotay baroon se mang sakte haiin but baray choton se nhi
//it is called lexical scoping
//it is also called static scoping
//it is also called local scoping
//it is also called inner scoping
//it is also called function scope
//there is also another exception
function hello(){
    const name="saboor"
    function greet2(){
        console.log(name);
    }
    return greet2;
}
const greet3=hello();
greet3();
//it is possible because at return it is assigned full lexical scope of the function
//also  another thing for var scope is only function and for let and const it is {} these braces
if (true) {
    var v=20;
}
console.log(b);
//for its solution we use let and const
