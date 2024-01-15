//hoisting in java script
//there are two type of contexts in javascript global context and execution context
//when a function is declared it is scanned by global context and made avaliable
//but when a variale is declared it is scanned by lobal context and made unavaliable and undefined
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




