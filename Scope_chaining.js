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